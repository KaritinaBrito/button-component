import '../styles/ButtonIcon.css';
import { toggleIconss } from '../toogles';

interface ButtonProps {
    typeBtn: string, 
    action: string,
    img: string,
    nameBtn: string    
}

export const ButtonIcon:React.FC<ButtonProps>= (props) => {

    return(
    <div className='container-button-icons'>
        <span className='span-btn-icon'>&lt;{props.typeBtn} /&gt;</span>
        <div className="button-styles">
            <button type='button' id={props.action} onClick={toggleIconss} ><img src={props.img} alt="IconSelect" className='icon-select' id='carrito'/>{props.nameBtn}</button>
            
        </div>
    </div>)
}

