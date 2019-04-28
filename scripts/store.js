'use strict';
// eslint-disable-next-line no-unused-vars
const store = (function (){
  const addPark = function (park){
    this.parks.push(park);
  };
  const clearResults = function(){
    this.parks = [];
  }; 
  return {
    parks: [],
    addPark,
    clearResults
  };
}());