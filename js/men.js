"use strict";

console.log("hello script");
// ------------------- global array ------
let allProduct = [];
let productName = [];


// ------------ global get the element 

// let div1 = document.getElementById("div1");
// let div2 = document.getElementById("div2");
// let div3 = document.getElementById("div3");






// let LeftElement = document.getElementById("left-image");
// let CenterElement = document.getElementById("Center-image");
// let RightElement = document.getElementById("Right-image");







// -------------------- constructore function for the img 

function MenImges(name, source, price) {
    this.name = name;
    this.source = source;
    this.price = price;
    this.Vote = 0;

    allProduct.push(this);
}


new MenImges("black-suit", "../img/menImg/img1.jpg", 200);
new MenImges("blue-suit", "../img/menImg/img1.jpg", 200);
new MenImges("red-suit", "../img/menImg/img1.jpg", 200);
new MenImges("black-tuxedo", "../img/menImg/img1.jpg", 400);
new MenImges("blue-tuxedo", "../img/menImg/img1.jpg", 400);
new MenImges("red-tuxedo", "../img/menImg/img1.jpg", 400);
new MenImges("gray-suit", "../img/menImg/img1.jpg", 200);
new MenImges("gray-tuxedo", "../img/menImg/img1.jpg", 400);
new MenImges("dress1", "../img/menImg/img1.jpg", 400);
new MenImges("dress2", "../img/menImg/img1.jpg", 300);
new MenImges("dress3", "../img/menImg/img1.jpg", 500);
new MenImges("dress4", "../img/menImg/img1.jpg", 600);
new MenImges("dress5", "../img/menImg/img1.jpg", 600);
new MenImges("dress6", "../img/menImg/img1.jpg", 400);
new MenImges("dress7", "../img/menImg/img1.jpg", 500);
new MenImges("dress8", "../img/menImg/img1.jpg", 300);
new MenImges("dress9", "../img/menImg/img1.jpg", 650);



// -----------   add evevnt listener to the a tag 

let carts = document.querySelectorAll('.add-cart');
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumber(allProduct[i]);
        totalCost(allProduct[i]);
        alert('Your Item Has been Added To The Cart')
    })
}


// ---------- function for the old number of cart from local 
function oldNumberCart() {
    let prodectNubmer = localStorage.getItem('cartNumbers');
    if (prodectNubmer) {
        document.getElementById('cartLogoNum').textContent = prodectNubmer;
    }
}

//  --------------  
function cartNumber(prodects) {
    console.log(prodects)
    let prodectNubmer = localStorage.getItem('cartNumbers');
    prodectNubmer = parseInt(prodectNubmer);

    if (prodectNubmer) {
        localStorage.setItem('cartNumbers', prodectNubmer + 1);
        document.getElementById('cartLogoNum').textContent = prodectNubmer + 1;
    } else {

        localStorage.setItem('cartNumbers', 1);
        document.getElementById('cartLogoNum').textContent = +1;
    }
    setItems(prodects);
}




// ------------------ function for set item 



function setItems(prodects) {
    let cartItem = localStorage.getItem('prodectInCart');
    cartItem = JSON.parse(cartItem);
    if (cartItem !== null) { // if there info 

        if (cartItem[prodects.name] == undefined) { // when it undefind do this 
            cartItem = {
                ...cartItem,
                [prodects.name]: prodects
            }
        }
        cartItem[prodects.name].Vote += 1;

    } else {
        prodects.Vote = 1;
        cartItem = {
            [prodects.name]: prodects
        }


    }
    localStorage.setItem('prodectInCart', JSON.stringify(cartItem))
}




/// ------------ function for the total cost 




function totalCost(prodects) {
    let cartCost = localStorage.getItem('totalCost');
    if (cartCost !== null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + prodects.price);

    } else {
        localStorage.setItem('totalCost', prodects.price);
    }

}
// console.log(allProduct)

oldNumberCart();














//----------   function for set item -----------
// function setItems (){

//    let storeData = JSON.stringify(allProduct);
//    localStorage.setItem('photo',storeData);

//  }



// ----------------------- function for render the img 

// let div =[div1,div2,div3]

// function renderImgMen (){

//       LeftElement.src=allProduct[0].source;
//       CenterElement.src=allProduct[1].source;
//       RightElement.src=allProduct[2].source;



// for(let i=0 ;i<allProduct.length;i++){

//     let h4 =document.createElement('h4');
//     div[i].appendChild(h4);
//     h4.textContent=`${allProduct[i].name}`
//     let p =document.createElement('p');
//     div[i].appendChild(p);
//     p.textContent=`${allProduct[i].price}`
//     let a =document.createElement('a');
//     div[i].appendChild(a);
//     a.href='#'
//     a.textContent='add to cart'
//     a.addEventListener('click',()=>{
//       cartNumber();
//     })


// a.onclick= function () {
//     if(typeof(Storage) !== "undefined") {

//       if (localStorage.clickcount) {
//         localStorage.clickcount = JSON.stringify(allProduct[i].name);

//         alert('added to cart');
//       } 
//       else {
//         localStorage.clickcount = 1;
//       }
//       document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
//     } else {
//       document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
//     }
//   
//         }


// }