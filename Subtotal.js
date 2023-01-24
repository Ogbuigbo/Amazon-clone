import React from 'react';
import CurencyFormat from "react-currency-format";
import { UseStateValue } from './StateProvider';
import { getBasketTotal } from './Reducer';



function Subtotal() {

  const [{basket}, dispatch] = UseStateValue();


  return (
    <div className='subtotal'>
        <CurencyFormat
        renderText={(value)=>(
            <>
            <p>
             Subtotal ({basket?.length} items): <strong>
              {value}</strong>
            </p>
            <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
            </small>
            </>
        )}
        
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeperator={true}
        prefix={'$'}
        />

        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal