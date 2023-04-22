import { Component } from "react";

export class ErrorBoundry extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true
    };
  }

  render() {
    if (this.state.hasError) {
      return <h3>something went wrong</h3>;
    }
    return this.props.children
  }
}
