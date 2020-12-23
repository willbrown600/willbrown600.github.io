
/**Translated word code */


function display(){

	var word = document.getElementById('input').value;
	const spanishURL = 'https://www.dictionaryapi.com/api/v3/references/spanish/json/' + word + '?key=37565506-2a21-4234-ba20-6ef11f65e53e';
	//console.log(spanishURL);
	fetchURL(spanishURL);

}

async function fetchURL(request){
	
	const response = await fetch(request);
	const data = await response.json();
	console.log(data);
	console.log(data[0].shortdef[0]);

	document.getElementById('input1').innerHTML = data[0].shortdef[0];

	const TranslatedWord = data[0].shortdef[0];
	display2(TranslatedWord);

	/*fetch(request)
	.then(res => {
		if(res.ok) {
			console.log('Success!')
		}else {
			console.log('Not Successful!')
		}
		return res.json()
	
		.then(data => {
			console.log(data);
		//data = translatedWord;
			document.getElementById('translatedWord').src = URL.createObjectURL(data);
	});
	//var translatedWord = data.array(0).getJSONarray("shortDef").getString(0);*/
	

}

document.getElementById('createSubmit').addEventListener('click', display);





/**Definition code */


function display2(TranslatedWord){

	//var word = document.getElementById('input').value;
	const DefURL = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/' + TranslatedWord + '?key=5e38a54c-1e5b-4756-830e-803d5466e4da';
	//console.log(DefURL);
	fetchURL2(DefURL);

}

async function fetchURL2(request){
	
	const response = await fetch(request);
	const data = await response.json();
	console.log(data);
	console.log(data[0].shortdef);
	
	document.getElementById('input2').innerHTML = data[0].shortdef;
	
	
	
	/*fetch(request)
	.then(res => {
		if(res.ok) {
			console.log('Success!')
		}else {
			console.log('Not Successful!')
		}
		res.json()
	.then(data => console.log(data))
	})*/
}






// fetch(spanishURL).then(blob => console.log(blob));


// /*

// */

// function getJSON(word) {
//     const spanishURL = 'https://www.dictionaryapi.com/api/v3/references/spanish/json/' + word + '/?key=37565506-2a21-4234-ba20-6ef11f65e53e';
//     fetch(spanishURL)
//         .then(data => data.json())
//         .then(promise => results.push(...promise))
//     console.log(promise);
// }

// /*function getJSON(DefURL) {
//     console.log(DefURL)
//     fetch(DefURL)
    
//         .then(response => {
//             if (!response.ok) {
//                 throw Error(response.statusText);
//             } 
//             else {
//                 console.log(response);
//                 return response.json()
//                 .then(response => words.push(...response));

//             }
//         })
//         .catch((error) => {
//             console.log(error);
//         });

        
// };*/

// function addSearchItem(e) {
//     e.preventDefault(); //Stops reloading page
//     const text = (this.querySelector('[name=inputSearch]')).value;
//     const inputSearch = {
//         text,
//         done: false
//     };

//     this.reset();
//     getJSON(inputSearch);
// }

// function display(e) {
//     e.preventDefault();
//     console.log(this.value);
// };

// search.addEventListener('submit', display);

// button.addEventListener('click', display);



// /*function display() {
//     const matchArray = findMatches(this.value, cities);
//     console.log(matchArray);

//     const html = matchArray.map(words => {
//         const regex = new RegExp(this.value, 'gi');
//         const newWord = words.replace(regex, `<span class="hl">${this.value}</span>`);
//         return `
//         <li>
//             <span class="name">${this.value}
//         </li>

//     `;

//     }).join('');

//     suggestions.innerHTML = html;

// }*/




// //.then(data => cities.push(...data));
// /*

// searchInput.addEventListener('click', ((word) => {
//     this.word = word;
// }))


// function findMatches(wordToMatch, words){
//     return words.filter(word => {

//         const regex = new RegExp(wordToMatch, 'gi'); //g for gobal and i for insensitive
//         return word.words.match(regex) || place.state.match(regex)
//     });




// }/*


// /*

// /*const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// const cities = [];

// fetch(endpoint)
//     .then(data => data.json())
//     .then(data => cities.push(...data));

// function findMatches(wordToMatch, cities) {
//     return cities.filter(place => {

//         const regex = new RegExp(wordToMatch, 'gi');

//         return place.city.match(regex) || place.state.match(regex)
//     });
// }

// function numberWithCommas(x) {
//     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
// }


// /*
// searchInput.addEventListener('change', display);

// searchInput.addEventListener('keyup', display);*/

