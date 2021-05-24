'use srtict';

let carts =document.querySelectorAll('.add-cart');

let divv1 = document.getElementById("divv1");
let divv2 = document.getElementById("divv2");
let divv3 = document.getElementById("divv3");
let divv4 = document.getElementById("divv4");



let firstImg = document.getElementById('firstImg');
let secondImg = document.getElementById('secondImg');
let thirdImg = document.getElementById('thirdImg');
let fourthImg = document.getElementById('fourthImg');



let dressNames=['dress1','dress2','dress3','dress4'];
let dressPrice=[100,200,300,400];


function addDress(name,price){
    this.name=name;
    this.price=price;
    this.source=`../img/women-dress-imgs/${name}.jpg`;
    this.inCart=0;

    addDress.allDress.push(this);
}

addDress.allDress=[];

// ------------- add dress photos object---------------------------
    for (let i = 0; i < dressNames.length; i++) {
        
        new addDress(dressNames[i],dressPrice[i]);
    }

//--------------------------------------


let divv =[divv1,divv2,divv3,divv4];

//function renderImgs(){
    //firstImg.src = addDress.allDress[0].source;
    //secondImg.src = addDress.allDress[1].source;
   // thirdImg.src = addDress.allDress[2].source;
   // fourthImg.src= addDress.allDress[3].source;

  // for (let i = 0; i < dressNames.length; i++) {
    
   // let h4 =document.createElement('h4');
   // divv[i].appendChild(h4);
    //h4.textContent=`${addDress.allDress[i].name}`;
    //let p =document.createElement('p');
  //  divv[i].appendChild(p);
   // p.textContent=`${addDress.allDress[i].price}`;
  //  }
//}


//renderImgs();


console.log(addDress.allDress);

// --------------------- add event listener and local storage -----------

for (let i = 0; i < carts.length; i++) {
   
carts[i].addEventListener('click', () => {cartNumbers(addDress.allDress[i])
    totalCost(addDress.allDress[i]); 

})  

}

function onLoadCartNumbers(){

    let productNumbers= localStorage.getItem('cartNumber');

    if(productNumbers){
      //  document.querySelector('.cart span').textContent=productNumbers;
    }

}
// --------- count in cart numbers-----------------
function cartNumbers(allDress){
  //console.log("the product clicked is" , allDress);

    let productNumbers= localStorage.getItem('cartNumber');
    productNumbers=parseInt(productNumbers);
    
    if(productNumbers){
        localStorage.setItem('cartNumber', productNumbers +1);
        //document.querySelector('.cart span').textContent= productNumbers + 1;

    }else{
        localStorage.setItem('cartNumber' ,1);
       // document.querySelector('.cart span').textContent=1;
    }

    setItem(allDress);
}

//--------------------- count in cart (when the user add to cart the dress with plus in cart +1 for that product) ---
function setItem (allDress){

    let cartItems=localStorage.getItem('productsInCart');
    cartItems=JSON.parse(cartItems);


if(cartItems != null){
  if(cartItems[allDress.name] == undefined){
    cartItems = {
     ...cartItems,
     [allDress.name] : allDress
}
}
    cartItems[allDress.name].inCart += 1 ;
}else{
    allDress.inCart = 1;
    cartItems ={
        [allDress.name] : allDress
    }

}


localStorage.setItem('productsInCart',JSON.stringify(cartItems));

}

// ---------------- count total cost for all the dresses ----------

function totalCost(product){
//console.log("the product price is", product.price);
let cartCost = localStorage.getItem('totalCost');

if (cartCost != null){
cartCost=parseInt(cartCost);
localStorage.setItem('totalCost', cartCost + product.price);

}else{

    localStorage.setItem('totalCost', product.price);
}



}

onLoadCartNumbers();


// ------ adding to cart html page  ---------------

function displayCart(){
    let cartItems = localStorage.getItem('productsincart')
    cartItems = JSON.parse(cartItems)
    console.log(cartItems);

    let prodectContaner = document.querySelector('.products')
    let cartCost = localStorage.getItem('cost')
    if (cartItems && prodectContaner) {
        prodectContaner.innerHTML = '';
        Object.values(cartItems).map(item => {
            prodectContaner.innerHTML += `
        <div class="product">
        <ion-icon name="close-circle"></ion-icon>
        <img src="../img/women-dress-imgs/${item.name}.jpg">
                        <span>${item.name}</span> 

                    </div>


                    <div class="price sm-hide">${item.price}</div>
                    <div class="quantity">
                        <ion-icon class="decrease " name="arrow-dropleft-circle"></ion-icon>
                            <span>${item.incart}</span>
                        <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>   
                        <ion-icon name="add-outline"></ion-icon>
                    </div>
                    <div class="total">${item.incart * item.price}</div>`



                    
        
        }
        )
        prodectContaner.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle"> Total</h4>
                <h4 class="basketTotal">$${cartCost},00</h4>
            </div>`

    

}
}

displayCart();

