import React from 'react';
import Homepage from './Homepage';

const bestPictureWinners = [{name: 'Wings', releaseYear: '1927'}, {name: 'The Broadway Melody', releaseYear: 1928},  {name: 'All Quiet On the Western Front', releaseYear: 1930} ]

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>High-level app template.</h1>
        <Homepage bestPictureWinners={bestPictureWinners}/>
      </div>
    );
  }
}

export default App;
