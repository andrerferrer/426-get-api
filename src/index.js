console.log('hello from index.js')

const fetchAPI = (movieName) => {
// template literals
const url = `http://www.omdbapi.com/?s=${movieName}&apikey=adf1f2d7`;

fetch(url)
  .then(response => response.json())
  .then((data) => {
    // console.log(data.Search);
    const movies = data['Search'];
    // for each of my returned movies (from the API)
    const resultsUl = document.getElementById('results');
    resultsUl.innerHTML = '';
    
    movies.forEach((movie) => {
      console.log(movie);
      // we will build a HTML <li> with the data
        const movieHTML = `<li class="list-inline-item">
        <img src="${movie.Poster}" alt="">
        <p>${movie.Title}</p>
      </li>`;
      // we will insert this HTML to the DOM

      // element.insertAdjacentHTML('position', 'HTML')
      resultsUl.insertAdjacentHTML('beforeend', movieHTML)
    });
  });
}

// find the form
const form = document.getElementById('search-movies');

// add an submit event listener
form.addEventListener('submit', (event) => {
  // prevent the default behavior of the submit
  event.preventDefault();
  // when the submit happens, we call the api
  const input = document.getElementById('keyword');
  
  fetchAPI(input.value);

});


fetchAPI('matrix')

