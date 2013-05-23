'use strict';

memApp.factory('select', function(){

	var filterCat = {};

	filterCat.getItems = function(name, categories){
		var items;
		categories.every(function(category){
			if(category.id === name){
				items = category.items;
				//$rootScope.$apply();
				return false;
			}
			return true;
		});
		//$rootScope.$apply();
		return items;
	}

	return filterCat;
})