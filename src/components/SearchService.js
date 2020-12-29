import axios from "axios";

var solrEndpoint = "http://localhost:8983/solr/nutch/select";

export default {
    callSearch: function (query) {
        var defaultQuery = "*";
        var generatedQuery = defaultQuery;
        var config = {};

        if (query) {
            var splitWordsFromQuery = query.split(/[ ,]+/);
            var apendedWordsWithSpaces = "";
            splitWordsFromQuery.forEach(element =>
                apendedWordsWithSpaces += (element + '%20'));
            var locationOflastApendedSpace = apendedWordsWithSpaces.length - 3;
            generatedQuery = apendedWordsWithSpaces.substring(0, locationOflastApendedSpace);
        }

        config["params"] = {"q": "content:" + generatedQuery, "wt": "json"}


        return axios.get(solrEndpoint, config)
    },

    convertToResults: function (raw) {
        return raw.response.docs;
    }
}