import React from 'react';
import { Form, Field } from "react-final-form";

function LoginPage( props ) {
    const onSubmit = ( values ) => {
        window.alert( JSON.stringify( values, 0, 2 ) );
    }
    return (
        <>
            <h2>This is Login component with Final Form</h2>
            <Form
                initialValues={ { login: '123321', password: '456654', rememberMe: true } }
                onSubmit={ onSubmit }
                render={ ( prop ) =>
                    <form onSubmit={ prop.handleSubmit }>
                        <label htmlFor="login">Login</label>
                        <Field
                            afterSubmit={ () => {
                                console.log( 'Login field AFTER submit...' )
                            } }
                            beforeSubmit={ () => {
                                console.log( 'Login field BEFORE submit...' )
                            } }
                            name='login'
                            component='input'
                            type='text'/>
                        <label htmlFor="password">Password</label>
                        <Field
                            name='password'
                            component='input'
                            type='password'/>
                        <label htmlFor="rememberMe">Remember me</label>
                        <Field
                            name='rememberMe'
                            component='input'
                            type='checkbox'/>
                        <button>Submit</button>
                    </form> }
            />
        </>
    );
}

export default LoginPage;