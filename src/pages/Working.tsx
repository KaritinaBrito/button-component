import { Link } from 'react-router-dom';
import '../styles/Working.css';

const Working = () => {
    return(
        <div className='container-work'>
            <div className="back">
            <Link to={"/"}><img src="../../src/assets/back.svg" alt="back" /></Link>
            </div>
            <h1>Sorry, we are working!</h1>
            <div id="working"></div>
        </div>
    )
}

export default Working;