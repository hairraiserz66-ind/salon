import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props){ super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError(){ return { hasError: true }; }
  componentDidCatch(error, info){ console.error("ErrorBoundary caught:", error, info); }
  render(){ return this.state.hasError ? <h1>Something went wrong.</h1> : this.props.children; }
}
