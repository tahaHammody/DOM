
//1
let myLi = document.querySelector('li.start-here');
myLi.textContent = "main title";


//2 
let myLiNextSibling = myLi.nextElementSibling;

let myUl = myLiNextSibling.firstElementChild; 
let newSubTitle = document.createElement('li');

let subTitleText = document.createTextNode('sub title 4');

newSubTitle.appendChild(subTitleText);

myUl.appendChild(newSubTitle);
 
//3 

let myLiParent = myLi.parentElement; 

myLiParent.lastElementChild.remove(); 
 
//4 
let head = document.head; 

let title = head.querySelector('title');
title.textContent = 'DOM Master';

//5 
let div = myLiParent.nextElementSibling; 
let p = div.firstElementChild;
p.textContent = "Now I know how to traverse the DOM :D";
