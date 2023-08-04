import Footer from '../components/Footer.tsx';
import Input from '../components/Input.tsx';
import MenuSide from '../components/MenuSide.tsx';
import '../styles/InputsAll.css';


const InputsAll = () => {
    return(
        <>
            <div className='inputs-main'>
                <MenuSide />

            <div className='inputs-right'>
                <h2>Inputs</h2>
                
                <Input  title='Inputs' name={'defaultInput'} label={'Label'} type={'text'} placeholder={'PLaceholder'} />
                <Input  title='Input error' name={'errortInput'} label={'Label'} type={'text'} placeholder={'PLaceholder'}/>
                <Input  title='Input disabled' name={'disabledInput'} label={'Label'} type={'text'} placeholder={'PLaceholder'} />
                <div className='inputHelperText'>
                    <Input  title='Input helperText=”Some interesting text” ' name={'helperInput'} label={'Label'} type={'text'} placeholder={'PLaceholder'} textError={true}/>
                </div>
                <div className='inputsIconsContainer'>
                    <Input  title='Input startIcon ' name={'iconStart'} label={'Label'} type={'text'} placeholder={'PLaceholder'} />
                    <Input  title='Input endIcon ' name={'iconEnd'} label={'Label'} type={'text'} placeholder={'PLaceholder'} />
                </div>
                <Input  title='Input value=”text” ' name={'textIcon'} label={'Label'} type={'text'} placeholder={'Text'} />
                <div className='inputs-sizes'>
                    <Input  title='Input size=”sm” ' name={'sizeSmIcon'} label={'Label'} type={'text'} placeholder={'PLaceholder'} />
                    <Input  title='Input size=”md” ' name={'sizeMdIcon'} label={'Label'} type={'text'} placeholder={'PLaceholder'} />
                    <Input  title='Input fullWidth ” ' name={'sizeLgIcon'} label={'Label'} type={'text'} placeholder={'PLaceholder'} />
                </div>
                <Input  title='Input multiline row=”4” ” ' name={'multiline'} label={'Label'} type={'text'} placeholder={'PLaceholder'} />
                <Footer/>

                </div>

            </div>
        </>
    )
}



export default  InputsAll;