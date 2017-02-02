/*3. Напишете скрипт, който намира всички линкове в една страница, 
които имат като текст думата "google".*/

let allLinks = document.links;
for (let i = 0; i < allLinks.length; i++){
	if (allLinks[i].innerText == 'google'){
		console.log(allLinks[i]);
	}
	console.log('Missing link with "google" text!')
}