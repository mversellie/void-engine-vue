<template>
  <div class="search-result">
    <div class="result-title"><a v-bind:href="link">{{ title }}</a></div>
  </div>
</template>

<script>
export default {
  name: "SearchResult.vue",
  props: {
    link: String,
    title: String,
    description: String
  }
}
</script>

<style scoped>

</style>