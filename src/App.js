import React from 'react';
import Blog from './Blog';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' ; 
import Contact from './Contact';
import BlogDetail from './BlogDetail';
import Create from './Create';
import NotFound from './NotFound';

function App() {
return(
    <Router>
        <div className='App'>
            <Navbar />
        <div className='content'>
            <Switch>
                <Route exact path="/">
                    <Blog />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/create">
                    <Create />
                </Route>
                <Route path="/blog/:id">
                    <BlogDetail />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </div>
    </div>
    </Router>
    
)
}

export default App;
