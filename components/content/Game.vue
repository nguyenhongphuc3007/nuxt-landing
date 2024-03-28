<script setup>
defineProps({
  align: {
    default: "center",
  },
});
const col1 = [
  {id:1,link:'/content/space.png',title:'E-Space'},
  {id:2,link:'/content/pirates.png',title:'Pirates'},
  {id:3,link:'/content/magictree.png',title:'Magic tree'},
]
const col2 = [
  {id:1,link:'/content/kingland.png',title:'Kingland'},
  {id:2,link:'/content/witchparty.png',title:'Witch Party'},
  {id:3,link:'/content/aborigines.png',title:'Abrogines'},
]
const col3 = [
  {id:1,link:'/content/lastgame.png',title:'The Last Game'},
  {id:2,link:'/content/rocky.png',title:'Rocky'},
  {id:3,link:'/content/cinderella.png',title:'Cinderella'},
]
const col4 = [
  {id:1,link:'/content/dragon.png',title:'G-Dragon'},
  {id:2,link:'/content/fire.png',title:'Blue Fire'},
  {id:3,link:'/content/egypt.png',title:'Egypt Game'},
]
</script>

<template>
  <div id="games" :class="['mt-16', align === 'center' && 'text-center']">
    <div class="game__title">
        <h1 class="capitalize text-6xl text-black font-black text-center">{{$t('our games')}}</h1>
        <p class="lg:line-clamp-3 lg:w-1/2 sm:line-clamp-5 sm:w-full text-center m-auto py-4">{{$t('As a pioneer of mobile app gamification, we take pride in originality and individuality, providing global players with state-of-the-art games that feature splendid storylines, sensational sound effects and magnificent animation that never cease to impress.')}}</p>
    </div>
    <!-- <div class="game__cards">
        <SharedCard></SharedCard>
    </div> -->
    <a-row class="justify-center md:gap-4">
      <a-col :xs="{ order: 1, span: 12 }" :sm="{ order: 1, span: 12 }" :md="{ order: 1, span: 5 }" :lg="{ order: 1, span: 5 }">
         <SharedCard v-for="image in col1" :link="image.link" :key="image.id" :title="image.title">
         </SharedCard>
      </a-col>
      <a-col class="md:pt-20" :xs="{ order: 3, span: 12 }" :sm="{ order: 1, span: 12 }" :md="{ order: 1, span: 5 }" :lg="{ order: 1, span: 5 }">
         <SharedCard v-for="image in col2" :link="image.link" :key="image.id" :title="image.title">
         </SharedCard>
      </a-col>
      <a-col :xs="{ order: 2, span: 12 }" :sm="{ order: 1, span: 12 }" :md="{ order: 1, span: 5 }" :lg="{ order: 1, span: 5 }">
         <SharedCard v-for="image in col3" :link="image.link" :key="image.id" :title="image.title">
         </SharedCard>
      </a-col>
      <a-col class="md:pt-20" :xs="{ order: 4, span: 12 }" :sm="{ order: 1, span: 12 }" :md="{ order: 1, span: 5 }" :lg="{ order: 1, span: 5 }">
         <SharedCard v-for="image in col4" :link="image.link" :key="image.id" :title="image.title">
         </SharedCard>
      </a-col>
    </a-row>
  </div>
</template>
