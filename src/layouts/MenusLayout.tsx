import { Layout } from "antd";
import { Component } from "react";

const { Content, Header, Sider } = Layout;

export class MenusLayout extends Component {
  render() {
    return (
      <Layout>
        <Sider>Slider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
        </Layout>
      </Layout>
    );
  }
}
