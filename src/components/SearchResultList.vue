<template>
  <div class="search-result-list">
    <span v-for="searchResult in results" :key="searchResult.link">
      <search-result :link="searchResult.link" :title="searchResult.title"></search-result>
    </span>
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