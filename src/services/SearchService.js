import axios from "axios";
var apiEndpoint = "http://api.voidengine.io/search";

export default {
    callSearch: function (query) {
        //var defaultQuery = "*:*";
        var generatedQuery = "";
        var config = {};

        if (query) {
            generatedQuery = query;
        }

        console.log(generatedQuery);

        console.log(generatedQuery);
        config["params"] = {"query": generatedQuery}
        config["paramsSerializer"] = this.serializeParams

        return axios.get(apiEndpoint, config)
    },

    serializeParams:function (params){
        var result = "query=" + params['query'].replace(/\s/g, '%20');
        return result;
    },

    convertToResults: function (raw) {
        return raw.results;
    }
}