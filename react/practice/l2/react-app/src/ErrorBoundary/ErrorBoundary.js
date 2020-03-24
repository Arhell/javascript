import React from "react";

export default class ErrorBoundary extends React.Component{
  static = {
    hasError: false
  };

  componentDidCatch(error, errorInfo) {
    this.setState({hasError: true})
  }

  render() {
    if(this.state.hasError) {
      return <h1 style={{color: 'red'}}>Some text</h1>
    }

    return this.props.children
  }
}