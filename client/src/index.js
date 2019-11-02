import React from 'react';
import ReactDOM from 'react-dom';

import './style/index.scss'
import App from './app/app.js';

import { ApolloProvider } from 'react-apollo';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';

const link = createUploadLink({
  uri: process.env.REACT_APP_HTTP_ENDPOINT,
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache, link
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.getElementById('root')
);

export default client;
