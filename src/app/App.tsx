import cls from "./App.module.scss";
import List from "../components/List/List";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Search from "../components/Search/Search";

const App: React.FC = () => (
  <div className={cls.container}>
    <Layout className={cls.app}>
      <Header className={cls.head}>
        <div className={cls.title}>Header</div>
        <div className={cls.search}>
          <Search />
          <a href={`/form`} className={cls.link}>
            Create Your Card
          </a>
        </div>
      </Header>
      <Content className={cls.content}>
        <List />
      </Content>
      <Footer className={cls.foo}>Footer</Footer>
    </Layout>
  </div>
);

export default App;
