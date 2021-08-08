<template>
  <div id="search-result-page">
    <b-container fluid="md">
      <b-row class="text-center">
        <b-col col md="2" sm="12" lg="1"></b-col>
        <b-col col md="8" sm="12" lg="10">
          <b-row class="text-center">
            <b-col col sm=12 md="1">
            </b-col>
            <b-col col sm=12 md="10">
              <h1 class="title">VOID ENGINE VUE</h1>
              <div class="search-bar">
                <b-button-toolbar aria-label="Toolbar with button groups and input groups">
                  <b-button-group size="sm" class="mr-1" v-on:click="search">
                    <b-button class="search-button">Search</b-button>
                  </b-button-group>
                  <b-input-group style={min-width:800px}>
                    <b-form-input v-model="searchQuery" v-on:keyup.enter="search"
                                  class="text-right search-field"></b-form-input>
                  </b-input-group>
                </b-button-toolbar>
              </div>
            </b-col>
            <b-col col sm=12 md="1">
            </b-col>
          </b-row>
          <b-row class="search-result-list">
            <search-result-list :results="this.results"/>
          </b-row>
        </b-col>
        <b-col col sm=12 md="2" lg="1">
        </b-col>
      </b-row>

    </b-container>

  </div>
</template>

<script>


import SearchResultList from "./SearchResultList.vue"
import SearchService from "@/components/SearchService.mjs";

export default {
  name: "SearchResultPage.vue",
  components: {SearchResultList},
  data: function () {
    return {
      "searchQuery": "",
      "results": [{
        "title": "Lorem convallis lacindales tellu.i",
        "url": "aplace.here"
      }]
    }
  },
  methods: {
    search() {
      SearchService.callSearch(this.searchQuery).then(response => {
        console.log(response.data);
        this.results = SearchService.convertToResults(response.data)
      });
    }
  }
}
</script>

<style scoped>
#search-result-page {
  width: 100%;
}

</style>