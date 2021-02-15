import React from 'react';
import { Field, reduxForm } from "redux-form";

let LoginForm = () => {
    return (
            <form>
                <span>Логин</span>
                <Field
                    name='login'
                    component='input'
                    type="text"
                    placeholder='Логин'/>
                <span>Пароль</span>
                <Field
                    name='password'
                    component='input'
                    type="password"
                    placeholder='Пароль'/>
                <span>Запомнить меня</span>
                <Field
                    name='rememberMe'
                    component='input'
                    type="checkbox"
                    />
                <button>Отправить</button>
            </form>
    );
};

LoginForm = reduxForm( { form: 'login' } )( LoginForm );

export default LoginForm;