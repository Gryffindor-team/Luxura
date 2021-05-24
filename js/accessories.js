'use strict';

let cart = [];
let allImages = [];
let menImages = [];
let womenImages = [];

let menElement=document.getElementById('Men-products');
let womenElement=document.getElementById('Women-products');


let firstImageElement=document.getElementById('one');
let secondImageElement=document.getElementById('two');
let thirdImageElement=document.getElementById('three');
let firstWImageElement=document.getElementById('one-1');
let secondWImageElement=document.getElementById('two-2');
let thirdWImageElement=document.getElementById('three-3');

function menProduct(name, source, price){
    this.name = name;
    this.source = source;
    this.price = price;
    menImages.push(this);
    allImages.push(this);
}

new menProduct('fancy', '../img/accessories/pp.jpg', '100');
new menProduct('fancy', '../img/accessories/pp.jpg', '100');
new menProduct('fancy', '../img/accessories/pp.jpg', '100');

function WomenProduct(name, source, price){
    this.name = name;
    this.source = source;
    this.price = price;
    womenImages.push(this);
    allImages.push(this);
}

new WomenProduct('fancy', '../img/accessories/th.jpg', '100');
new WomenProduct('fancy', '../img/accessories/th.jpg', '100');
new WomenProduct('fancy', '../img/accessories/th.jpg', '100');

function CartItem(name, source, price) {
    this.name = name;
    this.source = source;
    this.price = price;
    cart.push(this);
  }
  

console.log(menImages);
console.log(womenImages);

function renderImages(){
    firstImageElement.src = menImages[0].source;
    secondImageElement.src = menImages[1].source;
    thirdImageElement.src = menImages[2].source;
    firstWImageElement.src = womenImages[0].source;
    secondWImageElement.src = womenImages[1].source;
    thirdWImageElement.src = womenImages[2].source;
    setItems ()
}
renderImages();

function setItems (){
    
    localStorage.setItem('photo',JSON.stringify(menImages));
    localStorage.setItem('photo',JSON.stringify(womenImages));
    localStorage.setItem('photo',JSON.stringify(allImages));
    localStorage.setItem('photo',JSON.stringify(cart));
    
}

// menElement.addEventListener('click', handleUserClick);
// womenElement.addEventListener('click', handleUserClick);

// function handleUserClick(event){
//     if(event.target.id==='one'){
//         // console.log('hi');
//     }
//     else if(event.target.id==="two"){
//         // console.log('hi');
//     }
//     else if(event.target.id==="three"){
//         // console.log('hi');
        
//     }
//     else if (event.target.id==="one-1") {
//         // console.log('hi');
//     }
//     else if (event.target.id==="one-2") {
//         // console.log('hi');
//     }
//     else{
//         // console.log('hi');
//     }
// }

let buttonArray = document.getElementsByTagName('button');
console.log(buttonArray);
let addItem;
let addName;
let clickBottun;
function addItems() {

    for (let i = 0; i < buttonArray.length; i++) {
      clickBottun = buttonArray[i];
  
      clickBottun.addEventListener('click', handleUserClick);
      function handleUserClick() {
        // add clicked button
        addItem = allImages[i];
  
        // to get the image src
        addItem.src = allImages[i].source;

  
        // to get the image name
        addName = allImages[i].name;
  
        // push it to the array
        new CartItem(addName, addItem.src , allImages[i].price);
        // console.log(cart);
        setItems ()
        countAddedItems()
      }
    }
  }

  function countAddedItems() {
    let count = document.getElementById('cart');
    count.textContent = cart.length;
    console.log(count);
  }
  function getItems() {
    let backToNormal = JSON.parse(localStorage.getItem('photo'));
    if (backToNormal !== null) {
      cart = backToNormal;
      console.log('back ', backToNormal);
    }
  }
  
  addItems();
  getItems()
  
  




