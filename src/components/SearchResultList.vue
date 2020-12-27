<template>
  <div class="search-result-list">
      <search-result v-for="searchResult in results" :link="searchResult.link" :title="searchResult.title" :key="searchResult.link"></search-result>
  </div>
</template>

<script>
import SearchResult from "./SearchResult.vue"

export default {
  name: "SearchResultList.vue",
  components: {SearchResult},
  props: {
    results: Array
  }
}
</script>

<style scoped>

</style>