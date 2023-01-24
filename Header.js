import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { UseStateValue } from './StateProvider';


function Header() {

    
    const [{basket}, dispatch] = UseStateValue();

  return (
    <div className='header'>
        <Link to = '/' >
        <img className='header__logo'
        src='https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695'
        alt='' /> 
        </Link>

        <div className='header__search'>
          <input  className='header__searchinput' type="text"/> 
          <SearchIcon className='header__searchicon' /> 
        </div>   

        <div className='header__nav'>
            
            <div className='header__option'>
                <span className='header__optionone'>
                    Hello Guest
                </span>
                <span className='header__optiontwo'>
                    Sign in
                </span>
            </div>

            <div className='header__option'>
            <span className='header__optionone'>
                    Return
                </span>
                <span className='header__optiontwo'>
                    & Orders
                </span>
            </div>

            <div className='header__option'>
            <span className='header__optionone'>
                    Your
                </span>
                <span className='header__optiontwo'>
                    Prime
                </span>
            </div>


            <Link to='/checkout' >
            <div className='header__optionbasket'>
            <ShoppingBasketIcon />
            <span className='header__optiontwo header__basketcount'>{basket?.length}</span>
            </div>
            </Link>
            
        </div>
        

    </div>
  )
}

export default Header