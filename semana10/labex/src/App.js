import React from 'react'
import { HomePage } from './pages/HomePage';
import { ListTripsPage } from './pages/ListTripsPage';
import { LoginPage } from './pages/LoginPage';
import { ApplicationFormPage } from './pages/ApplicationFormPage';

import { TripeDetailsPage } from './pages/TripDetailsPage';
import { AdminHomePage } from './pages/AdminHomePage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



export default function App() {


  return (

     <div> 
  <BrowserRouter>
      <Switch>

    <Route exact path={'/'}>
      <HomePage />
      </Route>


      <Route exact path={'/trips/list'}>
      < ListTripsPage/>
      </Route>


      <Route exact path={'/login'}>
     <LoginPage />
      </Route>

      <Route exact path={'/trips/application'}>
     <ApplicationFormPage/>
      </Route>

    

      <Route exact path={'/admin/trips/list'}>
     <TripeDetailsPage/>
      </Route>

      <Route exact path={'/admin/trips/:id'}>
     <AdminHomePage/>
      </Route>

      </Switch>
      </BrowserRouter>

  </div>

  );
}