import {shallowMount} from '@vue/test-utils'
import SearchResultPage from "@/components/SearchResultPage";

describe("testing search result list component", () => {

    var aSingleResultData = {
        "title": "a Title",
        "link": "aplace.here"
    };

    var resultsList = {
        "results": [aSingleResultData]
    }

    var mountOptions = {
        propsData: resultsList
    }

    it('makes outer div with class search-result-list', async () => {
        var renderedComponent = shallowMount(SearchResultPage);
        var actualhtml = renderedComponent.find("#search-result-page");

        expect(actualhtml.exists()).toBeTruthy();
    });


})