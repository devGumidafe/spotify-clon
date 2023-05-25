<script setup lang="ts">
import { ref } from 'vue';

const openMenu = ref(false);
const menu = ref();

const toggleMenu = (event: any) => {
  openMenu.value = !openMenu.value;
  menu.value.toggle(event);
};

const menuItems = ref([
  {
    label: 'Profile',
    icon: 'pi pi-user',
  },
  {
    label: 'Logout',
    icon: 'pi pi-sign-out',
    command: () => {
     
    },
  },
]);
</script>

<template>
  <div
    class="w-[calc(100%-240px)] h-[60px] fixed right-0 z-20 bg-[#101010] bg-opacity-80 flex items-center justify-between"
  >
    <div class="flex item-center ml-6">
    </div>
    <div
      class="flex items-center rounded-full p-0.5 mr-6 mt-0.5 cursor-pointer bg-black hover:bg[#282828]"
      @click.stop="toggleMenu"
      :class="openMenu ? 'bg-[#282828]' : 'bg-black'"
      aria-haspopup="true"
      aria-controls="overlay_menu"
    >
      <Avatar
        image="./images/avatar.png"
        class="mr-2"
        size="large"
        shape="circle"
      />
      <span class="text-white text-[14px] font-semibold">Usuario</span>
      <span
        v-if="!openMenu"
        class="pi pi-angle-down px-2"
        style="font-size: 25px; color: #fff"
      />
      <span
        v-else
        class="pi pi-angle-up px-2"
        style="font-size: 25px; color: #fff"
      />
      <Menu ref="menu" id="overlay_menu" :model="menuItems" :popup="true" />
    </div>
  </div>
</template>

<style scoped>
:deep(.size-icon .pi) {
  font-size: 30px;
}

.custom-button {
  @apply bg-black border-0 size-icon hover:bg-[#282828] !important;
}

.custom-button:focus {
  @apply bg-black border-0 size-icon !important;
}

.menu-button {
  @apply bg-[#282828] !important;
}
</style>
