import '../styles/Button.css';


interface ButtonSingle {
    typeBtn: string,
    action: string,
    nameBtn: string
}

export const Button:React.FC<ButtonSingle> = (props) => {

        return(
        <div className='container-button'>
            <span className='span-btn'>&lt;{props.typeBtn} /&gt;</span>
            <button type='button' id={props.action} >{props.nameBtn}</button>
        </div>
    )
}