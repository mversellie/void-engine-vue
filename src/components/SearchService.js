import axios from "axios";

var solrEndpoint = "http://localhost:8983/solr/nutch/select?q=content%3A(";
var solrEnding = ")&wt=json";

export default {
    callSearch: function (query) {
        var defaultQuery = "*";
        var generatedQuery = defaultQuery;

        if (query) {
            var splitWordsFromQuery = query.split(/[ ,]+/);
            var apendedWordsWithSpaces = "";
            splitWordsFromQuery.forEach(element =>
                apendedWordsWithSpaces += (element + '%20'));
            var locationOflastApendedSpace = apendedWordsWithSpaces.length - 3;
            generatedQuery = apendedWordsWithSpaces.substring(0,locationOflastApendedSpace);
        }

        var generatedQueryUrl = solrEndpoint + generatedQuery + solrEnding;


        return axios.get(generatedQueryUrl)
    }
}