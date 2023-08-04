
import { Button } from '../components/Button';
import { ButtonIcon } from './ButtonIcon';
import '../styles/Home.css';
import MenuSide from '../components/MenuSide';
import Footer from '../components/Footer';

export const Home = ()=>{
    return (
        <>
        <div className='container-main'>
        <MenuSide/>
        <div className='container-right'>
            <h2>Buttons</h2>
    
            <Button typeBtn={'Button'} action={'default'} nameBtn={'Default'}/>
            <Button typeBtn={'Button variant="outline"'} action={'outline'} nameBtn={'Default'}/>
            <Button typeBtn={'Button variant=”text”'} action={'text'} nameBtn={'Default'}/>
            <Button typeBtn={'Button disabled'} action={'disabled'} nameBtn={'Disabled'}/>
            <div className='btns-icons'>
                <ButtonIcon typeBtn={'Button startIcon=”local_grocery_store”'} action={'iconss'} nameBtn={'Default'} img={'../src/assets/shopCart.svg'} />
                <ButtonIcon typeBtn={'Button startIcon=”local_grocery_store”'} action={'iconss-end'} nameBtn={'Default'} img={'../src/assets/shopCart.svg'} />          
            </div>
            <div className='container-btns-size'>
                <Button typeBtn={'Button size="sm"'} action={'small'} nameBtn={'Default'}/>
                <Button typeBtn={'Button size="md"'} action={'medium'} nameBtn={'Default'}/>
                <Button typeBtn={'Button size="lg"'} action={'large'} nameBtn={'Default'}/>
            </div>
            <div className='container-btns-colors'>
                <Button typeBtn={'Button color="default"'} action={'gray'} nameBtn={'Default'}/>
                <Button typeBtn={'Button color="default"'} action={'primary'} nameBtn={'Default'}/>
                <Button typeBtn={'Button color="primary"'} action={'secundary'} nameBtn={'Secundary'}/>
                <Button typeBtn={'Button color="secundary"'} action={'dangerous'} nameBtn={'Danger'}/>
            </div>
    
            <p>Icons: https://material.io/resources/icons/?style=round</p>
            <Footer/>
        </div>
        </div>
    
        </>
    )
}