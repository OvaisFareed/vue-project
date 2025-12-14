<script setup lang="ts">
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from 'lucide-vue-next'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu';

const userMenu: { title: string, href: string, description: string }[] = [
  {
    title: 'User',
    href: '/users',
    description:
        'All users',
  },
  /* {
    title: 'User',
    href: '/user/add',
    description:
        'Add a user',
  }, */
]
</script>

<template>
  <NavigationMenu class="z-10" :viewport="false">
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuLink as-child :class="navigationMenuTriggerStyle()">
          <RouterLink to="/">Home</RouterLink>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger href="/users">Users</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid w-[200px] gap-2">
            <li
                v-for="component in userMenu"
                :key="component.title"
                :title="component.title"
            >
              <NavigationMenuLink as-child>
                <RouterLink :to=component.href>{{ component.description }}</RouterLink>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
