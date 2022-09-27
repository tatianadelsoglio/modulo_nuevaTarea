import React from "react";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./apollo/apolloClient";
import { ConfigProvider } from "antd";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import esES from "antd/lib/locale/es_ES";
import "./App.css";
import MainLayout from "./components/layout/MainLayout";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <ConfigProvider locale={esES}>
        <Router>
          <Switch>
            <Route path="/">
              <MainLayout/>
            </Route>
          </Switch>
        </Router>
      </ConfigProvider>
    </ApolloProvider>
  );
}

export default App;
