import { useNavigate } from 'react-router-dom';
import './Header.css'

function Header(){
    const navigate = useNavigate();

    function handleClick() {
        navigate("/Login");
      }
      
      function redirect() {
        navigate("/");
      }
      
    return(
        <div className='Header'>
                <ul>
                    <li><button className='home' onClick={redirect}>Home</button></li> 
                    <li>About</li>
                    <li>Products</li>
                    <li>Accounts</li>
                    <li>  <input type='text' placeholder='Search Items' className='searchBox'/> </li>
                    <li><button className='login' onClick={handleClick}>Login</button></li>
                    <li>Become a Seller</li>
                    <li><select  className='more'> <option>More</option> </select> </li>
                </ul>
        </div>
    )
}

export default Header;