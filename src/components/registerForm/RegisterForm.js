import React from 'react';
import { useDispatch } from 'react-redux';
import s from './RegisterForm.module.css';
import { register } from 'redux/auth/operations';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={s.label}>
        Username
        <input
          autocomplete="on"
          className={s.input}
          type="text"
          name="name"
          placeholder="Username"
          required
        />
      </label>
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
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
