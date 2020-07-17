import React from "react";

class Details extends React.Component {
  state = {};
  render() {
    return (
      <>
        <td>{this.props.student.firstname}</td>
        <td>{this.props.student.lastname}</td>

        <td>{this.props.student.email}</td>
        <td>{this.props.student.city}</td>
      </>
    );
  }
}

export default Details;
