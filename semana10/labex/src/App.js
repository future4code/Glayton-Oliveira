import React from "react"
import HomePage from "./Pages/HomePage"
import ListTripsPage from "./Pages/ListTripsPage"
import { BrowserRouter, Switch, Route } from "react-router-dom"



export default function App(){


  return(
    <BrowserRouter>
   <Switch>
    
    <Route exact patch={"/"}>
    <HomePage/>
    </Route>

    <Route exact patch={"/viagem"}>
    <ListTripsPage/>
    </Route>

    <Route exact patch={""}>
    error
    </Route>

    </Switch>
    </BrowserRouter>
  )
}