import React, { Component} from 'react';
import {getItemsData} from '../middleware';
import Context from '../store/context'
import Listing from '../components/listing'

class App extends Component {
  constructor() {
    super();
    this.state = { 
      data: [], // data loaded
      error: false, // error requesting the data
      }
  }
  async componentDidMount() {
    const json = await getItemsData();
    const error = (json.length) ? false : true;
    this.setState({ data: json, error });
  }

  render() {
    return (
      <Context.Provider value={{ state: this.state }}>
        <Listing />
      </Context.Provider>
    );
  }

}

export default App;
