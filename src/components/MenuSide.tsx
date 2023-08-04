import { Link } from 'react-router-dom';
import '../styles/MenuSide.css';


const MenuSide =()=>{
    return(
        <>
            <div className='container-left'>
            <h2><a href="https://devchallenges.io/"><b>Dev</b>challenges.io</a></h2>
            
            <div className='menu-list'>
                <Link to={'/working'}>Color</Link>
                <Link to={'/working'}>Typography</Link>
                <Link to={'/working'}>Spaces</Link>
                <Link to={'/buttons'}>Buttons</Link>
                <Link to={'/inputs'}>Inputs</Link>
                <Link to={'/working'}>Grid</Link>
            </div>
        </div>
        </>
    )
}
export default MenuSide;