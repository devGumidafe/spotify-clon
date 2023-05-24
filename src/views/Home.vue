<script setup lang="ts">
import HomeCard from '@/components/HomeCard.vue';
</script>

<script setup lang="ts"></script>

<template>
  <div class="p-4">
    <Button
      class="text-white text-2xl font-semibold cursor-pointer"
      label="Podcast to make you smarter"
    />

    <div class="py-1.5"></div>

    <div class="flex item-center">
      <HomeCard
        image="https://picsum.photos/id/30/300/300"
        title="Title is here"
        subTitle="Subtitle is here"
      />
      <HomeCard
        class="md:block hidden"
        image="https://picsum.photos/id/35/300/300"
        title="Title is here"
        subTitle="Subtitle is here"
      />
      <HomeCard
        class="lg:block hidden"
        image="https://picsum.photos/id/40/300/300"
        title="Title is here"
        subTitle="Subtitle is here"
      />
      <HomeCard
        class="xl:block hidden"
        image="https://picsum.photos/id/45/300/300"
        title="Title is here"
        subTitle="Subtitle is here"
      />
      <HomeCard
        image="https://picsum.photos/id/50/300/300"
        title="Title is here"
        subTitle="Subtitle is here"
      />
    </div>
  </div>

  <div class="p-4">
    <Button
      class="text-white text-2xl font-semibold cursor-pointer"
      label="Recommended radio"
    />

    <div class="py-1.5"></div>

    <div class="flex item-center">
      <HomeCard
        image="https://picsum.photos/id/30/300/300"
        title="Title is here"
        subTitle="Subtitle is here"
      />
      <HomeCard
        class="md:block hidden"
        image="https://picsum.photos/id/35/300/300"
        title="Title is here"
        subTitle="Subtitle is here"
      />
      <HomeCard
        class="lg:block hidden"
        image="https://picsum.photos/id/40/300/300"
        title="Title is here"
        subTitle="Subtitle is here"
      />
      <HomeCard
        class="xl:block hidden"
        image="https://picsum.photos/id/45/300/300"
        title="Title is here"
        subTitle="Subtitle is here"
      />
      <HomeCard
        image="https://picsum.photos/id/50/300/300"
        title="Title is here"
        subTitle="Subtitle is here"
      />
    </div>
  </div>

  <div class="p-4">
    <Button
      class="text-white text-2xl font-semibold cursor-pointer"
      label="Recommended songs"
    />

    <div class="py-1.5"></div>

    <div class="flex item-center">
      <HomeCard
        image="https://picsum.photos/id/30/300/300"
        title="Title is here"
        subTitle="Subtitle is here"
      />
      <HomeCard
        class="md:block hidden"
        image="https://picsum.photos/id/35/300/300"
        title="Title is here"
        subTitle="Subtitle is here"
      />
      <HomeCard
        class="lg:block hidden"
        image="https://picsum.photos/id/40/300/300"
        title="Title is here"
        subTitle="Subtitle is here"
      />
      <HomeCard
        class="xl:block hidden"
        image="https://picsum.photos/id/45/300/300"
        title="Title is here"
        subTitle="Subtitle is here"
      />
      <HomeCard
        image="https://picsum.photos/id/50/300/300"
        title="Title is here"
        subTitle="Subtitle is here"
      />
    </div>
  </div>
</template>

<style scoped></style>
