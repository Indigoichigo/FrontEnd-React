import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamList from './components/streams/StreamList';
import StreamShow from './components/streams/StreamShow';
import StreamDelete from './components/streams/StreamDelete';
import StreamEdit from './components/streams/StreamEdit';
import StreamCreate from './components/streams/StreamCreate';
import Header from './components/Header';
import history from '../history';

const AppClient = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          {/* if there is no path, it will always visible */}
          <Header />
          <Route path="/" component={StreamList} exact />
          <Route path="/streams/create" component={StreamCreate} />
          <Route path="/streams/edit/:id" component={StreamEdit} />
          <Route path="/streams/delete/:id" component={StreamDelete} />
          <Route path="/streams/show" component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};

export default AppClient;
