import {shallowMount} from '@vue/test-utils'
import SearchResultComponent from "@/components/SearchResult";

describe("testing search result component", () => {

    var searchData = {
        "title": "a Title",
        "link": "aplace.here"
    };

    var mountOptions = {
        propsData: searchData
    }

    it('makes outer div with class result', async () => {
        // The render method returns a collection of utilities to query your component.
        var renderedComponent = shallowMount(SearchResultComponent, mountOptions)

        expect(renderedComponent.classes()).toContain("search-result")
    });

    it('makes title block', async () => {
        // The render method returns a collection of utilities to query your component.
        var renderedComponent = shallowMount(SearchResultComponent, mountOptions)
        var renderedTitle = renderedComponent.find(".result-title");
        var renderedTitleText = renderedTitle.element.textContent

        expect(renderedTitleText).toContain("a Title")
    });

    it('makes title block link', async () => {
        // The render method returns a collection of utilities to query your component.
        var renderedComponent = shallowMount(SearchResultComponent, mountOptions)
        var renderedTitleLink = renderedComponent.find(".result-title a");
        var actualLink = renderedTitleLink.element.attributes.getNamedItem("href").value

        expect(actualLink).toContain("aplace.here")
    });
})