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

const components: { title: string, href: string, description: string }[] = [
  {
    title: 'User',
    href: '/users',
    description:
        'See all users',
  },  {
    title: 'User',
    href: '/user/add',
    description:
        'Add a user',
  },
]
</script>

<template>
  <NavigationMenu :viewport="false">
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuLink as-child :class="navigationMenuTriggerStyle()">
          <a href="/">Docs</a>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Users</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            <li
                v-for="component in components"
                :key="component.title"
                :title="component.title"
            >
              <a :href="component.href">{{ component.description }}</a>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink as-child :class="navigationMenuTriggerStyle()">
          <a href="/docs">Docs</a>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>List</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid w-[300px] gap-4">
            <li>
              <NavigationMenuLink as-child>
                <a href="#">
                  <div class="font-medium">Components</div>
                  <div class="text-muted-foreground">
                    Browse all components in the library.
                  </div>
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink as-child>
                <a href="#">
                  <div class="font-medium">Documentation</div>
                  <div class="text-muted-foreground">
                    Learn how to use the library.
                  </div>
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink as-child>
                <a href="#">
                  <div class="font-medium">Blog</div>
                  <div class="text-muted-foreground">
                    Read our latest blog posts.
                  </div>
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid w-[200px] gap-4">
            <li>
              <NavigationMenuLink as-child>
                <a href="#">Components</a>
              </NavigationMenuLink>
              <NavigationMenuLink as-child>
                <a href="#">Documentation</a>
              </NavigationMenuLink>
              <NavigationMenuLink as-child>
                <a href="#">Blocks</a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid w-[200px] gap-4">
            <li>
              <NavigationMenuLink as-child>
                <a href="#" class="flex-row items-center gap-2">
                  <CircleHelpIcon />
                  Backlog
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink as-child>
                <a href="#" class="flex-row items-center gap-2">
                  <CircleIcon />
                  To Do
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink as-child>
                <a href="#" class="flex-row items-center gap-2">
                  <CircleCheckIcon />
                  Done
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
