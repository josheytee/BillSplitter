<template>
  <section class="form">
    <h3 class="form-title">Create Bill</h3>
    <div class="card">
      <form action method="post">
        <div class="form-muti">
          <div>
            <section class="form-section">
              <label for="title">Title</label>
              <input type="text" name="title" id="title" />
            </section>

            <section class="form-section">
              <label for="description">description</label>
              <textarea name="description" id="description"></textarea>
            </section>
          </div>
          <div>
            <section>
              <h5 class="title">
                Recipents
                <a href="#" class="btn" style="float:right" @click="addRecepient">+</a>
              </h5>
            </section>
            <!-- <Recepient></Recepient> -->
            <div v-for="rec in recepients" :key="rec">
              <section class="form-section">
                <label for="email">Email</label>
                <input type="text" name="email" id="email" />
              </section>
              <section class="form-section">
                <label for="amount">Amount</label>
                <input type="number" step="0.01" name="amount" id="amount" />
              </section>
              <section>
                <a href="#" @click="removeRecepient">Remove</a>
              </section>
            </div>
          </div>
        </div>
        <section class="form-section">
          <button type="submit">Create</button>
        </section>
      </form>
    </div>
  </section>
</template>

<script>
import Recepient from "./Recepient";
import { mapGetters } from "vuex";
// import { getCookie } from "@/utils/helper";
import helper from "@/utils/helper";

export default {
  name: "CreateBill",
  data: function() {
    return {
      recepients: 1
    };
  },
  components: { Recepient },
  computed: {},
  methods: {
    addRecepient() {
      this.recepients++;
    },
    removeRecepient() {
      this.recepients--;
    }
  },
  mounted() {
    // console.log(helper.getCookie("test"));
    if (!helper.getCookie("user")) {
      this.$router.replace({ name: "Login" });
    }
  }
};
</script>

<style lang="scss">
</style>
