import { Button, Card, CardContent, CardMedia, Container, TextField } from '@mui/material'
import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const Contactus = () => {

    let users = [];

    const formSubmit = ({fullname}) => {
        // console.log(formdata);
        if(!users.includes(fullname))
            {
                users.push(fullname);
                alert('user added')
            }
        else 
        alert('Username already exists!!')
    }

    const myValidation = Yup.object().shape({
        email : Yup.string().required('Email Required').email('Invalid Email'),
        fullname : Yup.string().required('Fullname Required').min(1, 'Too Small'),
        phone : Yup.string().required('Phone is Required')
    })

  return (
    <div>
        <Container>
        <Card>
            <CardMedia height="300" component="img" image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29ycG9yYXRlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80" />
            <CardContent>
                <h2 className='text-center'>CONTACT US NOW</h2>
                <hr />

                <Formik initialValues={{ fullname : '', email : '', phone : '' }}
                    onSubmit={formSubmit}   
                    validationSchema={myValidation}
                >
                    { ({values, handleSubmit, handleChange, errors}) => (
                        <form onSubmit={handleSubmit}>

                            <TextField error={Boolean(errors.fullname)} helperText={errors.fullname} sx={{mt : 5}} label="Fullname" variant='outlined' value={values.fullname} id="fullname" onChange={handleChange} fullWidth />
                            <TextField error={Boolean(errors.email)} helperText={errors.email} sx={{mt : 5}} label="Email Address" variant='outlined' value={values.email} id="email" onChange={handleChange} fullWidth />
                            <TextField error={Boolean(errors.phone)} helperText={errors.phone} sx={{mt : 5}} label="Phone Number" variant='outlined' value={values.phone} id="phone" onChange={handleChange} fullWidth />

                            <Button type='submit' sx={{mt: 7}} variant="contained"> <i class="fas fa-phone"></i> Call Me</Button>
                        </form>
                    ) }
                </Formik>

            </CardContent>
        </Card>
        </Container>
    </div>
  )
}

export default Contactus