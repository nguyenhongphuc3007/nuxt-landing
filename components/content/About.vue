<script setup>
defineProps({
  align: {
    default: "center",
  },
});
</script>

<template>
  <div :class="['mt-16', align === 'center' && 'text-center']">
    <a-row type="flex" justify="center">
      <a-col :xs="24" :sm="24" :md="7" :lg="7">
        <div class="about__me">
          <p class="text-6xl font-black capitalize text-left">
            {{ $t("about us") }}
          </p>
          <p style="color: #757575" class="text-sm text-left py-6 pr-4">
            {{
              $t(
                "Browse our selection of free online games and have a great time without leaving the site! Our Kids Games option also includes game reviews, extensive game cheats and walkthroughs, and much more. We have exclusive free downloads, videos, and articles as well. Etech reviews the most popular kids games from all the most popular video gaming platforms, so you don’t need to search around for fun anywhere else on the Internet. Explore a whole new world of gaming on Etech."
              )
            }}
          </p>
        </div>
        <div class="about__number xs:flex md:flex-col">
          <div class="about__users xs:py-0 md:py-8">
            <p style="color: #079bee" class="text-left text-8xl font-bold">
              600<span class="text-4xl">M</span>+
            </p>
            <p class="text-left capitalize text-2xl font-bold">
              {{ $t("users") }}
            </p>
          </div>
          <div class="about__games">
            <p style="color: #079bee" class="text-left text-8xl font-bold">
              135+
            </p>
            <p class="text-left capitalize text-2xl font-bold">
              {{ $t("games") }}
            </p>
          </div>
        </div>
      </a-col>
      <a-col
        style="background-color: #eeeeee"
        :xs="24"
        :sm="24"
        :md="7"
        :lg="7"
      >
        <div class="about__detail flex pt-20 px-10">
          <div class="about__detail--icon">
            <i class="iconsax" icon-name="calendar-tick"></i>
          </div>
          <div class="about__detail--content">
            <h1 class="text-4xl font-bold text-left">{{ $t("24 - Hour") }}</h1>
            <p class="text-sm text-left" style="color: #757575">
              {{
                $t(
                  `24/7 access ensures operators' businesses runs smoothly all year long.`
                )
              }}
            </p>
          </div>
        </div>
        <div class="about__detail flex py-10 px-10">
          <div class="about__detail--icon">
            <i class="iconsax" icon-name="pen-path-2"></i>
          </div>
          <div class="about__detail--content">
            <h1 class="text-4xl font-bold text-left capitalize">
              {{ $t("design") }}
            </h1>
            <p class="text-sm text-left" style="color: #757575">
              {{
                $t(
                  `Combining imaginative universes, play dynamics, and unprecedented gameplay, our games transcend the boundaries of the virtual world by weaving innovative gameplay.`
                )
              }}
            </p>
          </div>
        </div>
        <div class="about__detail flex pb-10 px-10">
          <div class="about__detail--icon">
            <i class="iconsax" icon-name="group"></i>
          </div>
          <div class="about__detail--content">
            <h1 class="text-4xl font-bold text-left capitalize">
              {{ $t("team") }}
            </h1>
            <p class="text-sm text-left" style="color: #757575">
              {{
                $t(
                  `Etech is an award-winning, international studio of designers, artists, animators and producers that create content for the biggest names in film and video games.`
                )
              }}
            </p>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<style lang="css" scoped>
.iconsax {
  font-size: 27px;
  color: black;
  background-color: #e3fcff;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: block;
  text-align: center;
  margin: auto;
  line-height: 2.5rem;
}
</style>
