 
    const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
	console.log('hello');
    // Interpolated
	console.log('Hello I am a %s string', 'put anything in here and it will read as a string');
   console.log('Hello I am a ${variable}');
     // Styled
	//console.log('%c I am some great text', 'font-size:50px; background: aqua')
	// warning!
     console.warn('OH NOOOO')
    // Error :|
	console.error('ERRRRR');
    // Info
	console.info('Crocodiles eat 3-4 people each year');
    // Testing
    const p = document.querySelector('p');
	
	console.assert(p.classList.contains('Ouch!'), 'That is WRONG!');
    // clearing
	console.clear();
    // Viewing DOM Elements
	console.log(p);
	console.dir(p);
    // Grouping together
	dogs.forEach(dog => {
		console.groupCollapsed(`${dog.name}`)
		console.log(`This is ${dog.name}`);
		console.log(`${dog.name} is ${dog.age} years old`);
		console.log(`${dog.name} is ${dog.age * 7} years old`);
		console.groupEnd(`${dog.name}`)
	});
    // counting
	console.count('wes');
	console.count('wes');
	console.count('wes');
	console.count('wes');
	console.count('jay');
	console.count('jay');
	console.count('wes');
	console.count('jay');
	
	
	
	
	
    // timing
	console.time('fetching data');
	fetch('https://api.github.com/users/wesbos')
		.then(data => data.json())
		.then(data => {
			console.timeEnd('fetching data');
			console.log(data);
		});
		
		console.table(dogs)
  