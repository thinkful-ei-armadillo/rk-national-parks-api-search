'use strict';
// eslint-disable-next-line no-unused-vars
const api = (function (){
  const BASE_URL = 'https://developer.nps.gov/api/v1/parks?';
  const API_Key = 'Uce8hSb4VdzdZidsTtrJrogMjdaodRjUCZaj2zb3';
  
  function getParks(states, numberOfResults){
    let stateQuery = '';
    let error = false;
    for(let i = 0; i < states.length; i++){
      stateQuery+= `stateCode=${states[i]}&`;
    }  
    return fetch(`${BASE_URL}` + stateQuery +`limit=${numberOfResults}&` + `api_key=${API_Key}`)
      .then(res => !res.ok ? error = true : res.json())
      .then(data => {
        if (error) throw new Error(data.message);
        return data;
      })
      .catch(err => alert(err.message)); 
  }
  return {
    getParks
  };
}());