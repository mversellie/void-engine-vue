import axios from "axios";
var solrEndpoint = "https://api.voidengine.io:8443/search";

export default {

    callSearch: function (query) {
        var config = {};

        config["params"] = {"query": query}
        config["paramsSerializer"] = this.serializeParams
        config["httpsAgent"] = axios.https

        return axios.get(solrEndpoint, config)
    },

    serializeParams:function (params){
        var result = "query=" + params['query'].replace(/\s/g, ',');
        return result ;
    },

    convertToResults: function (raw) {
        var ret = [];
        raw.forEach(row => {
            var temp = row
            temp["url"] = row["id"]
            temp["description"] = (( typeof row["description"] == 'undefined') ? "": row.description);
            temp["title"] = (( typeof row["title"] == 'undefined') ? row.id : row.title);
            ret.push(temp);
        })
        return ret;
    }
}