import React, { Component } from 'react';
import { Navigate } from 'react-router-dom'; // Import Navigate for redirection

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log error information
    console.error("Error caught by Error Boundary: ", error, info);
  }

  render() {
    if (this.state.hasError) {
      // Redirect to the home page
      return <Navigate to="/" replace />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
