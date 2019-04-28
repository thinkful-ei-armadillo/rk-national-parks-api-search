//apikey = Uce8hSb4VdzdZidsTtrJrogMjdaodRjUCZaj2zb3
'use strict';
const api = (function (){
  const BASE_URL = 'https://developer.nps.gov/api/v1/parks?';
  const API_Key = 'Uce8hSb4VdzdZidsTtrJrogMjdaodRjUCZaj2zb3';
  
  function getParks(states, numberOfResults){
    let stateQuery = '';
    for(let i = 0; i < states.length; i++){
      stateQuery+= `stateCode=${states[i]}&`;
    }  
 
    return fetch(`${BASE_URL}` + stateQuery +`limit=${numberOfResults}&` + `api_key=${API_Key}`);
  }
  return {
    getParks
  };
}())