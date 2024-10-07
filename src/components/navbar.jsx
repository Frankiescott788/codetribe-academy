import { Container } from '@mui/material'
import Logo from '../assets/images/logo-bookmark.svg';

const Nav = () => {
    return ( 
        <nav>
            <Container>
                <div className='nav-elements'>
                    <div className='nav-logo'>
                        <img src={ Logo }/>
                    </div>
                    <div className='left-navs'>
                        <ul className='nav-list'>
                            <li> Features </li>
                            <li> Pricing </li>
                            <li> Contacts </li>
                        </ul>
                        <div className='nav-btn'>
                            <button> Login </button>
                        </div>
                    </div>
                    
                </div>
            </Container>
        </nav>
     );
}
 
export default Nav;