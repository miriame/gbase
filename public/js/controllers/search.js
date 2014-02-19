angular.module('mean').controller('SearchController', ['$scope', 'algolia', '$routeParams', '$location',
    function($scope, algolia ,$routeParams, $location) {
       
    	// Bindable properties
        $scope.title = 'SearchCtrl';
	    $scope.searchResults = [];
	    $scope.facetDefs = [];
	    $scope.log = [];
	    
	    // Bindable functions
	    $scope.search = search;
	    $scope.toggleFacet = toggleFacet;
        $scope.filter = filter;
        $scope.query = query;
        $scope.path = $location.path();
        $scope.removeFacet = removeFacet;
        init($routeParams);
	   
        function query(){
            $scope.path = "q/" + $scope.queryTerm;
            $location.path($scope.path);
        }
	    
        function search() {
        	log($scope.title, "Searching for " + $scope.queryTerm);
        	algolia.search($scope.queryTerm, searchCallback);
        }
	    
        function filter(title, value){
            $scope.path += "/"+title+"/"+ value;
            $location.path($scope.path);
        }


        function toggleFacet(title, value) {

        	log($scope.title, "Toggled facet: " + title + " value:" + value);

	        algolia.toggleRefine(title, value);
            
        }

	    
		
        function searchCallback(success, content) {
        	if (!success) {
        		log($scope.title, content.message);
        		return;
        	}
	        
        	log($scope.title, "Got " + content.hits.length + " of " + content.nbHits + " hits");

        	$scope.facetDefs = parseFacets(content.facets);
        	$scope.searchResults = content.hits;
	        
            // NOT SURE WHY THIS IS NECESSARY, BUT FIXES DELAYED UPDATE
            if(!$scope.$$phase) {
                $scope.$apply();
            }
        	
        }
	    
        function parseFacets(facetsresult) {

        	var facetOptions = [];
	        
        	for (var facetoption in facetsresult) {

        		var fo = { title: facetoption, values: [] };
        		
        		var facetVals = facetsresult[facetoption];

        		for (var fv in facetVals) {
        			fo.values.push({
        				title: fv,
        				count: facetVals[fv]
        				//,refined: helper.isRefined(facetoption, value);
        			});
        		}

        		facetOptions.push(fo);
        	}

	        return facetOptions;
        }
	    
        function log(from, message) {
        	var logmsg = { from: $scope.title, msg: message };
        	console.log(logmsg);
        	$scope.log.push(logmsg);
        }

        function init(routeParams){
            if (routeParams.q != undefined){
                $scope.queryTerm = routeParams.q;
                $scope.search($scope.queryTerm);
                facets = {};
                length = (Object.keys(routeParams).length-1)/2;
                for (i=1; i<=length; i++){
                    facets[routeParams["facet"+i]] = routeParams["v"+i];
                }
                $scope.facets = [];
                angular.forEach(facets, function(k,v){
                    $scope.facets.push({"value": v, "name":k})
                    $scope.toggleFacet(v, k);
                });
                console.log($scope.facets);
            }
        }

        function removeFacet(facet){
            // toggleFacet(facet.value, "");
        }
	
        //#region Internal Methods        

        //#endregion
    }]);

