/*2. Напишете скрипт, който обхожда всички елементи в една страница и 
изписва в конзолата типа и класовете на всеки елемент.*/

function printHTMLItem(item, level) {
	let offset = ' '.repeat(level);
	console.log(offset + 'NodeName: ' + item.nodeName + ' ClassName: ' + item.className );

	for (let i = 0; i < item.children.length; i++) {
		printHTMLItem(item.children[i], level + 1);
	}
}

printHTMLItem(document,0);