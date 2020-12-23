<<<<<<< HEAD
const form = document.forms['hero'];

const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);

function makeHero(e) {
    e.preventDefault(); //prevent form from being submitted.
    const hero = {}; //create empty object
    hero.name = form.heroName.value; //give hero object properties of the form only - name at the moment.

    hero.realName = form.realName.value; //another value is paased into the hero object. 

    /*hero.powers = [];
    for (let i = 0; i < form.powers.length; i++) {
        if (form.powers[i].checked) {
            hero.powers.push(form.powers[i].value);
        }
    } This is one way I would solve this using a for loop and traversing through each element but the method below is a cleaner more efficient way.*/

    hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);

    hero.category = form.category.value;

    hero.age = form.age.value; //Add form input age to hero age value.

    hero.city = form.city.value;

    hero.origin = form.origin.value;
    form.origin.value = 'Born as Kal-El on the planet Krypton...';

    alert(JSON.stringify(hero)); //convert object to JSON string and display in alert dialog.

    return hero;
}

/*function validate(event) {
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    }
}*/

function validateInline() {
    const heroName = this.value.toUpperCase();
    if (heroName.startsWith('X')) {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
    }
}

function disableSubmit(event) {
    if(event.target.value === ''){
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
}

form.addEventListener('submit', makeHero, false);

form.addEventListener('submit', validateInline, false);

=======
const form = document.forms['hero'];

const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);

function makeHero(e) {
    e.preventDefault(); //prevent form from being submitted.
    const hero = {}; //create empty object
    hero.name = form.heroName.value; //give hero object properties of the form only - name at the moment.

    hero.realName = form.realName.value; //another value is paased into the hero object. 

    /*hero.powers = [];
    for (let i = 0; i < form.powers.length; i++) {
        if (form.powers[i].checked) {
            hero.powers.push(form.powers[i].value);
        }
    } This is one way I would solve this using a for loop and traversing through each element but the method below is a cleaner more efficient way.*/

    hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);

    hero.category = form.category.value;

    hero.age = form.age.value; //Add form input age to hero age value.

    hero.city = form.city.value;

    hero.origin = form.origin.value;
    form.origin.value = 'Born as Kal-El on the planet Krypton...';

    alert(JSON.stringify(hero)); //convert object to JSON string and display in alert dialog.

    return hero;
}

/*function validate(event) {
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    }
}*/

function validateInline() {
    const heroName = this.value.toUpperCase();
    if (heroName.startsWith('X')) {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
    }
}

function disableSubmit(event) {
    if(event.target.value === ''){
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
}

form.addEventListener('submit', makeHero, false);

form.addEventListener('submit', validateInline, false);

>>>>>>> 907381b37bab4613949c90d5a77946f4e117e1c1
form.heroName.addEventListener('keyup',disableSubmit,false);