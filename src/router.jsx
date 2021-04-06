import React from 'react';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./home";
import User from "./user";


class AppRouter extends React.Component{
    render(){
        return (<BrowserRouter>
            <ul>
                <li><Link to="/home">首页</Link></li>
                <li><Link to="/user">个人中心</Link></li>
            </ul>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/user" component={User}/>
            </Switch>
        </BrowserRouter>)
    }
}

export default AppRouter