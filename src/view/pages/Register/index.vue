<template >
  <div>
    <section class="form">
      <h3 class="form-title">Register</h3>
      <div class="card">
        <form @submit.prevent="submitForm">
          <section class="form-section">
            <label for="username">Username</label>

            <input type="text" name="username" id="username" v-model="payload.username" />
          </section>
          <section class="form-section">
            <label for="email">Email</label>
            <input type="text" name="email" id="email" v-model="payload.email" />
          </section>

          <section class="form-section">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" v-model="payload.password" />
          </section>
          <section class="form-section">
            <label for="cpassword">Confirm Password</label>
            <input type="password" name="cpassword" id="cpassword" v-model="payload.cpassword" />
          </section>

          <section class="form-section">
            <button type="submit" @click="submitForm">Register</button>
          </section>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      payload: {
        username: "",
        email: "",
        password: ""
      }
    };
  },
  created() {
    // this.$store.dispatch("Register/getMessages");
  },

  methods: {
    ...mapActions("Register", ["updateRegister"]),
    submitForm() {
      // this.$validator.validateAll().then(result => {
      //   if (!result) return;
      this.$store.dispatch("Register/register", this.payload);
      // });
    }
  }
};
</script>

<style lang="sass" scoped>

</style>