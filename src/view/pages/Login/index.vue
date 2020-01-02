<template >
  <section class="form">
    <h3 class="form-title">Login</h3>
    <div class="card">
      <form @submit.prevent="loginUser">
        <section class="form-section">
          <label for="email">Email</label>
          <input type="text" name="email" id="email" v-model="payload.email" />
        </section>

        <section class="form-section">
          <label for="password">Password</label>
          <input type="password" name="password" id="password" v-model="payload.password" />
        </section>
        <section class="form-section">
          <button type="submit" @click="loginUser">Login</button>
        </section>
      </form>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      payload: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapMutations("login", ["updateLogin"]),
    loginUser() {
      this.$store.dispatch("Login/loginUser", this.payload);
    }
  }
};
</script>

<style lang="scss">
</style>
