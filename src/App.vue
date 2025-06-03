<template>
  <div id="app">
    <div class="header-bg">
      <webHeader />
      <HeaderContent />
    </div>
    <Main_a />
    <Main_b />
    <Main_c />
    <secondry_1 />
    <secondry_2 />
    <secondry_3 />
    <secondry_4 />
    <secondry_5 />
    <FooterComponent />
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import webHeader from "./components/webHeader.vue";
import HeaderContent from "./components/HeaderContent.vue";
import Main_a from "./components/Main_a.vue";
import Main_b from "./components/Main_b.vue";
import Main_c from "./components/Main_c.vue";
import secondry_1 from "./components/secondry_1.vue";
import secondry_2 from "./components/secondry_2.vue";
import secondry_3 from "./components/secondry_3.vue";
import secondry_4 from "./components/secondry_4.vue";
import secondry_5 from "./components/secondry_5.vue";
import FooterComponent from "./components/FooterComponent.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    webHeader,
    HeaderContent,
    Main_a,
    Main_b,
    Main_c,
    secondry_1,
    secondry_2,
    secondry_3,
    secondry_4,
    secondry_5,
    FooterComponent,
  },
};
</script>

<style>
.header-bg {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
      210deg,
      rgba(13, 28, 64, 0.45) 0%,
      rgba(18, 44, 92, 0.35) 60%,
      rgba(26, 58, 106, 0.25) 100%
    ),
    url("/images/header.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
