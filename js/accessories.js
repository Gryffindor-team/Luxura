"use strict";

// let cart = [];
// let allImages = [];
// let menImages = [];
// let womenImages = [];

// let menElement=document.getElementById('Men-products');
// let womenElement=document.getElementById('Women-products');


// let firstImageElement=document.getElementById('one');
// let secondImageElement=document.getElementById('two');
// let thirdImageElement=document.getElementById('three');
// let firstWImageElement=document.getElementById('one-1');
// let secondWImageElement=document.getElementById('two-2');
// let thirdWImageElement=document.getElementById('three-3');

// function menProduct(name, source, price){
//     this.name = name;
//     this.source = source;
//     this.price = price;
//     menImages.push(this);
//     allImages.push(this);
// }

// new menProduct('fancy', '../img/accessories/pp.jpg', '100');
// new menProduct('fancy', '../img/accessories/pp.jpg', '100');
// new menProduct('fancy', '../img/accessories/pp.jpg', '100');

// function WomenProduct(name, source, price){
//     this.name = name;
//     this.source = source;
//     this.price = price;
//     womenImages.push(this);
//     allImages.push(this);
// }

// new WomenProduct('fancy', '../img/accessories/th.jpg', '100');
// new WomenProduct('fancy', '../img/accessories/th.jpg', '100');
// new WomenProduct('fancy', '../img/accessories/th.jpg', '100');

// function CartItem(name, source, price) {
//     this.name = name;
//     this.source = source;
//     this.price = price;
//     cart.push(this);
//   }
  

// console.log(menImages);
// console.log(womenImages);

// function renderImages(){
//     firstImageElement.src = menImages[0].source;
//     secondImageElement.src = menImages[1].source;
//     thirdImageElement.src = menImages[2].source;
//     firstWImageElement.src = womenImages[0].source;
//     secondWImageElement.src = womenImages[1].source;
//     thirdWImageElement.src = womenImages[2].source;
//     setItems ()
// }
// renderImages();

// function setItems (productNumbers){
    
//     localStorage.setItem('photo',JSON.stringify(menImages));
//     localStorage.setItem('photo',JSON.stringify(womenImages));
//     localStorage.setItem('photo',JSON.stringify(allImages));
//     localStorage.setItem('photo',JSON.stringify(cart));
//     localStorage.setItem('photo',JSON.stringify(count));
    
// }

// // menElement.addEventListener('click', handleUserClick);
// // womenElement.addEventListener('click', handleUserClick);

// // function handleUserClick(event){
// //     if(event.target.id==='one'){
// //         // console.log('hi');
// //     }
// //     else if(event.target.id==="two"){
// //         // console.log('hi');
// //     }
// //     else if(event.target.id==="three"){
// //         // console.log('hi');
        
// //     }
// //     else if (event.target.id==="one-1") {
// //         // console.log('hi');
// //     }
// //     else if (event.target.id==="one-2") {
// //         // console.log('hi');
// //     }
// //     else{
// //         // console.log('hi');
// //     }
// // }

// let buttonArray = document.getElementsByTagName('button');
// console.log(buttonArray);
// let addItem;
// let addName;
// let clickBottun;
// function addItems() {

//     for (let i = 0; i < buttonArray.length; i++) {
//       clickBottun = buttonArray[i];
  
//       clickBottun.addEventListener('click', handleUserClick);
//       function handleUserClick() {
//         // add clicked button
//         addItem = allImages[i];
  
//         // to get the image src
//         addItem.src = allImages[i].source;

  
//         // to get the image name
//         addName = allImages[i].name;
  
//         // push it to the array
//         new CartItem(addName, addItem.src , allImages[i].price);
//         // console.log(cart);
//         setItems ()
//         countAddedItems()
//       }
//     }
//   }

//   function countAddedItems() {
//     let count = document.getElementById('cartLogoNum');
//     count.textContent = cart.length;
//     console.log(count);
//   }
//   function getItems() {
//     let backToNormal = JSON.parse(localStorage.getItem('photo'));
//     if (backToNormal !== null) {
//       cart = backToNormal;
//       console.log('back ', backToNormal);
//     }
//   }
  
//   addItems();
//   getItems();



let allItems=[];
let cart=[];
let x=1;



// let div1 = document.getElementById("div1");
// let div2 = document.getElementById("div2");
// let div3 = document.getElementById("div3");
// let div4 = document.getElementById("div4");
// let div5 = document.getElementById("div5");
// let div6 = document.getElementById("div6");
// let div7 = document.getElementById("div7");
// let div8 = document.getElementById("div8");



// let firstElement = document.getElementById("one");
// let secondElement = document.getElementById("two");
// let thirdElement = document.getElementById("three");
// let fourElement = document.getElementById("four");
// let fiveElement = document.getElementById("five");
// let sixElement = document.getElementById("six");
// let sevenElement = document.getElementById("seven");
// let eightElement = document.getElementById("eight");



function Items (name , source ,price){
    this.name=name;
    this.source=source;
    this.price=price;
    this.vote=0;

    allItems.push(this);
}
  

new Items("shoes1", "../img/accessories/shoes1.jpg", 50);
new Items("shoes2", "../img/accessories/shoes2.jpg", 60);
new Items("shoes3", "../img/accessories/shoes3.jpg", 50);
new Items("shoes4", "../img/accessories/shoes4.jpg", 50);
new Items("shoes5", "../img/accessories/shoes5.jpg", 50);
new Items("shoes6", "../img/accessories/shoes6.jpg", 60);
new Items("shoes7", "../img/accessories/shoes7.jpg", 60);
new Items("shoes8", "../img/accessories/shoes8.jpg", 50);




// -----------   add evevnt listener to the a tag 

let allButton = document.querySelectorAll("button");
for(let i=0 ;i < allButton.length;i++){
  allButton[i].addEventListener('click',()=>{
    cartNumberr (allItems[i]);
    totalPrice (allItems[i]);
    countAddedItems()
    x++;
  })
  }


// ---------- function for the old number of cart from local 
  function oldCart(){
    let itemsNumber =localStorage.getItem('items');
    if(itemsNumber){
      // document.getElementById('cartLogoNumber').textContent=itemsNumber;
    }
  }

//  --------------  
    function cartNumberr (prodects){
      // console.log(prodects)
      let itemsNumber =localStorage.getItem('items');
      itemsNumber=parseInt(itemsNumber);
      if(itemsNumber){
        localStorage.setItem('items', itemsNumber + 1);
        // document.getElementById('cartLogoNumber').textContent=itemsNumber+1;
        }else{
          localStorage.setItem('items',1);
          // document.getElementById('cartLogoNumber').textContent=+1;
        }
        setItems(prodects);
    }




// ------------------ function for set item 


function setItems(prodects){
  let cartItem=localStorage.getItem('Cart');
  cartItem=JSON.parse(cartItem);
  if(cartItem!==null){// if there info 
    if(cartItem[prodects.name]==undefined){// when it undefind do this 
      cartItem={
      ...cartItem,
      [prodects.name]:prodects
      }
    }
    cartItem[prodects.name].vote+=1;
  }else{
    prodects.vote=1;
    cartItem ={
     [prodects.name]:prodects
  }
}
localStorage.setItem('Cart', JSON.stringify(cartItem))
}




        
        


     




/// ------------ function for the total cost 




    function totalPrice (prodects){
      let cartCost = localStorage.getItem('totalPrice');
      if(cartCost!==null){
        cartCost=parseInt(cartCost);
        localStorage.setItem('totalPrice',cartCost + prodects.price);
      }
    else {
      localStorage.setItem('totalPrice',prodects.price);
    }

  }
    // console.log(allItems);

    function countAddedItems() {
      let count = document.getElementById('cartLogoNum');
      count.textContent = x;
      console.log(count);
    }


    oldCart ();