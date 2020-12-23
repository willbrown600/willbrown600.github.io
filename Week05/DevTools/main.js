const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('hello');

    // Interpolated
    console.log('Hello I am an %s string!', 'awesome');

    // Styled
    console.log('%c I am some great text!', 'font-size: 25px; background:red; color: blue;');

    // warning!
    console.warn('warning!');

    // Error :|
    console.error('Error!!!');

    // Info
    console.info('Crocodiles eat 3-4 people per year');

    // Testing
    const p = document.querySelector('p');

    console.assert(p.classList.contains('ouch'), 'That is wrong');


    // clearing

    console.clear();

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);
    console.clear();

    // Grouping together
    dogs.forEach(dog => {
        console.group(`${dog.name}`);
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} human years old`);
        console.log(`This means ${dog.name} is ${dog.age * 7} dog years.`);
        console.group(`${dog.name}`);
    });

    // counting
    console.count('Will');
    console.count('Will');
    console.count('Will');
    console.count('Will');
    console.count('Will');
    console.count('Will');

    // timing
    console.time('fetching data');
    fetch('https://api.github.com/willbrown600@github.io')
    .then(data => data.json())
    .then (data => {
        console.timeEnd('fetching data');
        console.log(data);
    });

    console.table(dogs);

