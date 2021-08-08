<template>
  <b-row>
    <div class="search-result">
      <h4 class="result-title"><a v-bind:href="url">{{ title }}</a></h4>
      <hr class="result-title-content-border"/>
      <p class="result-desc">{{description }}</p>
    </div>
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
.result-title {
  text-align: left !important;
}

.result-desc {
  text-align: left !important;
}
</style>