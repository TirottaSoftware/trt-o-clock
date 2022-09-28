import React from "react";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Store from "./pages/Store";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import ProductPage from "./pages/Product";
import ScrollToTop from "./components/ScrollToTop";
import { Provider } from "react-redux";
import Cart from "./pages/Cart";
import store from './redux/store'
import { ToastContainer } from 'react-toastify';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `http://localhost:4000/graphql`
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      newestOnTop={false}
      closeOnClick
      theme="dark"
    />
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>
);
