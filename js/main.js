// const users = [
// 	{
// 		name: 'Jonibek',
// 		debt: 10000,
// 	},
// 	{
// 		name: 'Asadbek',
// 		debt: 30000,
// 	},
// 	{
// 		name: 'Ravshanjon',
// 		debt: 50000,
// 	},
// 	{
// 		name: 'Otabek aka',
// 		debt: 1000,
// 	},
// 	{
// 		name: 'Muhammad Ali',
// 		debt: 100000,
// 	},
// 	{
// 		name: 'Jaloliddin aka',
// 		debt: 5000,
// 	},
// ];

// let a = 0;

// for (el of users) {
// 	a += el.debt;
// }

// console.log(a);

var number = [1, 2, 3, 4, 5];

// var result = number.reduce((arr, el) => {
// 	arr.push(el * 10);
// 	return arr;
// }, []);

// console.log(result);

// var result = number.reduce((num, el) => {
// 	return (num += el * 10);
// }, 0);

// console.log(result);

// var array = [1, 2, false, null, undefined, false, true, '56'];
// var array2 = [null, true, false, null, undefined, false, true, '56'];

// var result = array2.reduce((num, el) => {
// 	if (typeof el == 'number') {
// 		num += el;
// 	}
// 	return num;
// }, 0);

// console.log(result);

// var res = number.reduce((num, el, i) => {
// 	num += i * el;
// 	return num;
// }, 0);

// console.log(res);

// console.log(number.reduce((num, el, i) => (num += i * el), 0));

// var array = [true, false, true, false, true];

// console.log(array.filter((el) => el).length);
// console.log(array.filter((el) => !el).length);

let elForm = document.querySelector('.js-form');
let elInp1 = document.querySelector('.inp1');
let elInp2 = document.querySelector('.inp2');
let elInp3 = document.querySelector('.inp3');
let elList = document.querySelector('.js-list');

let users = [];

elForm.addEventListener('submit', function (evt) {
	evt.preventDefault();
	let val1 = elInp1.value;
	let val2 = elInp2.value;
	let val3 = elInp3.value;

	elInp1.value = '';
	elInp2.value = '';
	elInp3.value = '';

	users.push({
		name: val1,
		relationship: val2,
		phone_number: val3,
	});

	let newItem = document.createElement('li');
	let newTitle = document.createElement('h3');
	let newText = document.createElement('p');
	let newLink = document.createElement('a');

	newTitle.textContent = val1;
	newText.textContent = val2;
	newLink.textContent = val3;
	newLink.href = `tel:${val3}`;

	newItem.appendChild(newTitle);
	newItem.appendChild(newText);
	newItem.appendChild(newLink);
	elList.appendChild(newItem);
});
