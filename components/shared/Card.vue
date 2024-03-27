<template>
  <a-card hoverable class="py-2">
    <template #cover>
      <img class="static" alt="example" :src="link" />
      <div class="card__content absolute bottom-0 left-0 p-6">
        <h2 class="text-left text-white lg:text-5xl xs:text-2xl font-bold">{{title}}</h2>
        <p style="color: #ffffff" class="text-sm text-white text-left py-6">  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      
    </template>
    
  </a-card>
</template>

<script>
export default {
  props: ['title','link']
}
</script>


