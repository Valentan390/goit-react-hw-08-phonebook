import React from 'react';
import { useDispatch } from 'react-redux';
import s from './LoginForm.module.css';
import { logIn } from 'redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={s.label}>
        Email
        <input
          autocomplete="on"
          className={s.input}
          type="email"
          name="email"
          placeholder="Email"
          required
        />
      </label>
      <label className={s.label}>
        Password
        <input
          autocomplete="on"
          className={s.input}
          type="password"
          name="password"
          placeholder="Password"
          required
        />
      </label>
      <button className={s.button} type="submit">
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
