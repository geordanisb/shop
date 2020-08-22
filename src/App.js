import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import ErrorBoundry from './ErrorBoundry';
// import CardList from './CardList'
// import SearchBox from './SearchBox'
// import Scroll from './Scroll'


import {
    CssBaseline,
    withStyles,
  } from '@material-ui/core';
  
  import AppHeader from './components/AppHeader';
  import Home from './pages/Home';
  import ItemListWindow from './pages/Item/ItemListWindow';
  import ItemWindow from './pages/Item/ItemWindow';
  import DepartmentListWindow from './pages/Department/DepartmentListWindow';
  import DepartmentWindow from './pages/Department/DepartmentWindow';
  import CategoryListWindow from './pages/Category/CategoryListWindow';
  import CategoryWindow from './pages/Category/CategoryWindow';
    
  const styles = theme => ({
    main: {
      padding: theme.spacing(3),
      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(2),
      },
    },
  });



  const App = ({ classes }) => {
    return (
    <Fragment>
      <CssBaseline />
      <AppHeader />
      <main className={classes.main}>
          <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/ItemListWindow" component={ItemListWindow} />
            <Route path="/ItemWindow/:id" component={ItemWindow} />
            <Route exact path="/DepartmentListWindow" component={DepartmentListWindow} />
            <Route path="/DepartmentWindow/:id" component={DepartmentWindow} />
            <Route exact path="/CategoryListWindow" component={CategoryListWindow} />
            <Route path="/CategoryWindow/:id" component={CategoryWindow} />
          </Router>
     </main>
    </Fragment>
  )
};
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