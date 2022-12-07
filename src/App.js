import React, { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./apollo/apolloClient";
import { ConfigProvider } from "antd";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import esES from "antd/lib/locale/es_ES";
import "./App.css";
import MainLayout from "./components/layout/MainLayout";
import { TaskContext } from "./context/TaskContext";

function App() {


console.log(window.location);

  const [contactos, setContactos] = useState([]);

  return (
    <ApolloProvider client={apolloClient}>
      <ConfigProvider locale={esES}>
        <TaskContext.Provider value={{
          contactos, 
          setContactos
        }}>
          <Router>
            <Switch>
              <Route path="/">
                <MainLayout/>
              </Route>
            </Switch>
          </Router>
        </TaskContext.Provider>
      </ConfigProvider>
    </ApolloProvider>
  );
}

export default App;
