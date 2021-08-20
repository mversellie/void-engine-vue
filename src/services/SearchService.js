import axios from "axios";
import config from "../config"
var apiEndpoint = config.apiSearchEndpoint;

export default {
    callSearch: function (query) {
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

    serializeParams: function (params) {
        var result = "query=" + params['query'].replace(/\s/g, '%20');
        return result;
    },

    convertToResults: function (raw) {
        console.log(raw.results);
        return raw.results;
    },
}