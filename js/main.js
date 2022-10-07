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

// var number = [1, 2, 3, 4, 5];

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
let elDark = document.querySelector('.js-dark');

let parsyArray = JSON.parse(window.localStorage.getItem('array'));
let users = parsyArray || [];

const viewFunc = (array, app) => {
	app.innerHTML = '';
	array.forEach((el) => {
		let newItem = document.createElement('li');
		let newTitle = document.createElement('h3');
		let newText = document.createElement('p');
		let newLink = document.createElement('a');
		let newBtn = document.createElement('button');

		newTitle.textContent = el.name;
		newText.textContent = el.relationship;
		newLink.textContent = el.phone_number;
		newLink.href = `tel:${el.phone_number}`;
		newLink.setAttribute('class', 'btn btn-primary');
		newBtn.textContent = 'DELETE';
		newBtn.type = 'submit';
		newBtn.setAttribute('class', 'btn btn-danger ms-4 js-btn');
		newBtn.dataset.userId = el.id;

		newItem.appendChild(newTitle);
		newItem.appendChild(newText);
		newItem.appendChild(newLink);
		newItem.appendChild(newBtn);
		app.appendChild(newItem);
	});
};

viewFunc(users, elList);

elForm.addEventListener('submit', function (evt) {
	evt.preventDefault();
	let val1 = elInp1.value;
	let val2 = elInp2.value;
	let val3 = elInp3.value;

	let sortNum = users.findIndex((item) => item.phone_number == val3);

	if (sortNum < 0) {
		if (val1 != '' && val3 != '') {
			elInp1.value = '';
			elInp2.value = '';
			elInp3.value = '';

			users.push({
				id: users.length ? users[users.length - 1].id + 1 : 1,
				name: val1,
				relationship: val2,
				phone_number: val3,
			});

			viewFunc(users, elList);
			window.localStorage.setItem('array', JSON.stringify(users));
		} else {
			alert("Iltimos ma'lumot kiriting");
		}
	} else {
		alert(
			"Bu raqarm oldin ro'yxatga qo'shilgan! \n Iltimos tekshirib keyin qaytadan qo'shing",
		);
	}
});

elList.addEventListener('click', function (evt) {
	if (evt.target.matches('.js-btn')) {
		let userId = evt.target.dataset.userId;

		let delUser = users.findIndex((i) => i.id == userId);

		users.splice(delUser, 1);
		viewFunc(users, elList);
		window.localStorage.setItem('array', JSON.stringify(users));
	}
});

let theme = false;

elDark.addEventListener('click', function () {
	theme = !theme;
	window.localStorage.setItem('theme', theme ? 'light' : 'dark');

	darkTheme();
});

function darkTheme() {
	if (window.localStorage.getItem('theme') == 'dark') {
		document.body.classList.add('darker');
	} else {
		document.body.classList.remove('darker');
	}
}

darkTheme();
