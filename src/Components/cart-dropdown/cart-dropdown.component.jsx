import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.css'

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='dropdown-items' />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

export default CartDropdown;