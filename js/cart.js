'use strict'

if (localStorage.photo) {

    let photoFromLS = JSON.parse(localStorage.photo);
    
    for (let i = 0; i < photoFromLS.length; i++) {
        new MenImges(photoFromLS[i].name); //re-instantiation
       

        allProduct[i].renderImgMen();
    }
}

// if (localStorage.clickcount) {

//     let clickers = JSON.parse(localStorage.clickcount);
    
//     for (let i = 0; i < clickers.length; i++) {
//         new MenImges(clickers[i].name); //re-instantiation
       

//         allProduct[i].renderImgMen();
//     }
// }



let divForCart =document.getElementById('forCart');
for(let i=0;i<allProduct.length;i++){
    let p =document.createElement('p');
    divForCart.appendChild(p);
    p.innerText=allProduct[i].name
}
