import React from "react";
import './App.css';
import BandsList from "./components/BandsList";
import ModalDialog from "./components/Modal";
import Navbar from "./components/Navbar";

class App extends React.Component {
  state = {
    bands:[],
    currentBand:{},
    show:false,
  }

  handleClose =()=>{
    this.setState({show:false})
  }

  handleShow = ()=>{
    this.setState({show:true})
  }

  changeCurrentBand = (band)=>{

   this.setState({currentBand:band})
   this.handleShow();
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
     <BandsList bands={this.state.bands} changeCurrentBand={this.changeCurrentBand}/>
     <ModalDialog handleClose={this.handleClose} show={this.state.show} currentBand={this.state.currentBand}/>
     </>
    )
  }
}
export default App;
