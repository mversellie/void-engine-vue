<template>
  <div id="search-result-page">
    <b-container fluid="md">
      <b-row class="text-center">
        <b-col col md="2" sm="12"></b-col>
        <b-col col md="8" sm="12">
          <b-row class="text-center">
            <b-col col sm=12 md="1">
            </b-col>
            <b-col col sm=12 md="10">
              <div>
                <b-button-toolbar aria-label="Toolbar with button groups and input groups">
                  <b-button-group size="sm" class="mr-1" >
                    <b-button>Go</b-button>
                  </b-button-group>
                  <b-input-group style={min-width:800px} >
                    <b-form-input class="text-right"></b-form-input>
                  </b-input-group>
                </b-button-toolbar>
              </div>
            </b-col>
            <b-col col sm=12 md="1">
            </b-col>
          </b-row>
          <search-result-list :results='[{
  "title": "Lorem convallis lacindales tellu.i",
    "link": "aplace.here"
    }]'/>
        </b-col>
        <b-col col sm=12 md="2">
        </b-col>
      </b-row>

    </b-container>

  </div>
</template>

<script>



import SearchResultList from "./SearchResultList.vue"

export default {
  name: "SearchResultPage.vue",
  components: {SearchResultList}
}
</script>

<style scoped>
#search-result-page {
  width: 100%;
}

</style>