<template lang="pug">
  .App
    AppHeader
    AppNavigation
    main.AppContent
      router-view @authenticated="setAuthenticated"
    AppFooter
</template>

<script>
import { mapGetters } from "vuex";
import AppHeader from "@/view/global/app-header";
import AppNavigation from "@/view/global/app-navigation";
import AppFooter from "@/view/global/app-footer";
import { setCookie, getCookie } from "@/utils/helper";

export default {
  name: "App",
  components: {
    AppHeader,
    AppNavigation,
    AppFooter
  },
  mounted() {
    // if (!this.authenticated) {
    //   this.$router.replace({ name: "Login" });
    // }
  },
  computed: {
    ...mapGetters("App", ["userId"])
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    }
  },
  created() {
    // getCookie('user');
  }
};
</script>

<style lang="scss">
@import "stylesheet/app";
</style>
