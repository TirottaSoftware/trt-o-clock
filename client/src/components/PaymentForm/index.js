import { useFormik } from 'formik';
import '../BillingForm/BillingForm.css'

function PaymentForm() {

    const formik = useFormik({
        initialValues: {
            cardNumber: '',
            expDate: '',
            cvc: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className='billing-form'>
            <div className='cart-row cart-row-1'>
                <input
                    id='cardNumber'
                    name='cardNumber'
                    type="tel"
                    inputmode="numeric"
                    pattern="[0-9\s]{13,19}"
                    autocomplete="cc-number"
                    maxlength="19"
                    onChange={formik.handleChange}
                    value={formik.values.cardNumber}
                    placeholder="Card Number"
                />
            </div>
            <div className='cart-row cart-row-2'>
                <input
                    id='expDate'
                    name='expDate'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.expDate}
                    placeholder="Expiration Date"
                />

                <input
                    id='cvc'
                    name='cvc'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.cvc}
                    placeholder="CVC"
                />
            </div>
        </form>
    )
}

export default PaymentForm