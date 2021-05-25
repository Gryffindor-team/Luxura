"use strict"


///------------- function to display the items 


// let userName =prompt('please enter your name for Booking the oreder');
// let userNumber =Number(prompt('please enter your number'));




function render() {
    let cartItems = localStorage.getItem('prodectInCart')
    cartItems = JSON.parse(cartItems)
    console.log(cartItems);
    

    let prodectContaner = document.querySelector('.products')
    let cartCost = localStorage.getItem('totalCost')
    if (cartItems && prodectContaner) {
        prodectContaner.innerHTML = '';
        Object.values(cartItems).map(item => {
            prodectContaner.innerHTML += `
         <div class="product">
        <ion-icon class="delete" name="close-circle"></ion-icon>

        <img src="../img/menImg/${item.name}.jpg"  width="80px" hieght='40px'>
        <span>${item.name}</span> 
        </div>
                    
        <div class="price sm-hide">$${item.price},00</div>
        <div class="quantity">
        <ion-icon class="decrease " name="arrow-dropleft-circle"></ion-icon>
        <span>${item.Vote}</span>
        <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>   
        <ion-icon name="add-outline"></ion-icon>
        </div>
        <div class="total">$${item.Vote * item.price},00</div>
        
                    `
        }
        )
        prodectContaner.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle"> Total</h4>
                <h4 class="basketTotal">$${cartCost},00</h4>
                </div>
                
                `

                manageQuantity();
                deleteButtons();

}
}
// oldNumberCart ();
render();
//---------------  function to quantity increse and decrese -----
//------------- and inside it add event listener to i tag 



function manageQuantity() {
    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');
    let currentQuantity = 0;
    let currentProduct = '';
    let cartItems = localStorage.getItem('prodectInCart');
    cartItems = JSON.parse(cartItems);

     // // we added from web to solve our problem --------------- 

     
    for(let i=0; i < increaseButtons.length; i++) {
        decreaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
            // console.log(currentProduct);

            if( cartItems[currentProduct].Vote > 1 ) {
                cartItems[currentProduct].Vote -= 1;
                cartNumber(cartItems[currentProduct], "decrease");
                totalCost(cartItems[currentProduct], "decrease");
                localStorage.setItem('prodectInCart', JSON.stringify(cartItems));
                render();
            }
        });

        increaseButtons[i].addEventListener('click', () => {
            // console.log(cartItems);
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
            // console.log(currentQuantity);
            currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
            // console.log(currentProduct);

            cartItems[currentProduct].Vote += 1;
            cartNumber(cartItems[currentProduct]);
            totalCost(cartItems[currentProduct]);
            localStorage.setItem('prodectInCart', JSON.stringify(cartItems));
            render();
        });
    }
}




//------------------  to delete the div  and to add event listener to i tag

function deleteButtons() {
    let deleteButtons = document.querySelectorAll('.product ion-icon');
    let productNumbers = localStorage.getItem('cartNumbers');
    let cartCost = localStorage.getItem("totalCost");
    let cartItems = localStorage.getItem('prodectInCart');
    cartItems = JSON.parse(cartItems);
    let productName;
    // console.log(cartItems);


    // // we added from web to solve our problem ---------------
    for(let i=0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            productName = deleteButtons[i].parentElement.textContent.toLocaleLowerCase().replace(/ /g,'').trim();
           
            localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].Vote);
            localStorage.setItem('totalCost', cartCost - ( cartItems[productName].price * cartItems[productName].Vote));

            delete cartItems[productName];
            localStorage.setItem('prodectInCart', JSON.stringify(cartItems));

            oldNumberCart ();
            render();
            // location.reload();
        })
    }
}


let confirm =document.getElementById('for-confirm');
let butConfirm =document.createElement('button');
confirm.appendChild(butConfirm);
butConfirm.textContent='confirm order';

butConfirm.addEventListener('click',() =>{
   
    alert(`your order will  Booked after submit the form thank you\n and we wiil wait you `);
    localStorage.clear();

   
  let form =  document.getElementById('form').style.visibility='visible';

  
let submit =document.getElementById('submit');
form.appendChild(submit);
submit.addEventListener('submit',()=>{
    
    // document.getElementById('form').style.visibility='hidden'
    
    location.reload();
   
})

})
