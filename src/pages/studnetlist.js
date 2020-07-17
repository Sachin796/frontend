import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Details from "../components/details";
class StudentListPage extends Component {
  state = {
    studentList: null,
  };

  componentDidMount() {
    fetch("https://codingtest-server.herokuapp.com/api/students")
      .then((res) => res.json())
      .then((data) => this.setState({ studentList: data }));
  }

  render() {
    return (
      <>
        <Header />
        {this.state.studentList != null ? (
          <>
            <table>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>City</th>
              </tr>
              <tbody>
                {this.state.studentList.data.map((student) => (
                  <>
                    <tr>
                      <Details student={student} />
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </>
        ) : null}

        <Footer />
      </>
    );
  }
}

export default StudentListPage;
