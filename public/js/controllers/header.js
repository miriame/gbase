'use strict';
angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        'title': 'Articles',
        'link': 'articles'
    }, {
        'title': 'Create New Article',
        'link': 'articles/create'
    }];
    
    $scope.isCollapsed = false;
}]);



// angular.module('mean').controller('SearchController', ['$scope', 'algolia', '$routeParams',
//     function($scope, algolia ,$routeParams) {
//         console.log("here");
//         console.log($routeParams);
//         routeParams  = {"cat":"Effects", "make":"Fender", "q":"fender"};
        
//     	// Bindable properties
// 	    $scope.searchResults = [];
// 	    $scope.facetDefs = [];
// 	    $scope.log = [];
	    
// 	    // Bindable functions
// 	    $scope.search = search;
// 	    $scope.toggleFacet = toggleFacet;
//        init(routeParams);
	   
	    
//         function search() {
//         	log($scope.title, "Searching for " + $scope.queryTerm);
	        
//         	algolia.search($scope.queryTerm, searchCallback);
	      
//         }
	    
//         function toggleFacet(title, value) {
//         	log($scope.title, "Toggled facet: " + title + " value:" + value);
// 	        algolia.toggleRefine(title, value);
//         }
	    
		
//         function searchCallback(success, content) {
	        
//         	if (!success) {
//         		log($scope.title, content.message);
//         		return;
//         	}
	        
//         	log($scope.title, "Got " + content.hits.length + " of " + content.nbHits + " hits");

//         	$scope.facetDefs = parseFacets(content.facets);
//         	$scope.searchResults = content.hits;
	        
//             // NOT SURE WHY THIS IS NECESSARY, BUT FIXES DELAYED UPDATE
//             $scope.$apply();
        	
//         }
	    
//         function parseFacets(facetsresult) {

//         	var facetOptions = [];
	        
//         	for (var facetoption in facetsresult) {

//         		var fo = { title: facetoption, values: [] };
        		
//         		var facetVals = facetsresult[facetoption];

//         		for (var fv in facetVals) {
//         			fo.values.push({
//         				title: fv,
//         				count: facetVals[fv]
//         				//,refined: helper.isRefined(facetoption, value);
//         			});
//         		}

//         		facetOptions.push(fo);
//         	}

// 	        return facetOptions;
//         }
	    
//         function log(from, message) {
//         	var logmsg = { from: $scope.title, msg: message };
//         	console.log(logmsg);
//         	$scope.log.push(logmsg);
//         }

//         function init(routeParams){

//             console.log(routeParams);
//             $scope.queryTerm = routeParams.q;
//             $scope.search($scope.queryTerm);
//             angular.forEach(routeParams, function(v,k){
//                 if (k != "q")
//                 $scope.toggleFacet(k, v);
//             });
//         }
	
//         //#region Internal Methods        

//         //#endregion
//     }]);

