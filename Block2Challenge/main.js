//const search = document.getElementById('input1');
//console.log(search.value);
//Link to the input form.

const button = document.querySelector('createSubmit');

const results = [];

const spanishURL = 'https://www.dictionaryapi.com/api/v3/references/spanish/json/' + search + '?key=37565506-2a21-4234-ba20-6ef11f65e53e';

const DefURLKey = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/' + search + '?key=5e38a54c-1e5b-4756-830e-803d5466e4da';

fetch(spanishURL).then(blob => console.log(blob));



































/*fetch(spanishURL)
    .then(data => data.json())
    console.log(data);
    //.then(promise => results.push(...data))
    //console.log(data);

*/

function getJSON(word) {
    const spanishURL = 'https://www.dictionaryapi.com/api/v3/references/spanish/json/' + word + '/?key=37565506-2a21-4234-ba20-6ef11f65e53e';
    fetch(spanishURL)
        .then(data => data.json())
        .then(promise => results.push(...promise))
    console.log(promise);
}

/*function getJSON(DefURL) {
    console.log(DefURL)
    fetch(DefURL)
    
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            } 
            else {
                console.log(response);
                return response.json()
                .then(response => words.push(...response));

            }
        })
        .catch((error) => {
            console.log(error);
        });

        
};*/

function addSearchItem(e) {
    e.preventDefault(); //Stops reloading page
    const text = (this.querySelector('[name=inputSearch]')).value;
    const inputSearch = {
        text,
        done: false
    };

    this.reset();
    getJSON(inputSearch);
}

function search(){
    console.log(search);
    var search = document.getElementById('input').value;
    console.log(search);
}

function display(e) {
    e.preventDefault();
    console.log(this.value);
};

document.addEventListener('submit', search);

button.addEventListener('click', display);



/*function display() {
    const matchArray = findMatches(this.value, cities);
    console.log(matchArray);

    const html = matchArray.map(words => {
        const regex = new RegExp(this.value, 'gi');
        const newWord = words.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
        <li>
            <span class="name">${this.value}
        </li>

    `;

    }).join('');

    suggestions.innerHTML = html;

}*/




//.then(data => cities.push(...data));
/*

searchInput.addEventListener('click', ((word) => {
    this.word = word;
}))


function findMatches(wordToMatch, words){
    return words.filter(word => {

        const regex = new RegExp(wordToMatch, 'gi'); //g for gobal and i for insensitive
        return word.words.match(regex) || place.state.match(regex)
    });




}/*


/*

/*const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
    .then(data => data.json())
    .then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {

        const regex = new RegExp(wordToMatch, 'gi');

        return place.city.match(regex) || place.state.match(regex)
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}


/*
searchInput.addEventListener('change', display);

searchInput.addEventListener('keyup', display);*/