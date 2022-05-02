import React from 'react';

// creating an App class, this is a react component
class Hornedbeast extends React.Component {
  // creating a render
  render() {
    return (
      <>

        <h2>{this.props.title}</h2>
        <img src={this.props.imageURL} alt={this.props.title}/>

        <p>{this.props.description}</p>
      </>
    )
  }
}

export default Hornedbeast;