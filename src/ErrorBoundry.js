import React,{Component} from 'react';

class ErrorBoundry extends Component {
    constructor() {
        super();
        this.state = {
            hasError:false
        }
    }
    componentDidCatch(error,info){
        this.setState({hasError:true});
    }
    render() {
        let {hasError} = this.state;
        if(hasError)
            return <h1>OPP! an error</h1>  
        return this.props.children;
    }
}

export default ErrorBoundry;