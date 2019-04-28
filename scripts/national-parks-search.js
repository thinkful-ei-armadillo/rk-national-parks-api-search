/* global api, store $ */
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
    const parks = store.parks;
    $('#root').html(generateNationalBookmarkPage() + generateSearchResults(parks));
  }

  function generateSearchResults(parks){
    return `
    <main role="main">
      <section>
       <ul>
          ${parks.map(park => generateParkList(park))} 
       </ul>
      </section>
    </main>`;
  }

  function generateParkList(park){
    return ` 
    <li>
      <h2>Full Name: ${park.fullName}</h2>
      <p>Description: ${park.description}</p>
      <a href=${park.url}>Visit this park</a>
    </li>`;
  }

  function generateNationalBookmarkPage(){
    return `
    <header>
      <form>
        <label for="state">States: </label>
        <input type="text" name="state" placeholder="CA, NV, NY" required /><br/>
        <label for="resultNumber">Number of Results: </label>
        <input type="number" name="resultNumber" class="number-input js-number-input" value="10" min="1" max="50"/><br/>
        <input type="submit" name="submit" value="submit"/>
      </form>
    </header>`;
  }

  function handleFormChange(){
    $('#root').on('submit', 'form', function(e){
      e.preventDefault();
      const nationalParkSearchQuery = $(this).serializeJson();
      const states = nationalParkSearchQuery.state.toUpperCase().split(', ');
      api.getParks(states, nationalParkSearchQuery.resultNumber)
        .then(res => {
          store.clearResults();
          res.data.forEach(park => 
            store.addPark({
              fullName: park.fullName,
              description: park.description,
              url: park.url
            }) 
          );
        }).then(() => render());
    });
  }

  function bindEventListeners() {
    handleFormChange();
  }

  return {
    render,
    bindEventListeners
  };
}());