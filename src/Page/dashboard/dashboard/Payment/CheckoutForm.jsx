import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useCart from "../../../../Hooks/useCart";
import { AuthContext } from "../../../../provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const CheckoutForm = () => {
    const strip = useStripe()
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const {user}=useContext(AuthContext)
    const [cart]=useCart()
    const totalPrice = cart?.reduce((total, item) => total + Number(item.price), 0);
    const [clientSecret,setClientSecret]=useState('')
    useEffect(()=>{
        axiosSecure.post('/create-payment',{price:totalPrice})
        .then(res=>{
            console.log(res.data)
            setClientSecret(res.data.clientSecret)
        })
    },[])
    const [error,setError]=useState('')
    const element = useElements()
        const handleSubmit=async(e)=>{
            e.preventDefault()
            if(!strip || !element){
                return
            }
            const card = element.getElement(CardElement)
            if(card === null){
                return
            }
          const {error , paymentMethod}= await strip.createPaymentMethod({
            type:'card',
            card
          })
          if (error) {
            console.log('[error]', error);
            setError(error.message)
          } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
          }
         const {paymentIntent,error:confirmError}= await strip.confirmCardPayment(clientSecret,{
          payment_method:{
            card:card,
            billing_details:{
              name:user?.displayName || "anonymise",
              email:user?.email || "anonymise"
            }
          },
        
         })
         if(confirmError){
          console.log(confirmError,"confirm error khaisi")
         }
         if(paymentIntent){
          console.log("payment intent",paymentIntent)
          const payment={
            payDate:new Date(),
            customer:user?.displayName,
            email:user?.email,
            cartId: cart.map(cart=> cart._id),
            menuId:cart.map(cart=> cart.cartId),
            transId:paymentIntent.id,
            totalPrice:totalPrice
          }

        

          const res = await axiosSecure.post('/payments',payment)
        
          toast(`payment success your transiction id ${paymentIntent.id}`)
          navigate('/dashboard/history')
         }
        }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn border-none bg-[#D1A054] mt-5 text-gray-100 " type="submit" disabled={!strip || !clientSecret || error}>
        Pay
      </button>
{
    error && <p className="text-red-600">{error}</p>
}
            </form>
        </div>
    );
};

export default CheckoutForm;