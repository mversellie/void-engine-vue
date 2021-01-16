<template>
  <div id="search-result-page">
    <b-container fluid>
      <b-row class="text-center">
        <b-col xs="12" md="1">
        </b-col>
        <b-col xs="12" md="10">
          <h1 class="title"><a class="title-link" href="index.html">VOID ENGINE</a></h1>
          <div class="search-bar">
            <b-row class="text-center">
              <b-col xs="12" md="2"></b-col>
              <b-col xs="12" md="8">
                <b-row class="text-center">
                  <b-col xs="11" md="10">
                    <b-input-group>
                      <b-form-input v-model="searchQuery" v-on:keyup.enter="search"
                                    class="text-right search-field"></b-form-input>
                    </b-input-group>
                  </b-col>
                  <b-col xs="1" md="1">
                    <b-button class="search-button"  v-on:click="search">Search</b-button>
                  </b-col>
                  <b-col xs="12" md="2"></b-col>
                </b-row>
              </b-col>
              <b-col xs="12" md="2"></b-col>
            </b-row>
          </div>
        </b-col>
        <b-col xs="12" md="1">
        </b-col>
      </b-row>
      <search-result-list class="search-result-list" :results="this.results"/>

    </b-container>

  </div>
</template>

<script>


import SearchResultList from "./SearchResultList.vue"
import SearchService from "@/components/SearchService.js";

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
        console.log(this.results)
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