import SearchService from "@/components/SearchService.js"
import axios from "axios";
import mockSolr from "./mockSolrReturn.js"

jest.mock('axios');

describe("testing search service unit", () => {


    it('calls axios', async () => {

        axios.get.mockResolvedValue(mockSolr.mockLucene());

        SearchService.callSearch("").then(data =>
            expect(data.response.numFound).toEqual(2));
    });

    it('calls axios with start of url and end of url', async () => {

        axios.get.mockResolvedValue(mockSolr.mockLucene());

        SearchService.callSearch("");

        var urlArg = axios.get.mock.calls[0][0]

        expect(urlArg).toContain("http://localhost:8983/solr/nutch/select?q=content%3A(")
        expect(urlArg).toContain(")&wt=json")
    });

    it('calls axios with search terms', async () => {

        var testNumber = 2;

        axios.get.mockResolvedValue(mockSolr.mockLucene());

        SearchService.callSearch("dzone work");

        var urlArg = axios.get.mock.calls[testNumber][0]

        expect(urlArg).toContain("dzone%20work")
    });

    it('calls axios with * if blank query', async () => {
        axios.get.mockResolvedValue(mockSolr.mockLucene());

        SearchService.callSearch("");

        var urlArg = axios.get.mock.calls[0][0]

        expect(urlArg).toContain("*")
    });

});