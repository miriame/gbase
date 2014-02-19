'use strict';

angular.module('mean').factory('algolia', ['$resource', function () {
    // Define the functions and properties to reveal.
    var service = {
    	search: search,
    	toggleRefine:toggleRefine
    	
    };
    
	// Documentation
	// Facets in Gear Index
    // year, make, model, color, cat, hand, offline, availability

	// Private properties
    var client = new AlgoliaSearch("QHF16FE8Q6", "4b21ca55ad294909b692140c31953a77");
    
    //var index = algolia.initIndex('gear');
    var helper = new AlgoliaSearchHelper(client, 'gear', {
    	facets: ['year', 'make', 'model', 'color', 'cat'],
    	disjunctiveFacets: ['hand', 'offline', 'availability'],
    	hitsPerPage: 10,
    	maxNumberOfFacets:10
    });
    
    return service;
    

    function search(query, callback) {
        helper.search(query, callback);
    }
    
    function toggleRefine(facetname, facetvalue) {
        if (!helper.isRefined(facetname, facetvalue))
         helper.toggleRefine(facetname, facetvalue);
 }

    //#region Internal Methods        

    //#endregion
}

]);
