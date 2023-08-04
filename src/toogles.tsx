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
};