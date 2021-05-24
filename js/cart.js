'use strict'

function displayCart (){
    let cartItem =localStorage.getItem('prodectInCart');
    cartItem=JSON.parse(cartItem);
    let prodectContiner = document.getElementById('product');
    if (cartItem && prodectContiner){
        prodectContiner.innerHTML='';
        Object.values(cartItem).map(item => {
            prodectContiner.innerHTML +=`
            <div class='product'>
            <icon-icon name="close-circle"></icon-icon>
                <img src= "../img/menImg/img1.jpg" >
                <span>${item.name}</span>
            </div>
            `
            
        })
    }
}

displayCart ();