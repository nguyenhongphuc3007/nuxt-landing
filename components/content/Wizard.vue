<script setup>
defineProps({
  align: {
    default: "center",
  },
});
</script>

<template>
  <div :class="['mt-16', align === 'center' && 'text-center']">
    <a-row class="md:absolute md:left-1/3" type="flex" justify="center">
       <a-col type="flex" justify="center" class="wizard--background flex justify-center" :xs="24" :sm="24" :md="14" :lg="14">
          <img src="~/assets/img/wizard.png" alt="">
      </a-col>
    </a-row>
    <a-row class="static lg:pt-60 sm:pt-2" type="flex" justify="center">
      <a-col class="wizard--background" :xs="24" :sm="24" :md="14" :lg="14">
          <img src="~/assets/img/map.png" alt="">
      </a-col>
    </a-row>
  </div>
</template>
<style lang="scss">
// .wizard{
//   &--background{
//     background-image: url("~/assets/img/map.png");
//   }
// }
</style>
