import React from 'react';
import Test from './Test';


export default class LifeCycle extends React.Component{
    constructor(){
        super();
        console.log('constructor');
        this.state = {favoritecolor: "yellow",togg:true};

    }
    static getDerivedStateFromProps(props,state){
        console.log('getDerivedStateFromProps');
        return {favoritecolor:state.favoritecolor}
    }
    changeColor = () => {
        this.setState({favoritecolor: "green",togg:false});
      }

      shouldComponentUpdate(nextProps,nextState){
        
          console.log(nextState.favoritecolor,this.state.favoritecolor);
          if(nextState.favoritecolor !== this.state.favoritecolor)
          return true;
          else return false;
      }
    render(){
let header;
        if(this.state.togg){
            header= <Test/>;
        }
        return(<div>Helloa{this.state.favoritecolor}
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>

      <div id="div1"></div>
        <div id="div2"></div>
        {header}
        </div>)
        
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
        "Before the update, the favorite was " + prevState.favoritecolor;
      }
      componentDidUpdate() {
       
      }
      
    componentDidMount(){
        console.log('componentDidMount');
        this.setState({favoritecolor:'brown'})
    }
    componentDidUpdate(){
        console.log('inside componentDidUpdate');
        this.setState({favoritecolor:'gray'})
        document.getElementById("div2").innerHTML =
        "The updated favorite is " + this.state.favoritecolor;

    }
    
}