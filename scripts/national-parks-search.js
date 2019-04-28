/* global api, $ */
// eslint-disable-next-line no-unused-vars
const nationalParksSearch = (function(){
  $.fn.extend({
    serializeJson: function () {
      const formData = new FormData(this[0]);
      const o = {};
      formData.forEach((val, name) => o[name] = val);
      return o;
    }
  });

  function render(){
    $('#root').html(generateNationalBookmarkPage() + generateSearchResults());
  }

  function generateSearchResults(){
    return``;
  }
  function generateNationalBookmarkPage(){
    return `
    <form>
      <label for="state">States: </label>
      <input type="text" name="state" placeholder="CA, NV, NY" required /><br/>
      <label for="resultNumber">Number of Results: </label>
      <input type="number" name="resultNumber" class="number-input js-number-input" value="10" min="1" max="50"/><br/>
      <input type="submit" name="submit" value="submit"/>
    </form>`;
  }
  function handleFormChange(){
    $('#root').on('submit', 'form', function(e){
      e.preventDefault();
      const nationalParkSearchQuery = $(this).serializeJson();
      const states = nationalParkSearchQuery.state.toUpperCase().split(', ');
      api.getParks(states, nationalParkSearchQuery.resultNumber);
      console.log(states);
    })
  }
  function bindEventListeners() {
    handleFormChange();
  }
  return {
    render,
    bindEventListeners
  };
}());