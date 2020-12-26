import {shallowMount} from '@vue/test-utils'
import SearchResultListComponent from "@/components/SearchResultList";
import SearchResultComponent from "@/components/SearchResult";

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
        var renderedComponent = shallowMount(SearchResultListComponent, mountOptions)

        expect(renderedComponent.classes()).toContain("search-result-list")
    });

    it('creates a search result from list data', async () => {
        var renderedComponent = shallowMount(SearchResultListComponent, mountOptions)
        var actualSingleResultComponent = renderedComponent.findComponent(SearchResultComponent)

        expect(actualSingleResultComponent.exists()).toBeTruthy();
    });


})