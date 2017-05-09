import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Provider from 'react-redux';
import { match, RouterContext } from 'react-router';
import store from 'store';
import routes from 'routes';
import prepareData from 'helpers/prepareData';

export default (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) =>
    Promise.all(prepareData(store, renderProps)).then(() => {
      const initialState = JSON.stringify(store.getState());

      res.status(200);
      res.render(
        'index',
        { initialState }
      );
    })
  );
};
