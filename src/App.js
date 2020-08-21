import React, {Fragment,BrowserRouter} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
// import ErrorBoundry from './ErrorBoundry';
// import CardList from './CardList'
// import SearchBox from './SearchBox'
// import Scroll from './Scroll'
// import {setSearchText,requestRobots} from './actions';

import {
    CssBaseline,
    withStyles,
  } from '@material-ui/core';
  
  import AppHeader from './components/AppHeader';
  import Home from './pages/Home';
  import Items from './pages/Items';
  import Departments from './pages/Departments';
  import Categories from './pages/Categories';
    
  const styles = theme => ({
    main: {
      padding: theme.spacing(3),
      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(2),
      },
    },
  });

  const App = ({ classes }) => (
    <Fragment>
      <CssBaseline />
      <AppHeader />
      <main className={classes.main}>
          
        <Route exact path="/" component={Home} />
        <Route path="/Items" component={Items} />
        <Route path="/Departments" component={Departments} />
        <Route path="/Categories" component={Categories} />
      {/* <SecureRoute path="/posts" component={PostsManager} /> */}
       
          
       
     </main>
    </Fragment>
  );
  export default withStyles(styles)(App);
// const mapStateToProps = state => {
//     return {
//         searchField:state.searchRobots.searchField,
//         robots:state.requestRobots.robots,
//         isPending:state.requestRobots.isPending,
//         error:state.requestRobots.error,
//     }
// }
// const mapDispatchToProps = (dispatch) =>{
//     return {
//         onSearchChange: (event)=> {
//             console.log(this)
//             return dispatch(setSearchText(event.target.value))
//         },
//         onRobotsChange:()=>dispatch(requestRobots())
//     }
// }
// class App extends React.Component{
  
    // async componentDidMount(){        
    //     this.props.onRobotsChange();
    // }
    // render() {
    //     const robotsFiltered = this.props.robots.filter(r=>{
    //         return r.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    //     })
    //     return (
    //         this.props.isPending
    //             ? <h2>Loading...</h2>
    //         :<div>
                
                
    //             <h1>Robo Friends</h1>
    //             <SearchBox searchChange={this.props.onSearchChange}/>
    //             <Scroll>
    //                 <ErrorBoundry>
    //                     <CardList robots={robotsFiltered}/>
    //                 </ErrorBoundry>
    //             </Scroll>
                
    //         </div>
    //     );
    // }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(App) ;