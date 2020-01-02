<template lang="pug">
  .AppFooter    hello fooeter
</template>

<script>
  // import { mapGetters } from 'vuex'

  export default {
    name: 'AppFooter',
    data () {
      return {
        siteLang: ''
      }
    },
    mounted () {
      this.siteLang = this.langDefault
    }
  }
</script>

<style lang="scss" scoped>
  .AppFooter {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #eee;
  }
</style>
