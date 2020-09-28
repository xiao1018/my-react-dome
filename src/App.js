import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './assets/css/app.scss';
import Tabs from './component/tabs'
// import Home from './pages/home'
import Cart from './pages/cart'
import Category from './pages/category'
import Topic from './pages/topic'
import Mine from './pages/mine'

const home = lazy(() => import('./pages/home'))

const App = () => {
  return (
    <Router >
      <div className="app">
        <Suspense fallback={<div>...</div>}>
          <Switch>
            <Route path='/home' component={home} />
            <Route path='/category' component={Category} />
            <Route path='/cart' component={Cart} />
            <Route path='/topic' component={Topic} />
            <Route path='/mine' component={Mine} />
            <Route render={() => <Redirect to='/home' />} />
          </Switch>
        </Suspense >
        <Tabs />
      </div>
    </Router>
  )
};

export default App;
