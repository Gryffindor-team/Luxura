'use srtict';

let carts =document.querySelectorAll('.add-cart');

let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");
let div4 = document.getElementById("div4");



let firstImg= document.getElementById('firstImg');
let secondImg= document.getElementById('secondImg');
let thirdImg= document.getElementById('thirdImg');
let fourthImg= document.getElementById('fourthImg');



let dressNames=['dress1', 'dress2','dress3', 'dress4'];
let price=['100 jd','200 jd','300 jd','400jd'];


function addDress(name,source,price){
    this.name=name;
    this.source=source;
    this.price=price;
    inCart=0;
    addDress.allDress.push(this);
    
}

addDress.allDress=[];


// ------------- add dress photos object---------------------------
for (let i = 0; i < dressNames.length; i++) {
    
    new addDress(dressNames[i], `../img/wireframe/women-dress-imgs/${dressNames[i]}.jpg`,price[i]);
}
//--------------------------------------


let div =[div1,div2,div3,div4];

function renderImgs(){
    firstImg.src = addDress.allDress[0].source;
    secondImg.src = addDress.allDress[1].source;
    thirdImg.src = addDress.allDress[2].source;
    fourthImg.src= addDress.allDress[3].source;
    for (let i = 0; i < dressNames.length; i++) {
    
    let h4 =document.createElement('h4');
    div[i].appendChild(h4);
    h4.textContent=`${addDress.allDress[i].name}`;
    let p =document.createElement('p');
    div[i].appendChild(p);
    p.textContent=`${addDress.allDress[i].price}`;
    }
}


renderImgs();


console.log(addDress.allDress);

// --------------------- add event listener and local storage -----------

for (let i = 0; i < carts.length; i++) {
   
carts[i].addEventListener('click', addToCart)   
}


function addToCart(event){
  

    let productNumbers= localStorage.getItem('cartNumber');
    productNumbers=parseInt(productNumbers);
    
    if(productNumbers){
        localStorage.setItem('cartNumber', productNumbers +1);
    }else{
        localStorage.setItem('cartNumber' ,1);
    }


}











