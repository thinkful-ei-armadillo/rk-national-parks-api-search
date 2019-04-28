/* global api, $ */
// eslint-disable-next-line no-unused-vars
const nationalParksSearch = (function(){
  $.fn.extend({
    serializeJson: function () {
      const formData = new FormData(this[0]);
      const o = {};
      formData.forEach((val, name) => o[name] = val);
      return JSON.stringify(o);
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
      <label for="result-number">Number of Results: </label>
      <input type="number" name="result-number" class="number-input js-number-input" value="10" min="1" max="50"/><br/>
      <input type="submit" name="submit" value="submit"/>
    </form>`;
  }
  function handleFormChange(){
    $('#root').on('submit', 'form',function(){
      const nationalParkSearchQuery = $(this).serializeJson();
      console.log(nationalParkSearchQuery);
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