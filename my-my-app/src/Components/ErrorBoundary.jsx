import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    // You can send this to a logging service if needed
    console.error("ErrorBoundary caught:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 text-red-300">
          <h2 className="text-xl font-semibold">Something broke in this section.</h2>
          <p className="mt-2 text-sm opacity-80">
            Check the browser console for the exact error and stack trace.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}
