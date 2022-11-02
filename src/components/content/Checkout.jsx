import React,{useContext} from 'react';
import { CarritoContext } from '../../context/CarritoContext';

const Checkout = () => {
    const {total} = useContext(CarritoContext)
    return (
        <>
        <div className="checkoutCard">
        <div className="wrapperCheckout">
            <div className="title">Checkout</div>
            <div className="checkout_form">
            <div class="input_item">
                <input type="text" className='nameCheckout'placeholder="Card Holder Name" required></input>
            </div>
            <div className="input_item">
                <input type="email" className='emailCheckout'placeholder="Card Holder Email" required></input>
            </div>
            <div className="input_grp">
            <div className="input_item">
                <p className='totalCheckout'>Your Total:</p>
            </div>
            <div className="input_item">
                <h2 className='priceH2'>${total}</h2>
            </div>
            </div>
            <div className="btnCheckout">
                <a href="#">proceed</a>
            </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default Checkout;
