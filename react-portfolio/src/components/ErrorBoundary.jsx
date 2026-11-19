/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    if (process.env.NODE_ENV !== "production") {
      console.error(error, errorInfo);
    }
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }
    return <ErrorFallback error={this.state.error} onRetry={this.resetError} />;
  }
}

const ErrorFallback = ({ error, onRetry }) => {
  const navigate = useNavigate();
  return (
    <div className="error_fallback">
      <h1>Something went wrong</h1>
      <p>
        An unexpected error occurred. Please try again — your data is safe.
      </p>
      {process.env.NODE_ENV !== "production" && error && (
        <pre className="error_fallback_details">
          {error.message}
        </pre>
      )}
      <div className="error_fallback_actions">
        <button
          className="project_button text_normal"
          onClick={onRetry}
        >
          Try Again
        </button>
        <button
          className="project_button text_normal"
          onClick={() => {
            onRetry();
            navigate("/");
          }}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ErrorBoundary;
