import React from 'react';
// pages
import Home from './pages/Home';
import NotFoundPage from './pages/NotFound';
import Characters from './pages/Character';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";


const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache()
});

// const client = ...

client
  .query({
    query: gql`
    query Query($page: Int) {
      listPeople(page: $page) {
        name
        height
      }
    }
    `
  })
  .then(result => console.log(result));

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Characters' element={<Characters />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
