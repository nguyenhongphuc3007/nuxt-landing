<template>
  <footer class="footer text-white">
    <a-row class="py-10 xs:px-4">
      <a-col :xs="24" :sm="24" :md="9" :lg="9" class="justify-center">
        <div class="footter--company flex justify-center">
          <img src="~/assets/img/logo.svg" alt="" srcset="" />
        </div>
        <div class="footter--social flex justify-center gap-4 pt-6">
          <twitter-outlined :style="{ height: '30px', width: '30px', color: 'fff' }" />
          <facebook-outlined :style="{ height: '30px', width: '30px',  color: 'fff' }" />
          <linkedin-outlined :style="{ height: '30px', width: '30px',  color: 'fff' }" />
        </div>
      </a-col>
      <a-col :xs="24" :sm="24" :md="6" :lg="6">
        <div class="footer--address">
          <h1 class="text-2xl font-bold capitalize">{{ $t("address") }}</h1>
        </div>
        <div class="footer--location py-3 flex">
          <div class="footer--location__logo">
            <i class="iconsax" icon-name="location"></i>
          </div>
          <div class="footer--location__detail ml-2">
            <p>
              Valletta Buildings, South Street, Valletta - VLT 1103 Malta, US
            </p>
            <p class="pr-2">
              {{
                $t(
                  "20 Phan Dang Luu street, Hai Chau District, Danang city, Vietnam"
                )
              }}
            </p>
          </div>
        </div>
        <div class="footer--mobile py-3 flex">
          <div class="footer--mobile__logo">
            <i class="iconsax" icon-name="mobile"></i>
          </div>
          <div class="footer--mobile__detail ml-2">
            <p>(+1) 555-0108-000 {{ $t("or") }} (+236) 555-0108</p>
          </div>
        </div>
      </a-col>
      <a-col :xs="24" :sm="24" :md="9" :lg="9">
        <div class="footer--subscribe md:w-2/3 xs:w-full lg:w-2/3">
          <h1 class="text-2xl font-bold capitalize">{{ $t("Subscribe") }}</h1>
          <p class="py-3">
            {{
              $t(
                "Subscribe to our newsletter and be the first to know about our updates"
              )
            }}
          </p>
          <div class="fotter--subscribe__input">
            <a-input class="inputfield bg-transparent placeholder-white" v-model:value="userName" :placeholder="$t('Enter your email')">
              <template #suffix>
                 <i class="iconsax" icon-name="arrow-right"></i>
              </template>
            </a-input>
          </div>
        </div>
      </a-col>
    </a-row>
    <div class="footer--copyright py-2 bg-black text-center">
      <h2>2017 Copyright. Policy.</h2>
    </div>
  </footer>
</template>
<script lang="ts" setup>
import {
  TwitterOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from "@ant-design/icons-vue";
import { ref } from 'vue';
const userName = ref<string>('');
</script>
<style >
.footer {
  background-image: url("~/assets/img/footerBG.png");
}
.anticon {
  color: white;
  height: 30px;
  width: 30px;
}
.anticon svg {
    display: inline-block;
      height: 30px;
  width: 30px;
}
.inputfield ::placeholder {
  color: white;
  opacity: 1; /* Firefox */
}
.ant-input {
  background-color: transparent;
}
</style>
