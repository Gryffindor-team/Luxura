"use strict"


///------------- function to display the items 





let cartCost;

function render() {
    let cartItems = localStorage.getItem('prodectInCart')
    cartItems = JSON.parse(cartItems)
    console.log(cartItems);


    let prodectContaner = document.querySelector('.products')
     cartCost = localStorage.getItem('totalCost')
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
        <ion-icon class="decrease " name="arrow-dropleft-circle" style="color:#0b172a"></ion-icon>
        <span>${item.Vote}</span>
        <ion-icon class="increase" name="arrow-dropright-circle" style="color:#0b172a"></ion-icon>   
        <ion-icon name="add-outline"></ion-icon>
        </div>
        <div class="total">$${item.Vote * item.price},00</div>
        
                    `
        })
        prodectContaner.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle"> Total</h4>
                <h4 class="basketTotal">$${cartCost},00</h4>
                </div>
                <div id ="for-confirm"></div>
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


    for (let i = 0; i < increaseButtons.length; i++) {
        decreaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g, '').trim();
            // console.log(currentProduct);

            if (cartItems[currentProduct].Vote > 1) {
                cartItems[currentProduct].Vote -= 1;
                cartNumber(cartItems[currentProduct], "decrease");
                totalCost(cartItems[currentProduct], "decrease");
                localStorage.setItem('prodectInCart', JSON.stringify(cartItems));
                location.reload();
                render();
            }
        });

        increaseButtons[i].addEventListener('click', () => {
            // console.log(cartItems);
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
            // console.log(currentQuantity);
            currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g, '').trim();
            // console.log(currentProduct);

            cartItems[currentProduct].Vote += 1;
            cartNumber(cartItems[currentProduct]);
            totalCost(cartItems[currentProduct]);
            localStorage.setItem('prodectInCart', JSON.stringify(cartItems));
            location.reload();
            render();
        });
    }
}




//------------------  to delete the div  and to add event listener to i tag

function deleteButtons() {
    let deleteButtons = document.querySelectorAll('.product ion-icon');
    let productNumbers = localStorage.getItem('cartNumbers');
     cartCost = localStorage.getItem("totalCost");
    let cartItems = localStorage.getItem('prodectInCart');
    cartItems = JSON.parse(cartItems);
    let productName;
    // console.log(cartItems);


    // // we added from web to solve our problem ---------------
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            productName = deleteButtons[i].parentElement.textContent.toLocaleLowerCase().replace(/ /g, '').trim();

            localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].Vote);
            localStorage.setItem('totalCost', cartCost - (cartItems[productName].price * cartItems[productName].Vote));

            delete cartItems[productName];
            localStorage.setItem('prodectInCart', JSON.stringify(cartItems));

            oldNumberCart();
            render();
            location.reload();
            
        })
    }
    if(cartCost==0){
        localStorage.clear();
    }
}

// render();
let confirm = document.getElementById('for-confirm');
let butConfirm = document.createElement('button');
butConfirm.classList.add('confirmbutton');
confirm.appendChild(butConfirm);
butConfirm.textContent = 'Confirm Order';

butConfirm.addEventListener('click', () => {

    alert(`Your Order Will Booked After Submitting The Booking Form -- Thank You , And We Are Waitting For You And Your Total Price ${cartCost}`);
    localStorage.clear();


    

    let form =document.getElementById('form');
    form.style.visibility='visible';
  form.addEventListener('submit',action);
 function action (event){
    
     event.preventDefault();
     let userName =event.target.name.value
 
alert(`Your Order Has Been Confirmed MR: ${userName}`)

     document.getElementById('form').reset();
     location.reload();
     
    
    
 }
    

})




// for feadback 

function toggle_visibility() {
    var e = document.getElementById('feedback-main');
    if(e.style.display == 'block')
       e.style.display = 'none';
    else
       e.style.display = 'block';
 }

 toggle_visibility();


//  get element for feadback 
let feedbacksubmit=document.getElementById('feedback-form1');
feedbacksubmit.addEventListener('submit',feadSubmit);

function feadSubmit(event){
    
    event.preventDefault();
    let Name =event.target.feedback-name.value;
    let Email=event.target.feedback-email.value;
    let textare=event.target.feedback-comment.value;

    let arrayFeadback=[Name,Email,textare];

    
        localStorage.setItem('feadback',JSON.stringify(arrayFeadback));
      
       
    
    location.reload();
}






// ///-----------for the poper 
// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }