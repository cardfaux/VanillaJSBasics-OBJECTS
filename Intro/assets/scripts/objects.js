const movieList = document.getElementById('movie-list');

movieList.style['backgroundColor'] = 'red';
movieList.style.display = 'block';

const userChosenKeyName = 'level';

let person = {
	'first name': 'Adam',
	age: 32,
	hobbies: ['Sports', 'Cooking'],
	[userChosenKeyName]: '...',
	greet: function() {
		alert('Hi, There');
	},
	1.5: 'hello'
};

//person.age = 33;
//delete person.age;,
person.age = undefined;
person.isAdmin = true;

const keyName = 'first name';

console.log(person[keyName]);

console.log(person['first name']);
console.log(person[1.5]);
