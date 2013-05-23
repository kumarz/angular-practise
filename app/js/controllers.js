'use strict';

/* Controllers */
memApp
	.controller('CategoryController', 
		function CategoryController($scope, category, $location, $rootScope) {
	  		
	  		$scope.categories = category.getCategories();

	  		$scope.showItems = function(category){
	  			
	  			// $rootScope.$broadcast('items', category);
	  			// $location.url('/view2');
	  		}
	 })
  	.controller('ItemController', 
  		function ItemController($scope, category, $routeParams, select) {
  				
  				var name = $scope.name = $routeParams.name,

  				categories = $scope.categories = category.getCategories();

  				$scope.items = select.getItems(name, categories);


  				$scope.changeCategory = function(e){
  					
  					var elem = document.getElementsByClassName('category-select')[0];
  					if(elem.value !== ""){
  						var name = elem.selectedOptions[0].text.toLowerCase() || elem.selectedOptions[0].innerText.toLowerCase();
	  					//console.log("cate is changed" +name);
              categories = $scope.categories = category.getCategories();
	  					$scope.items = select.getItems(name, categories);
  					}
  					
  				}

          $scope.showName = function(e){
            console.log("here we show the name")
            e.target.style.display = 'none';
            e.target.nextElementSibling.style.display = "block";
          }
  				

  	});