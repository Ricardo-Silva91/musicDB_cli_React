import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {

        return (
            <div id="wrapper">
                <div id="bg"></div>
                <div id="overlay"></div>
                <div id="main">
                    <header id="header">
                        <h1>My Music Collection</h1>
                        <p>Nobody Cares...</p>
                        <nav>
                            <ul>
                            </ul>
                        </nav>
                    </header>
                    <footer id="footer">
                        <span className="copyright">&copy; BadReviews</span>
                    </footer>
                </div>
            </div>
        );

        /*

      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      );

      */
    }
}

export default App;
