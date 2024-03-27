<script setup>
defineProps({
  align: {
    default: "center",
  },
});
</script>

<template>
  <div :class="['mt-16', align === 'center' && 'text-center']">
   
  </div>
</template>
