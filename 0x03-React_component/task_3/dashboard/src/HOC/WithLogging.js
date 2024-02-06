import React from 'react';

const WithLogging = WrappedComponent => {
  class WithLoggingComponent extends React.Component {
    componentDidMount() {
      console.log(`Component ${this.getComponentName(WrappedComponent)} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${this.getComponentName(WrappedComponent)} is going to unmount`);
    }

    getComponentName(component) {
      return component.displayName || component.name || 'Component';
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WithLoggingComponent.displayName = `WithLogging(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithLoggingComponent;
};

export default WithLogging;

