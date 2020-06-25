import React, { Component } from 'react';
import DataStreamer, { ServerRespond } from './DataStreamer';
import Graph from './Graph';
import './App.css';

/**
 * State declaration for <App />
 */

 /* adding boolean var to interface*/
interface IState {
  data: ServerRespond[],
  showGraph:boolean,
}

/**
 * The parent element of the react app.
 * It renders title, button and Graph react element.
 */
class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      // data saves the server responds.
      // We use this state to parse data down to the child element (Graph) as element property
      data: [],
      showGraph:false,
    };  
     /*  set the bool var to false to avoid render the graph untill user clicks */
  }

  /**
   * Render Graph react component with state.data parse as property data
   */
  renderGraph() {
   /* checking if user click the button or not if click we render the graph else not */
    if(this.state.showGraph)
    return (<Graph data={this.state.data}/>)
  }

  /**
   * Get new data from server and update the state with the new data
   */
  getDataFromServer() {
    /* set a var to zero for counting purpose*/
    let i=0;
    /* setting interval to call function getData continuously*/

    const interval=setInterval(() =>{
    DataStreamer.getData((serverResponds: ServerRespond[]) => {
      // setting data to serverResponds and set true to showGraph
      this.setState({ data:serverResponds,showGraph:true, });
    });
    i+=1;
    if(i>1000)
    {
     /* clear the interval after 1000ms using interval id */
      clearInterval(interval);
    }
    },100);
    /* calling getData function for every 100ms */
  }

  /**
   * Render the App react component
   */
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Bank & Merge Co Task 2
        </header>
        <div className="App-content">
          <button className="btn btn-primary Stream-button"
            // when button is click, our react app tries to request
            // new data from the server.
            // As part of your task, update the getDataFromServer() function
            // to keep requesting the data every 100ms until the app is closed
            // or the server does not return anymore data.
            onClick={() => {this.getDataFromServer()}}>
            Start Streaming Data
          </button>
          <div className="Graph">
            {this.renderGraph()}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
