import React from 'react';
import SharedTitles from '../../../../components/SharedTitles';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_API)

const Payment = () => {
    return (
        <div>
            <SharedTitles subtitle={'please pay to eat'} title={'have a nice day'}></SharedTitles>
            <Elements stripe={stripePromise}>
<CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;