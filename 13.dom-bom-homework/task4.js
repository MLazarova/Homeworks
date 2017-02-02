/*4. Направете скрипт, който да създаде следното HTML дърво и го закача в body-то 
на документа:
    
<div class="main">
        
	<nav class="main-nav">
            
		<ul>
                
			<li>

				<a href="#">Link 1</a>
                
			</li>
                
			<li>
   
				<a href="#">Link 2</a>
                
			</li>
                
			<li>
                    
				<a href="#">Link 3</a>
                
			</li>
                
			<li>
                    
				<a href="#">Link 4</a>
                
			</li>
                
			<li>
                    
				<a href="#">Link 5</a>
                
			</li>
            
		</ul>
       
	 </nav>
    
</div>
*/
let $div = document.createElement('div');

document.body.appendChild($div);

$div.setAttribute('class','main')

let $nav = document.createElement('nav');

$div.appendChild($nav);

$nav.setAttribute('class','main-nav')

let $ul = document.createElement('ul');

$nav.appendChild($ul);

for (let i = 0; i < 5; i++) {
	let $li = document.createElement('li');

	$ul.appendChild($li);

	let $a = document.createElement('a');

	$li.appendChild($a);

	$a.textContent = 'List ' + (i+1);

	$a.setAttribute('href','#');
}