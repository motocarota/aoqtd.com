/* eslint-disable react/jsx-props-no-spreading */
import { Button } from '@mantine/core';
import { useForm } from 'react-hook-form';

function Login(props) {
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

  const onSubmit = getOnSubmit('account/login');

  return (
    <div className="column is-three-quarters m-auto">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input"
          type="text"
          placeholder="Email"
          {...register('email', {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
        />
        {errors.email && <span>Please provide a valid email address</span>}

        <input
          className="input"
          type="password"
          placeholder="Password"
          {...register('password', { required: true, maxLength: 40 })}
        />
        {errors.password && <span>Password is required</span>}
        <div className="columns is-centered">
          <div className="column is-half">
            <Button type="submit" fullwidth>
              {isLoading ? 'Please wait...' : 'Login'}
            </Button>
          </div>
          <div className="column is-half">
            <Button onClick={toggle} text fullwidth>
              Register instead
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
