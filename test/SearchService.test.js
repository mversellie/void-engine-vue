import SearchService from "@/components/SearchService.mjs"
import axios from "axios";
import mockSolr from "./mockSolrReturn.js"

jest.mock('axios');

describe("testing search service unit", () => {


    it('calls axios', async () => {

        axios.get.mockResolvedValue(mockSolr.mockLucene());

        SearchService.callSearch("").then(data =>
            expect(data.response.numFound).toEqual(2));
    });

    it('calls axios with start of url', async () => {

        axios.get.mockResolvedValue(mockSolr.mockLucene());

        SearchService.callSearch("");

        var urlArg = axios.get.mock.calls[0][0]

        expect(urlArg).toContain("http://localhost:8983/solr/nutch/select")
    });

    it('calls axios with return type json', async () => {

        axios.get.mockResolvedValue(mockSolr.mockLucene());

        SearchService.callSearch("dzone work");

        var parameters = axios.get.mock.calls[0][1];


        expect(parameters.params.wt).toBe("json")
    });

    it('calls axios with search terms', async () => {

        var testNumber = 2;

        axios.get.mockResolvedValue(mockSolr.mockLucene());

        SearchService.callSearch("dzone work");

        var parameters = axios.get.mock.calls[testNumber][1];

        expect(parameters.params.q).toContain('content:"dzone work"');
    });

    it('calls axios with search terms in content', async () => {

        var testNumber = 2;

        axios.get.mockResolvedValue(mockSolr.mockLucene());

        SearchService.callSearch("dzone work");

        var parameters = axios.get.mock.calls[testNumber][1];

        expect(parameters.params.q).toContain('content:"dzone work"');
    });

    it('calls axios with search terms in description', async () => {

        var testNumber = 2;

        axios.get.mockResolvedValue(mockSolr.mockLucene());

        SearchService.callSearch("dzone work");

        var parameters = axios.get.mock.calls[testNumber][1];

        expect(parameters.params.q).toContain('metatag.description:"dzone work"');
    });

    it('calls axios with * if blank query', async () => {
        axios.get.mockResolvedValue(mockSolr.mockLucene());

        SearchService.callSearch("");

        var parameters = axios.get.mock.calls[0][1];

        expect(parameters.params.q).toBe('*:*');
    });

    it('convertToResults Works', async () => {
        var actual = SearchService.convertToResults(mockSolr.mockLucene());
        var expected = mockSolr.mockLucene().response.docs;

        expect(actual).toStrictEqual(expected);
    });

});