<script setup lang="ts">
import { users } from '@/store'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import AddUser from '@/components/User/add.vue'

</script>

<template>
  <div class="flex justify-between items-center w-full">
    <h2 class="text-xl font-bold">User List</h2>
    <Dialog>
      <DialogTrigger as-child>
        <Button>
          + Add User
        </Button>
      </DialogTrigger>
      <DialogContent class="sm:max-w-[425px]">
        <AddUser />
      </DialogContent>
    </Dialog>
  </div>
  <div class="section-padding">
    <Table class="table-auto w-full" v-if="users.list.length">
      <TableCaption>A list of all recent users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead class="w-[100px]">
            ID
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead class="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="(user, index) in users.list" :key="index">
          <TableCell class="font-medium">
            {{ index + 1 }}
          </TableCell>
          <TableCell>{{ user.username }}</TableCell>
          <TableCell class="text-right">
            <Dialog>
              <DialogTrigger as-child>
                <Button>
                  Edit
                </Button>
              </DialogTrigger>
              <DialogContent class="sm:max-w-[425px]">
                <AddUser is-edit="true" />
              </DialogContent>
            </Dialog>
          </TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colspan="3">
            Total
          </TableCell>
          <TableCell class="text-right">
            {{ users.list.length }}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
    <p v-else>No users found</p>
  </div>
</template>

<style scoped>

</style>