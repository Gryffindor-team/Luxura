"use strict"


///------------- function to display the items 

function render() {
    let cartItems = localStorage.getItem('prodectInCart')
    cartItems = JSON.parse(cartItems)
    console.log(cartItems);
    

    let prodectContaner = document.querySelector('.products-container')
    let cartCost = localStorage.getItem('totalCost')
    if (cartItems && prodectContaner) {
        prodectContaner.innerHTML = '';
        Object.values(cartItems).map(item => {
            prodectContaner.innerHTML += `
        <div class="product">
        <ion-icon class="delete" name="close-circle"></ion-icon>

        <img src="../img/menImg/img1.jpg" id='pro' width="100px' height="100px">
                        <span>${item.name}</span> 

                    </div>


                    // <div class="price sm-hide">${item.price}</div>
                    // <div class="quantity">
                    //     <ion-icon class="decrease " name="arrow-dropleft-circle"></ion-icon>
                    //         <span>${item.vote}</span>
                    //     <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>   
                    //     <ion-icon name="add-outline"></ion-icon>
                    // </div>
                    // <div class="total">${item.vote * item.price}</div>`



                    
        
        }
        )
        prodectContaner.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle"> Total</h4>
                <h4 class="basketTotal">$${cartCost},00</h4>
            </div>`

            deleteButtons();
            manageQuantity();

}
}
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

            if( cartItems[currentProduct].vote > 1 ) {
                cartItems[currentProduct].vote -= 1;
                cartNumber(cartItems[currentProduct], "decrease");
                totalCost(cartItems[currentProduct], "decrease");
                localStorage.setItem('prodectInCart', JSON.stringify(cartItems));
                render();
            }
        });

        increaseButtons[i].addEventListener('click', () => {
            // console.log(cartItems);
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
            // console.log(currentProduct);

            cartItems[currentProduct].vote += 1;
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
           
            localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].vote);
            localStorage.setItem('totalCost', cartCost - ( cartItems[productName].price * cartItems[productName].vote));

            delete cartItems[productName];
            localStorage.setItem('prodectInCart', JSON.stringify(cartItems));

            render();
            oldNumberCart ();
            // location.reload();
        })
    }
}



//--------------------------------------------

//------------- function to display the items 

function renderr() {
    let cartItemss = localStorage.getItem('Cart')
    cartItemss = JSON.parse(cartItemss)
    console.log(cartItemss);
    

    let prodectContanerr = document.querySelector('.products-container')
    let cartCostt = localStorage.getItem('totalPrice')
    if (cartItemss && prodectContanerr) {
        prodectContanerr.innerHTML = '';
        Object.values(cartItemss).map(item => {
            prodectContanerr.innerHTML += `
        <div class="product">
        <ion-icon class="delete" name="close-circle"></ion-icon>

        <img src="..//img/accessories/${item.name}.jpg" id='pro' width="100px' height="100px">
                        <span>${item.name}</span> 

                    </div>


                    // <div class="price sm-hide">${item.price}</div>
                    // <div class="quantity">
                    //     <ion-icon class="decrease " name="arrow-dropleft-circle"></ion-icon>
                    //         <span>${item.vote}</span>
                    //     <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>   
                    //     <ion-icon name="add-outline"></ion-icon>
                    // </div>
                    // <div class="total">${item.vote * item.price}</div>`



                    
        
        }
        )
        prodectContanerr.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle"> Total</h4>
                <h4 class="basketTotal">$${cartCostt},00</h4>
            </div>`

            deleteButtonss();
            manageQuantityy();

}
}
renderr();
//---------------  function to quantity increse and decrese -----
//------------- and inside it add event listener to i tag 



function manageQuantityy() {
    let decreaseButtonss = document.querySelectorAll('.decrease');
    let increaseButtonss = document.querySelectorAll('.increase');
    let currentQuantityy = 0;
    let currentProductt = '';
    let cartItemss = localStorage.getItem('Cart');
    cartItemss = JSON.parse(cartItemss);

     // // we added from web to solve our problem --------------- 

     
    for(let i=0; i < increaseButtonss.length; i++) {
        decreaseButtonss[i].addEventListener('click', () => {
            console.log(cartItemss);
            currentQuantityy = decreaseButtonss[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantityy);
            currentProductt = decreaseButtonss[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
            // console.log(currentProduct);

            if( cartItemss[currentProductt].vote > 1 ) {
                cartItemss[currentProductt].vote -= 1;
                cartNumberr(cartItemss[currentProductt], "decrease");
                totalPrice(cartItemss[currentProductt], "decrease");
                localStorage.setItem('Cart', JSON.stringify(cartItemss));
                renderr();
            }
        });

        increaseButtonss[i].addEventListener('click', () => {
            // console.log(cartItems);
            currentQuantityy = increaseButtonss[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantityy);
            currentProductt = increaseButtonss[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
            // console.log(currentProduct);

            cartItemss[currentProductt].vote += 1;
            cartNumberr(cartItemss[currentProductt]);
            totalPrice(cartItemss[currentProductt]);
            localStorage.setItem('Cart', JSON.stringify(cartItemss));
            renderr();
        });
    }
}




//------------------  to delete the div  and to add event listener to i tag

function deleteButtonss() {
    let deleteButtonss = document.querySelectorAll('.product ion-icon');
    let productNumberss = localStorage.getItem('items');
    let cartCostt = localStorage.getItem("totalPrice");
    let cartItemss = localStorage.getItem('Cart');
    cartItemss = JSON.parse(cartItemss);
    let productNamee;
    // console.log(cartItems);


    // // we added from web to solve our problem ---------------
    for(let i=0; i < deleteButtonss.length; i++) {
        deleteButtonss[i].addEventListener('click', () => {
            productNamee = deleteButtonss[i].parentElement.textContent.toLocaleLowerCase().replace(/ /g,'').trim();
           
            localStorage.setItem('items', productNumberss - cartItemss[productNamee].vote);
            localStorage.setItem('totalPrice', cartCostt - ( cartItemss[productNamee].price * cartItemss[productNamee].vote));

            delete cartItemss[productNamee];
            localStorage.setItem('Cart', JSON.stringify(cartItemss));

            renderr();
            oldCart ();
            // location.reload();
        })
    }
}

// --------------------------------------------
