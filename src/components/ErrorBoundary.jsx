import React from 'react';
import _isObject from 'lodash/isObject';
import { Header } from '@mantine/core';
import { Text } from '@mantine/core';


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      message: '',
      stack: '',
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      message: error.message,
      stack: error.stack,
    };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    // eslint-disable-next-line no-console
    console.error(error, errorInfo);
  }

  render() {
    const { hasError, message, stack } = this.state;
    const { children } = this.props;
    const style = {
      main: {
        maxWidth: '75%',
        margin: '50px auto',
      },
      stack: {
        whiteSpace: 'pre-wrap',
      },
    };
    const msg = _isObject(message)
      ? JSON.stringify(message)
      : message;

    if (hasError) {
      return (
        <div>
          <Header>Something went wrong. Please refresh the page.</Header>
          <Text>{msg}</Text>
          <div>
            <pre className="panel-block" style={style.stack}>
              {stack}
            </pre>
          </div>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
