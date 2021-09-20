import React from "react";
import './App.css';
import BandsList from "./components/BandsList";
import Navbar from "./components/Navbar";

class App extends React.Component {
  state = {
    bands:[]
  }

  componentDidMount(){
    fetch('https://raw.githubusercontent.com/Danilovesovic/bands/master/bands_with_id.json')
    .then(res=>{
      return res.json();
    })
    .then(data=>{
      this.setState({bands:data})
    })
  }
  render(){
    return(
      <>
     <Navbar/>
     <BandsList bands={this.state.bands}/>
     </>
    )
  }
}
export default App;
