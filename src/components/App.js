import React, {Component} from 'react'
import MyWallet from './MyWallet'
import Exchange from './Exchange'
import Login from './Login'
import Register from './Register'
import Recover from './Recover'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

function App(){
    return(
        <Router>
            <div className="App">
                <Route path="/" exact component={MyWallet} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/recover" component={Recover} />
                <Route path="/exchange" component={Exchange} />
            </div>
        </Router>
    )
}

export default App 