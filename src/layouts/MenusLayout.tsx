import Home from "@/home";
import User from "@/user";
import { Layout, Menu } from "antd";
import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import cx from "./MenusLayout.scss";

const { Content, Header, Sider } = Layout;

export class MenusLayout extends Component {
  render() {
    return (
      <Layout>
        <Sider className={cx("sider")}>
          <Menu mode="inline" theme="dark" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to="/home">首页</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/user">用户</Link>
            </Menu.Item>
            <Menu.SubMenu title="运营管理">
              <Menu.Item>运营管理1</Menu.Item>
              <Menu.Item>运营管理2</Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
            <Switch>
              <Route path="/home" component={Home} exact={true} />
              <Route path="/user" component={User} exact={true} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
