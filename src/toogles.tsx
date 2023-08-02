
// const btnIcon = document.querySelector('.container-btn-icon');
// const imgIcon = document.querySelector('#cartShop');

// export const toggleIcon = () => {
//     if(btnIcon){
//         if(imgIcon){
//             btnIcon.addEventListener('click', () => {
//                 imgIcon.classList.toggle('img-icon-end');
//             });
//         }    
//     }
// }


const iconBtn = document.querySelector('.container-button-icons');
const botonIcon = document.querySelector('#iconss');


export const toggleIconss = () => { 
      if(iconBtn){
        if(botonIcon){
            iconBtn.addEventListener('click', () => {
                botonIcon.classList.toggle('img-icon-end');
            });
        }    
    }
}