import './ButtonIcon.css';
import { toggleIconss } from './toogles';


export const ButtonIcon = (props) => {

    return(
    <div className='container-button-icons'>
        <span className='span-btn-icon'>&lt;{props.typeBtn} /&gt;</span>
        <div className="button-styles">
            <button type='button' id={props.action} onClick={toggleIconss} ><img src={props.img} alt="IconSelect" className='icon-select' id='carrito'/>{props.nameBtn}</button>
            
        </div>
    </div>)
}

