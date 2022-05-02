import './App.css';
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

// creating an App class, this is a react component
class App extends React.Component {
  // creating a render which will render whatever we return to the div/page
  // function that is going to build out what we ask it to return(html or JSX)
  render() {
    return (
      <>
        <Header />
        <h1>similar to body</h1>
        <Main />
        <Footer />
      </>
    )
  }
}

export default App;
