// Create `src/routes.js`: Defining various routes
// Here we are defining routes for home, about and contact pages like 
//
// Routes
// `/` => home page
// `/about` => about page
// `/contact` => contact page
//
// And copy/paste content to routes.js

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import HomeView from './HomeView'
import AboutView from './AboutView'
import ContactView from './ContactView'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={HomeView}/>
    <Route path="/about" component={AboutView}/>    
    <Route path="/contact" component={ContactView}/>
  </Route>
)
 