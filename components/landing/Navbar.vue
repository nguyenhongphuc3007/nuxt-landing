<script lang="ts" setup>
import { ref } from "vue";
import { CaretDownOutlined,CheckOutlined } from "@ant-design/icons-vue";
import { useI18n } from 'vue-i18n'
const { locale, t } = useI18n()
const menuitems = [
  {
    title: "about us",
    path: "#",
  },
  {
    title: "games",
    path: "/pricing",
  },
  {
    title: "partners",
    path: "/about",
  },
  {
    title: "contact us",
    path: "/contact",
  },
];
const userName = ref<string>("");
const open = ref(false);
const lang = ref<string>("en");
const ismobile = ref(false);
function handleLang(e: any) {
  // Handle click event
  console.log(e);
  lang.value = e;
  console.log(lang)
  locale.value = e
};
function scrollTo(title:string) {
  console.log('title')
  switch (title) {
    case 'about us':
      
      const element = document.getElementById('aboutus');
            window.scrollTo({
        top: element.offsetTop, // Scrolls to the top of the element
        behavior: 'smooth'
      });
      break;
    case 'games':
      
      const games = document.getElementById('games');
            window.scrollTo({
        top: games.offsetTop, // Scrolls to the top of the element
        behavior: 'smooth'
      });
      break;
    case 'partners':
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
      break;
    case 'contact us':
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
      break;
  
    default:
      break;
  }
  
}
</script>

<template>
  <LandingContainer>
    <div v-if="!ismobile" class="xs:bg-[url('~/assets/img/bg-mobile.png')] md:bg-[url('~/assets/img/navbarBG.png')] navbar bg-cover static">
      <header class="flex flex-col lg:flex-row justify-between items-center">
        <div class="flex w-full lg:w-auto items-center justify-between">
          <img
            class="pl-10 py-5"
            src="~/assets/img/logo.svg"
            alt=""
            srcset=""
          />
          <div class="block lg:hidden">
            <button @click="open = !open" class="text-white-800">
              <i class="iconsax" icon-name="hamburger-menu" @click="ismobile = !ismobile"></i>
            </button>
          </div>
        </div>
        <nav class="sm:hidden xs:hidden w-full lg:w-auto mt-2 lg:flex lg:mt-0 lg:mr-10">
          <ul class="flex flex-col lg:flex-row lg:gap-3">
            <li v-for="item of menuitems">
              <a
                class="flex font-bold lg:px-6 py-2 text-white hover:text-gray-900 uppercase"
                @click="scrollTo(item.title)"
              >
                {{ $t(item.title) }}
              </a>
            </li>
            <a-dropdown>
              <a class="ant-dropdown-link flex icons-list" @click.prevent>
                <img v-if="lang == 'en'" src="~/assets/img/usa.png" alt="" />

                <img v-else src="~/assets/img/vietnam.png" alt="" />

                <CaretDownOutlined :style="{ fontSize: '16px',width:'16px' }" />
              </a>
              <template #overlay>
                <a-menu>
                  <a-menu-item @click="handleLang('vi')" class="flex">
                    <CheckOutlined v-show="lang == 'vi'" :style="{color: 'black'}"></CheckOutlined>
                    <img src="~/assets/img/vietnam.png" alt="" />
                    <h1 class="py-2 px-2">{{ $t("Vietnamese") }}</h1>
                  </a-menu-item>
                  <a-menu-item @click="handleLang('en')" class="flex">
                    <CheckOutlined v-show="lang == 'en'" :style="{color: 'black'}"></CheckOutlined>
                    <img src="~/assets/img/usa.png" alt="" />
                    <h1 class="py-2 px-2">{{ $t("English") }}</h1>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </ul>
          <div class="lg:hidden flex items-center mt-3 gap-4"></div>
        </nav>
      </header>
      <div class="content xs:pt-44 md:pt-48">
        <h1 class="capitalize text-white text-7xl text-center font-black">
          {{ $t(`we're getting ready`) }}
        </h1>
        <div class="content__timecount py-10">
          <div
            class="content__timecount--date bg-white rounded-lg border-2 md:w-2/5 xs:w-5/6 m-auto"
          >
            <img class="p-2 m-auto" src="~/assets/img/time.png" alt="" />
          </div>
        </div>
        <div class="content__subscribe xl:w-1/3 md:w-2/5 xs:w-5/6 lg:w-2/5 m-auto xs:py-2 md:py-10 xl:pb-80">
          <p class="text-white text-lg text-center m-auto">
            {{
              $t(
                "We will back to something amazing. Getting the latest updates about our games. Please sign up to our newsletter."
              )
            }}
          </p>
          <a-input
            class="placeholder-black my-10 p-2 m-auto inputfield placeholder-black"
            v-model:value="userName"
            :placeholder="$t('Enter your email')"
          >
            <template #suffix>
              <i class="iconsax" icon-name="arrow-right"></i>
            </template>
          </a-input>
        </div>
      </div>
      <img
        class="xs:static md:absolute top-32 md:max-h-[600px] xl:max-h-max"
        src="~/assets/img/wizardman.png"
        alt=""
      />
    </div>
    <div v-else>  
      <div class="mobile__header flex justify-between">
        <a-dropdown class="bg-gray p-2">
              <a class="ant-dropdown-link flex icons-list" @click.prevent>
                <img v-if="lang == 'en'" src="~/assets/img/usa.png" alt="" />

                <img v-else src="~/assets/img/vietnam.png" alt="" />

                <CaretDownOutlined :style="{ fontSize: '16px',width:'16px' }" />
              </a>
              <template #overlay>
                <a-menu>
                  <a-menu-item @click="handleLang('vi')" class="flex">
                    <CheckOutlined v-show="lang == 'vi'" :style="{color: 'black'}"></CheckOutlined>
                    <img src="~/assets/img/vietnam.png" alt="" />
                    <h1 class="py-2 px-2">{{ $t("Vietnamese") }}</h1>
                  </a-menu-item>
                  <a-menu-item @click="handleLang('en')" class="flex">
                    <CheckOutlined v-show="lang == 'en'" :style="{color: 'black'}"></CheckOutlined>
                    <img src="~/assets/img/usa.png" alt="" />
                    <h1 class="py-2 px-2">{{ $t("English") }}</h1>
                  </a-menu-item>
                </a-menu>
              </template>
        </a-dropdown>
        <i class="iconsax text-black m-0" style="color:black; margin: 0" icon-name="x" @click="ismobile = !ismobile"></i>
      </div>
      <div class="mobile__guiding">
        <ul class="flex flex-col lg:flex-row lg:gap-3 xs:gap-4">
            <li v-for="item of menuitems">
              <a
                :href="item.path"
                class="justify-center text-center flex font-bold lg:px-6 py-2 text-black hover:text-gray-900 uppercase"
              >
                {{ $t(item.title) }}
              </a>
            </li>
          </ul>
      </div>
    </div>

  </LandingContainer>
</template>

<style lang="scss" scoped>
.navbar {
  // background-image: url("~/assets/img/navbarBG.png");
  background: cover;
}
.ant-input {
  color: black !important;
}
input::placeholder {
  font-weight: bold;
  opacity: 0.5;
  color: red !important;
}
.ant-input::placeholder {
  color: red !important; /* Change the color to your desired color */
}
.anticon{
  font-size: 16px;
}
.icons-list :deep(.anticon) {
  margin-right: 6px;
  font-size: 24px;
}
.iconsax {
    font-size: 27px;
    color: white;
    height: 40px;
    width: 40px;
    display: block;
    text-align: center;
    margin: auto;
    line-height: 2.5rem;
}

</style>>


