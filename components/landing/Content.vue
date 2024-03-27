<script setup>
defineProps({
  align: {
    default: "center",
  },
});
</script>

<template>
  <div>
    <ContentBanner></ContentBanner>
    <ContentAbout></ContentAbout>
    <ContentWizard></ContentWizard>
    <ContentGame></ContentGame>
    <ContentPartner></ContentPartner>
  </div>
</template>
