import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { dispatchLogin } from '../../actions/authActions';

function LoginModal({ dispatchLogin }) {
  return (
    <section className="login-modal-container">
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={async (values, actions) => {
          await dispatchLogin(values);
        }}
      >
        {props => (
          <form className="login-modal" onSubmit={props.handleSubmit}>
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

const mapDispatchToProps = {
  dispatchLogin
};

export default connect(
  null,
  mapDispatchToProps
)(LoginModal);
