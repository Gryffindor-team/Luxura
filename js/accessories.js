'use strict';


let menImages = [];
let womenImages = [];

let firstImageElement=document.getElementById('one');
let secondImageElement=document.getElementById('two');
let thirdImageElement=document.getElementById('three');
let firstWImageElement=document.getElementById('one-1');
let secondWImageElement=document.getElementById('two-2');
let thirdWImageElement=document.getElementById('three-3');


function AllProduct(name, source, price){
    this.name = name;
    this.source = source;
    this.price = price;
    menImages.push(this);
}

new AllProduct('fancy', '../img/accessories/pp.jpg', '100');
new AllProduct('fancy', '../img/accessories/pp.jpg', '100');
new AllProduct('fancy', '../img/accessories/pp.jpg', '100');

function WoAllProduct(name, source, price){
    this.name = name;
    this.source = source;
    this.price = price;
    womenImages.push(this);
}

new WoAllProduct('fancy', '../img/accessories/th.jpg', '100');
new WoAllProduct('fancy', '../img/accessories/th.jpg', '100');
new WoAllProduct('fancy', '../img/accessories/th.jpg', '100');

console.log(menImages);
console.log(womenImages);

function renderImages(){
    firstImageElement.src = menImages[0].source;
    secondImageElement.src = menImages[1].source;
    thirdImageElement.src = menImages[2].source;
    firstWImageElement.src = womenImages[0].source;
    secondWImageElement.src = womenImages[1].source;
    thirdWImageElement.src = womenImages[2].source;
}
renderImages();






