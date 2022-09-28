import { useFormik } from 'formik';
import './BillingForm.css'

function BillingForm() {

    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            address: '',
            country: '',
            city: '',
            postalCode: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className='billing-form'>
            <div className='cart-row cart-row-2'>
                <input
                    id='email'
                    name='email'
                    type='email'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder="Email"
                />
                <input
                    id='name'
                    name='name'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    placeholder="Name"
                /></div>
            <div className='cart-row cart-row-1'>

                <input
                    id='address'
                    name='address'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.address}
                    placeholder="Address"
                />
            </div>
            <div className='cart-row cart-row-3'>
                <input
                    id='country'
                    name='country'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.country}
                    placeholder="Country"
                />
                <input
                    id='city'
                    name='city'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.city}
                    placeholder="City"
                />
                <input
                    id='postalCode'
                    name='postalCode'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.postalCode}
                    placeholder="Postal Code"
                />
            </div>
        </form>
    )
}

export default BillingForm