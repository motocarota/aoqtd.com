/* eslint-disable react/jsx-props-no-spreading */
import { Button } from '@mantine/core';
import { useForm } from 'react-hook-form';

function Register(props) {
  const {
    toggle,
    getOnSubmit,
    isLoading,
  } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = getOnSubmit('account/register');

  return (
    <div className="column is-three-quarters m-auto">
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">
          Email Address
          <input
            id="email"
            type="text"
            className="input"
            placeholder="Email"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <span className="tag is-danger">Please provide a valid email address</span>}
        </label>

        <label htmlFor="password">
          Password
          <input
            id="password"
            type="password"
            className="input"
            placeholder="Password"
            {...register('password', { required: true, maxLength: 40 })}
          />
          {errors.password && <span className="tag is-danger">a Password is required</span>}
        </label>

        <div className="terms">

          <label htmlFor="terms" className="checkbox">
            <input
              {...register('terms', { required: true })}
              id="terms"
              type="checkbox"
              className="checkbox m-2"
              value="Yes"
            />
            I agree to the terms and conditions
          </label>
          {errors.terms && <span className="tag is-danger">You have to accept Terms and Conditions</span>}
        </div>

        <div className="columns is-centered">
          <div className="column is-half">
            <Button fullwidth type="submit">
              {isLoading ? 'Please wait...' : 'Register'}
            </Button>
          </div>
          <div className="column is-half">
            <Button onClick={toggle} fullwidth text>
              Login instead
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
