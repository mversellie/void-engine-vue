import { shallowMount } from '@vue/test-utils'
import Component from "@/components/SearchResult";

describe( "testing search result component",() => {

it('makes outer div with class result', async () => {
    // The render method returns a collection of utilities to query your component.
    var renderedComponent = shallowMount(Component)

    expect(renderedComponent.classes()).toContain("search-result")
})})