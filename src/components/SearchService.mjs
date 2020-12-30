import axios from "axios";
var solrEndpoint = "http://localhost:8983/solr/nutch/select";

export default {

    callSearch: function (query) {
        var defaultQuery = "*:*";
        var generatedQuery = defaultQuery;
        var config = {};
        var fieldsToCheck = ["metatag.description","content"]

        if (query) {
            generatedQuery = "(";
            fieldsToCheck.forEach((item) => generatedQuery = generatedQuery +  item + ':"' + query + '") OR (');
            generatedQuery = generatedQuery.substring(0,generatedQuery.length - 5);
        }

        console.log(generatedQuery)
        config["params"] = {"q": generatedQuery , "wt": "json"}
        config["paramsSerializer"] = this.serializeParams

        return axios.get(solrEndpoint, config)
    },

    serializeParams:function (params){
        var result = "q=" + params['q'].replace(/\s/g, '%20');
        return result + "&wt=" + params['wt'];
    },

    convertToResults: function (raw) {
        return raw.response.docs;
    }
}