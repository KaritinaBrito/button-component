
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import { ButtonIcon } from '../ButtonIcon';
import '../styles/Home.css';

export const Home = ()=>{
    return (
        <>
        <div className='container-main'>
            <div className='container-left'>
            <h2><a href="https://devchallenges.io/"><b>Dev</b>challenges.io</a></h2>
            
            <div className='menu-list'>
                <Link to={'/working'}>Color</Link>
                <Link to={'/working'}>Typography</Link>
                <Link to={'/working'}>Spaces</Link>
                <Link to={'/buttons'}>Buttons</Link>
                <Link to={'/working'}>Inputs</Link>
                <Link to={'/working'}>Grid</Link>
            </div>
        </div>
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
            <p className='footer'>created by <a>KaritinaBrito</a> - devChallenges.io</p>
        </div>
        </div>
    
        </>
    )
}