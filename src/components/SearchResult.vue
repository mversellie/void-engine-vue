<template>
  <b-row>
    <div class="search-result">
      <div class="result-title"><a v-bind:href="url">{{ title }}</a></div></div>
  </b-row>
</template>

<script>
export default {
  name: "SearchResult.vue",
  props: {
    url: String,
    title: String,
    description: String
  }
}
</script>

<style scoped>
.result-title{
  text-align: left !important;
}
</style>