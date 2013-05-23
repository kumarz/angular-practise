'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.

memApp.factory('category', function(){

  	var categories = [
      {
        name: 'Animals',
        img: 'animals.jpg',
        id: 'animals',
        items: [{name: 'Cat', img: 'cat.jpg', id: 'cat'}, {name: 'Dog', img: 'dog.jpg', id: 'dog'}, {name: 'Zebra', img: 'zebra.jpg', id: 'zebra'}, {name: 'Rabbit', img: 'rabbit.jpg', id: 'rabbit'}]
      },
      {
        name: 'Birds',
        img: 'birds.jpg',
        id: 'birds',
        items: [{name: 'Eagle', img: 'eagle.jpg', id: 'eagle'}, {name: 'Owl', img: 'owl.jpg', id: 'owl'}, {name: 'Parrot', img: 'parrot.jpg', id: 'parrot'}, {name: 'Swan', img: 'swan.jpg', id: 'swan'}]
      },
      {
        name: 'Fruits',
        img: 'fruits.jpg',
        id: 'fruits',
        items: [{name: 'Apple', img: 'apple.jpg', id: 'apple'},{name: 'Cherry', img: 'cherry.jpg', id: 'cherry'},{name: 'Banana', img: 'banana.jpg', id: 'banana'}, {name: 'Strawberry', img: 'strawberry.jpg', id: 'strawberry'}, {name: 'Mango', img: 'mango.jpg', id: 'mango'}, {name: 'Orange', img: 'orange.jpg', id: 'orange'}, {name: 'Pomegranate', img: 'pomegranate.jpg', id: 'pomegranate'}, {name: 'Jackfruit', img: 'jackfruit.jpg', id: 'jackfruit'}]
      },
      {
        name: 'Flowers',
        img: 'flowers.jpg',
        id: 'flowers',
        items: [{name: 'Rose', img: 'rose.jpg', id: 'rose'}, {name: 'Tulip', img: 'tulip.jpg', id: 'tulip'}, {name: 'Hibiscus', img:'hibiscus.jpg', id: 'hibiscus'}, {name: 'Sunflower', img: 'sunflower.jpg', id: 'sunflower'}]
      }
    ];

  	return {
  		getCategories : function(){
  			return categories;
  		}
  	}
  });

