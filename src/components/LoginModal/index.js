import React from 'react';
import { Formik } from 'formik';

export default function LoginModal() {
  return (
    <section className="login-modal-container">
      <Formik initialValues={{ email: '', password: '' }}>
        {props => (
          <form className="login-modal">
            <input
              onChange={props.handleChange}
              value={props.values.email}
              name="email"
              type="text"
            />
            <input
              onChange={props.handleChange}
              value={props.values.password}
              name="password"
              type="text"
            />
            <button type="submit">Login</button>
          </form>
        )}
      </Formik>
    </section>
  );
}
