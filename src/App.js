import React from 'react';
import ErrorBoundry from './ErrorBoundry';
import CardList from './CardList'
import SearchBox from './SearchBox'
import Scroll from './Scroll'

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            robots:[],
            searchField:'',
        };
    }
    async componentDidMount(){
        let fr = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await fr.json();
        this.setState({robots:data});
    }
    onSearchCahnge = (event)=>{
        this.setState({searchField:event.target.value});
    }
    render() {
        const robotsFiltered = this.state.robots.filter(r=>{
            return r.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return (
            <div>
                <h1>Robo Friends</h1>
                <SearchBox searchChange={this.onSearchCahnge}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={robotsFiltered}/>
                    </ErrorBoundry>
                </Scroll>
                
            </div>
        );
    }
}
export default App;