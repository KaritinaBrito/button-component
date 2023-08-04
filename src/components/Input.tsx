import { useState } from 'react';
import validateText from './validate';
import '../styles/Input.css';


interface Props {
    name: string, 
    title: string, 
    label: string, 
    type: string, 
    placeholder: string,
    textError?: boolean,
}

const Input:React.FC<Props> = (props) => {
    const [search, setSearch] = useState('');

    const errorMessage = validateText(search);

    return (
        <div className='container-input'>
            <form 
            onSubmit={ev =>{
                ev.preventDefault()
            }}>
                <h3 className='title-input'>&lt;{props.title} /&gt;</h3>
                <div className={'input-info'}  >
                    <label className={props.name} htmlFor={props.name}>{props.label}</label>
                    <input 
                        id={props.name} 
                        type={props.type}
                        value={search}
                        onChange={e => setSearch(e.target.value)} 
                        placeholder={props.placeholder}
                    />
                    <p className={props.textError ? 'error-message-active' : 'error-message'}>{errorMessage}</p>
                </div>
            </form>
        
        </div>
    )
}


export default Input;