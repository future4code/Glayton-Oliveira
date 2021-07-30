import React from "react"
import axios from "axios"
import styled from 'styled-components'

const Centralizar = styled.div`
display: inline



`


export default class App extends React.Component{

  state= {
    missions: []
  }

  componentDidMount() {
    this.getMissions()
  }

  getMissions = () => {
    axios.get("https://api.spacexdata.com/v3/missions")
    .then((res)=> {
      console.log(res.data)
      this.setState({missions: res.data})
    })
    .catch((err)=> {
      console.log(err)
    })
  }

  render(){

      const missionsList = this.state.missions.map((mission)=>{
        return (
          <div key={mission.mission_id}>
            <p>nome:{mission.mission_name}</p>
            <p>fabricante:{mission.manufacturers.map((manufacturer) => <p>{manufacturer}</p>  )}</p>
            <a> href={mission.wikipedia} Link para wikpédia</a>
            <hr/>

          </div>
        )
      })
      return(
      <div className="App">
        <Centralizar>
      <h1>Missões da spaceX </h1>
      {missionsList}
      </Centralizar>
      </div>


     )
  }
}
