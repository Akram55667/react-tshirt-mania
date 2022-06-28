import React from "react";
 
import "./Cart.css";
const Cart = ({ cart, handleRemoveFromCart }) => {
    // conditional rendering options
    // 1. Element variable
    // 2. ternary operator condition ? true : false
    // 3. && operator (shorthand)
    let command;
    if(cart.length === 0){
        command =  <div>
            <h5>oh kipta, khoroch kor</h5>
            <p>konos na kno</p>
        </div>
    }

    else if(cart.length === 1){
        command = <p>Please add more...</p>
    }

    else{
        command = <p><small>Thanks for adding item</small></p>
    }
   
  return (
    <>
      <div>
        <h2>Item Selected: {cart.length}</h2>
      
        {
            cart.map(tShirt=> <p>
                {tShirt.name}
                <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
            
            </p>)
        }
        {
            command
        }
        {
            cart.length ===0 || <p className="orange">YaY! you ar buying</p>
        }
        {
            cart.length === 3 && <div className="orange">
                <h3>Trigonal</h3>
                <p>tin jon ke ki gift diba</p>
            </div>
        }

        {cart.length !==4 ? <p>Keep adding</p> : <button>Remove all</button>}
        {
            cart.length ===4 && <button className="orange"> Review Order</button>
        }
      </div>
    </>
  );
};

export default Cart;
