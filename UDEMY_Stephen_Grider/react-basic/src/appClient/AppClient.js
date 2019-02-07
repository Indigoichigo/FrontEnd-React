import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamList from './components/streams/StreamList';
import StreamShow from './components/streams/StreamShow';
import StreamDelete from './components/streams/StreamDelete';
import StreamEdit from './components/streams/StreamEdit';
import StreamCreate from './components/streams/StreamCreate';
import Header from './components/Header';

const AppClient = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          {/* if there is no path, it will always visible */}
          <Header />
          <Route path="/" component={StreamList} exact />
          <Route path="/stream/create" component={StreamCreate} />
          <Route path="/stream/edit" component={StreamEdit} />
          <Route path="/stream/delete" component={StreamDelete} />
          <Route path="/stream/show" component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default AppClient;
