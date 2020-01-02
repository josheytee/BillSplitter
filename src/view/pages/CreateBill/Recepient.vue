<template>
  <div>
    <section class="form-section">
      <label for="email">Email</label>
      <input type="text" name="email" id="email" />
    </section>
    <section class="form-section">
      <label for="amount">Amount</label>
      <input type="number" step="0.01" name="amount" id="amount" />
    </section>
    <section>
      <a href="#">Remove</a>
    </section>
  </div>
</template>

<script>
export default {
  name: "Recepient",
  props: ["remove"],
  methods: {
    removes() {
      return this.$props.remove;
    }
  }
};
</script>

<style lang="scss">
</style>
