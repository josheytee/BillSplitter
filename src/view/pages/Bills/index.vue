<template>
  <div>
    <div class="bills-wrapper">
      <h3>Bills</h3>
      <div class="bill-container">
        <h3>
          #1
          <small>20 miuntes ago</small>
        </h3>
        <section class="card">
          <h3>bill title</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos deserunt eligendi repellendus vitae reprehenderit voluptatem aperiam velit, repudiandae accusamus magni numquam reiciendis commodi mollitia magnam, optio animi aspernatur id cum.</p>
          <hr />
          <h4>Recepients</h4>
          <table>
            <tr>
              <td>emial@w.c</td>
              <td>#400</td>
            </tr>
          </table>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bils",
  created() {
    this.$store.dispatch("Bills/bills");
  }
};
</script>

<style lang="scss">
.Home {
  padding: 50px;
}
</style>
