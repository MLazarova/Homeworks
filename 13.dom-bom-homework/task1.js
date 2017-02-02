/*1. Напишете скрипт, който обхожда един li елементите на един ul елемент и 
изпишете текст-а в конзолата.*/
let listEl = document.querySelectorAll('ul > li');
for (let i = 0; i < listEl.length; i++) {
	console.log(listEl[i].innerText);
}