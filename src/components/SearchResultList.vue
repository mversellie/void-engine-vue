<template>
  <span class="search-result-span">
      <search-result v-for="searchResult in results" :url="searchResult.url" :title="searchResult.title"
                     :key="searchResult.url" :description="searchResult.content"></search-result>
  </span>
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
.search-result-span {
  min-width: 100%;
}
</style>