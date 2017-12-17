import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PlayWidget from "./PlayWidget";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PlayWidget
          width={300}
          height={380}
          uri={'spotify:album:6fyR4wBPwLHKcRtxgd4sGh'}
          lightTheme={true}
        />
        <PlayWidget
          width={300}
          height={380}
          uri={'spotify:album:6fyR4wBPwLHKcRtxgd4sGh'}
        />
        <PlayWidget
          width={400}
          height={500}
          uri={'spotify:album:6fyR4wBPwLHKcRtxgd4sGh'}
          viewCoverArt={true}
        />
        <PlayWidget
          width={300}
          height={80}
          uri={'spotify:album:6fyR4wBPwLHKcRtxgd4sGh'}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
