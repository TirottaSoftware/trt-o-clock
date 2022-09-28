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
import { ToastContainer } from 'react-toastify';

import store from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `http://localhost:4000/graphql`
})

let persistor = persistStore(store);

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
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  </ApolloProvider>
);
