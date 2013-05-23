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
  				
          $scope.showRandomList = function(){
            var items = [];
            categories.forEach(function(obj){
              obj.items.forEach(function(item){
                items.push(item);
              });
            });
            var i = items.length, j, temp;
            if(i === 0 ) return false;
            while(--i){
              j = Math.floor( Math.random() * ( i+1 ) );
              console.log("randim j" +j+ " while i is " +i);
              temp = items[i];
              console.log("i temp" +JSON.stringify(temp));
              items[i] = items[j];
              items[j] = temp;
            }
            console.log('items is ' +items)
            $scope.items = items.slice(8);
          }

  	});