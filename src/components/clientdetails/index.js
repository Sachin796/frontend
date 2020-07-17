import React from "react";

class Details extends React.Component {
  state = {};
  render() {
    return (
      <>
        <td>{this.props.client.firstname}</td>
        <td>{this.props.client.lastname}</td>
      </>
    );
  }
}

export default Details;
