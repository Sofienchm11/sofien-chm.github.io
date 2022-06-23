<template>
  <div class="test">
    <h1>This is an help page</h1>
    <WelcomeMsg />
  </div>
</template>

<script>
import WelcomeMsg from "../components/global/WelcomeMsg.vue";
export default {
  name: "help-component",
  components: { WelcomeMsg },
};
</script>
