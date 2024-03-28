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
          <img class="zooming-image" src="~/assets/img/wizard.png" alt="">
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
.zooming-image {
  /* Set initial properties for the image */
  transform: scale(3);
  transition: transform 0.5s ease-in-out; /* Transition for smooth scaling */
  animation: zoom-animation 1s infinite alternate; /* Apply the animation */

  /* Optional: Add some styles to center the image */
  display: block;
  margin: 0 auto;
}

/* Define the animation */
@keyframes zoom-animation {
  0% {
    transform: scale(1); /* Original scale */
  }
  100% {
    transform: scale(1.2); /* Zoomed scale */
  }
}

/* Apply animation on hover */
.animated-image:hover {
  animation: pulse 1s infinite; /* Apply the animation on hover */
}
</style>
