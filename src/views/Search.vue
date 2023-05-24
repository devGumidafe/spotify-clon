<script setup lang="ts">
import CategorySelect from '@/components/CategorySelect.vue';

const numberRandom = () => {
  return Math.floor(Math.random() * 100);
};
</script>

<template>
  <div class="p-4">
    <Button
      class="text-white text-2xl font-semibold cursor-pointer"
      label="Podcast to make you smarter"
    />

    <div class="py-1.5"></div>

    <div
      class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6"
    >
      <CategorySelect
        category="Podcasts"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="Audiobooks"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="Made For You"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="New Release"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="New Release"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="Podcasts"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="Audiobooks"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="Made For You"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="New Release"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="New Release"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="Podcasts"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="Audiobooks"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="Made For You"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="New Release"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="New Release"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="Podcasts"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="Audiobooks"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="Made For You"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="New Release"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="New Release"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="Podcasts"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="Audiobooks"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="Made For You"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="New Release"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="New Release"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="Podcasts"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="Audiobooks"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="Made For You"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="New Release"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="New Release"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="Podcasts"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="Audiobooks"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="Made For You"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="New Release"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="New Release"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="Podcasts"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="Audiobooks"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="Made For You"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="New Release"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
      <CategorySelect
        category="New Release"
        :image="`https://picsum.photos/id/${numberRandom()}/300/300`"
      />
    </div>
  </div>
</template>

<style scoped></style>
