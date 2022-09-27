import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Store from "./pages/Store";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import ProductPage from "./pages/Product";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `http://localhost:4000/graphql`
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  </ApolloProvider>
);
