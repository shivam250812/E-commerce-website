// import React, { useContext } from 'react';
// import './CartItems.css';
// import { ShopContext } from '../../context/ShopContext';
// import remove_cart from '../assetss/cart_cross_icon.png';
// import all_product from '../assetss/all_product';


// const CartItems = () => {
//     const {getTotalCartAmount,all_product,cartItems, removeFromCart } = useContext(ShopContext);

//     return (
//         <div className='cartitems'>
//             <div className="cartitems-format-main">
//                 <p>Products</p>
//                 <p>Title</p>
//                 <p>Price</p>
//                 <p>Quantity</p>
//                 <p>Total</p>
//                 <p>Remove</p>
//             </div>
//             <hr />

//             {all_product.map((product) => {
//                 const { id, name, image, new_price } = product;
//                 const quantity = cartItems[id];
                
//                 if (quantity > 0) {
//                     return (
//                         <div key={id}>
//                             <div className="cartitems-format cartitems-format-main">
//                                 <img src={image} alt={name} className="carticon-producticon" />
//                                 <p>{name}</p>
//                                 <p>${new_price}</p>
//                                 <button className="cartitems-name-quantity">{quantity}</button>
//                                 <p>${new_price * quantity}</p>
//                                 <img className='carticon-remove-icon' src={remove_cart} onClick={() => removeFromCart(id)} alt="Remove" />
//                             </div>
//                             <hr />
//                         </div>
//                     );
//                 }
//                 return null;
//             })}
//             <div className="cartitems-down">
//                 <div className="cartitems-total">
//                     <h1>cart totals</h1>
//                     <div>
//                         <div className="cartitems-total-item">
//                             <p>Subtotal</p>
//                             <p>${getTotalCartAmount()}</p>
//                         </div>
//                         <hr />
//                         <div className="cartitems-total-item">
//                             <p>Shipping Fee</p>
//                             <p>Free</p>
//                         </div>
//                         <hr />
//                         <div className="cartitems-total-item">
//                             <h3>Total</h3>
//                             <h3>${getTotalCartAmount()}</h3>
//                         </div>
//                         <button>PROCEED TO CHECKOUT</button>
//                     </div>
//                 </div>
//                     <div className="cartitem-promocode">
//                         <p>If you havae a promocode, Enter it here</p>
//                         <div className="cartitem-promobox">
//                             <input type="text" placeholder='promocode' />
//                             <button>Submit</button>
//                         </div>
//                     </div>
//             </div>
//         </div>
//     );
// }

// export default CartItems;


import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../context/ShopContext';
import remove_cart from '../assetss/cart_cross_icon.png';

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    // Calculate the total amount
    const totalAmount = getTotalCartAmount();

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />

            {all_product.map((product) => {
                const { id, name, image, new_price } = product;
                const quantity = cartItems[id];
                
                if (quantity > 0) {
                    return (
                        <div key={id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={image} alt={name} className="carticon-producticon" />
                                <p>{name}</p>
                                <p>${new_price}</p>
                                <button className="cartitems-name-quantity">{quantity}</button>
                                <p>${new_price * quantity}</p>
                                <img className='carticon-remove-icon' src={remove_cart} onClick={() => removeFromCart(id)} alt="Remove" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${totalAmount}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${totalAmount}</h3>
                        </div>
                        <button>Proceed to Checkout</button>
                    </div>
                </div>
                <div className="cartitem-promocode">
                    <p>If you have a promo code, enter it here</p>
                    <div className="cartitem-promobox">
                        <input type="text" placeholder='Promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;
