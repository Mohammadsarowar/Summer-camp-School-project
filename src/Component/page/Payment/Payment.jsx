// import React from 'react';
// import useTitle from '../../../Share/useTitel';
// import { useLoaderData } from 'react-router-dom';
// import useCart from '../../hooks/useCart';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import CheckoutForm from './CheckoutForm';
// const stripePromise = loadStripe(import.meta.env.VITE_Payment_pk);
// const Payment = () => {
//     useTitle('payment')
//     const data = useLoaderData();
//     console.log(data);
//     const [cart] = useCart();
//     const total = cart.reduce((sum, item) => sum + item.price, 0);
//     const price = parseFloat(total.toFixed(2))
//     return (
//         <div>
//             <h2 className='mt-8 text-5xl font-mono text-center'>WellCome to Payment Page</h2>
   
   
//         <div>
         
//             <Elements stripe={stripePromise}>
//                 <CheckoutForm cart={cart} price={price}></CheckoutForm>
//             </Elements>
//         </div>
//         </div>
//     );
// };

// export default Payment;