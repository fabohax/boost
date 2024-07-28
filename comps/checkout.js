  import { useState, useEffect } from 'react';
  import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
  import axios from 'axios';
  import { removeAllFromCart } from './Cart';

  const currency = "USD";
  const style = { "color": "black", "shape":"pill" };

  const sendEmailWithAxios = (cartItems, amount, payerName, payerMail) => {
    axios
      .post('/api/paid', { cartItems, amount, payerName, payerMail })
      .then((response) => {
        console.log('Email sent successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };  

  const ButtonWrapper = ({ amount, currency, showSpinner, cartItems }) => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    const handleCreateOrder = (data, actions) => {
      return actions.order
        .create({
          purchase_units: [
            {
              amount: {
                currency_code: currency,
                value: amount,
              },
            },
          ]
        })
        .then((orderId) => {
          // Your code here after create the order
          return orderId;
        });
    };

    let [payerName, setPayerName] = useState('');
    let [payerMail, setPayerMail] = useState('');

    const handleApprove = async (data, actions) => {
      try {
        const details = await actions.order.capture();
        const { email_address, name } = details.payer;
        payerName = name.given_name;
        payerMail = email_address;
        console.log(`${payerName} - ${payerMail}`);
        sendEmailWithAxios(cartItems, amount, payerName, payerMail);
        removeAllFromCart();
        window.location.href = "/compra-exitosa";
      } catch (error) {
        console.error('Error capturing payment:', error);
      }
    };   

    const prerenderedPayPalButtons = (
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={handleCreateOrder}
        onApprove={handleApprove}
      />
    );

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        {prerenderedPayPalButtons}
      </>
    );
  };

  const Checkout = ({ cartItems, amount }) => {

    console.log("CartItems:", cartItems);
    console.log("Amount:", amount);
    
    const initialOptions = {
      clientId: "AYDwZF74Dt5sXtPQcFPfKYLdcOi13w_3pb-S7P3-4m33l9QtAF3KP65KCl3Kzdohdu6otPduR_b0_zIy",
      intent: "capture",
      components: "buttons"
    };

    const renderPayPalButtons = () => {
      return (
        <PayPalScriptProvider options={initialOptions}>
          <ButtonWrapper
            amount={amount}
            currency={currency}
            showSpinner={false}
            cartItems={cartItems}
          />
        </PayPalScriptProvider>
      );
    };

    return (
      <div>
        <div className='popup'>
          <div style={{ maxWidth: "100%", minHeight: "200px", margin: "0 auto", marginTop: "3em", marginBottom: "-3em" }}>
            {renderPayPalButtons()}
          </div>
        </div>
      </div>
    );
  };

  export default Checkout;
