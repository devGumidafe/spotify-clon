<script setup lang="ts">
import ItemSideBar from '@/components/side-bar/ItemSideBar.vue';
</script>

<template>
  <ul class="my-8">
    <RouterLink to="/">
      <ItemSideBar
        class="ml-[1px]"
        :iconSize="23"
        name="Home"
        iconString="home"
        pageUrl="home"
      />
    </RouterLink>
    <RouterLink to="/search">
      <ItemSideBar
        class="ml-[1px]"
        :iconSize="24"
        name="Search"
        iconString="search"
        pageUrl="search"
      />
    </RouterLink>
    <RouterLink :to="{ name: 'library', params: { artistId: 1 } }">
      <ItemSideBar
        class="ml-[2px]"
        :iconSize="23"
        name="Your Library"
        iconString="library"
        pageUrl="library"
      />
    </RouterLink>
    <div class="py-3.5"></div>
    <RouterLink to="/liked">
      <ItemSideBar
        class="-ml-[1px]"
        :iconSize="27"
        name="Liked Songs"
        iconString="liked"
        pageUrl="liked"
      />
    </RouterLink>
  </ul>
</template>

<style scoped></style>
