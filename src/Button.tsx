import './Button.css';

export const Button = (props) => {

        return(
        <div className='container-button'>
            <span className='span-btn'>&lt;{props.typeBtn} /&gt;</span>
            <button type='button' id={props.action} >{props.nameBtn}</button>
        </div>
    )
}