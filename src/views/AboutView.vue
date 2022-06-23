<template>
  <div class="about">
    <h1>This is an about page</h1>
    <WelcomeMsg />
  </div>
</template>

<script>
// @ is an alias to /src
import WelcomeMsg from "@/components/global/WelcomeMsg.vue";

export default {
  name: "about-componant",
  components: {
    WelcomeMsg,
  },
};
</script>
