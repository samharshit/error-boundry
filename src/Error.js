import { Component } from "react";

export class ErrorBoundy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }

  render() {
    if (this.state.hasError) {
      return <h3>something went wrong</h3>;
    }
    return <h3>All ok !!!</h3>;
  }
}
