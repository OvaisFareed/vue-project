<script setup lang="ts">
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { users } from '@/store';
import { computed, onMounted } from "vue";

const props = defineProps({
  isEdit: {
    type: String,
  },
  name: {
    type: String,
  },
});

onMounted(() => {
  form.setValues({ name: props.name });
});

const buttonLabel = computed(() => {
  return Boolean(props.isEdit) ? 'Update' : 'Save';
});

const formSchema = toTypedSchema(z.object({
  name: z.string().min(2).max(50),
}));

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit((values) => {
  if (props.isEdit) {
    const index = users.list.findIndex(item => item.name === props.name);
    users.list.splice(index, 1, values);
  } else {
    users.list.push(values);
  }
  form.resetForm();
});
</script>

<template>
  <form class="space-y-6 py-4" @submit.prevent="onSubmit">
    <DialogHeader>
      <DialogTitle>{{ buttonLabel }} profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here. Click save when you're
        done.
      </DialogDescription>
    </DialogHeader>
    <div class="grid gap-4">
      <FormField v-slot="{ componentField }" name="name">
        <FormItem>
          <FormLabel>Name</FormLabel>
          <FormControl>
            <Input type="text" placeholder="Enter your name" v-bind="componentField" />
          </FormControl>
          <FormDescription>
            This is your public display name.
          </FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>
    </div>
    <DialogFooter>
      <DialogClose as-child>
        <Button variant="outline" type="button">
          Cancel
        </Button>
      </DialogClose>
      <Button type="submit">
        Save
      </Button>
    </DialogFooter>
  </form>
</template>
