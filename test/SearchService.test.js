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

    it('calls axios with start of url', async () => {

        axios.get.mockResolvedValue(mockSolr.mockLucene());

        SearchService.callSearch("");

        var urlArg = axios.get.mock.calls[0][0]

        expect(urlArg).toContain("http://localhost:8081")
    });

    it('calls axios with search terms', async () => {

        var testNumber = 2;

        axios.get.mockResolvedValue(mockSolr.mockLucene());

        SearchService.callSearch("dzone work");

        var parameters = axios.get.mock.calls[testNumber][1];

        expect(parameters.params.query).toContain('dzone work');
    });



    it('convertToResults Works', async () => {
        var actual = SearchService.convertToResults(mockSolr.mockLucene());
        var expected = mockSolr.mockLucene().response.docs;

        expect(actual).toStrictEqual(expected);
    });

});