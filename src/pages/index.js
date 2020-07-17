import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ClientDetails from "../components/clientdetails";
class Mainpage extends Component {
  constructor() {
    super();
    this.state = {
      clientList: null,
      filteredList: null,
      inputValue: "",
    };

    this.searchClickevent = this.searchClickevent.bind(this);
  }

  searchClickevent(e) {
    e.preventDefault();
    var newdata;
    if (document.getElementById("option").value == "firstname") {
      newdata = this.state.clientList.data.filter((client) => {
        return client.firstname.toLowerCase().includes(e.target.value);
      });
    } else if (document.getElementById("option").value == "lastname") {
      newdata = this.state.clientList.data.filter((client) => {
        return client.lastname.toLowerCase().includes(e.target.value);
      });
    }

    this.setState({ filteredList: newdata });
  }

  componentDidMount() {
    fetch("https://codingtest-server.herokuapp.com/api/clients")
      .then((res) => res.json())
      .then((data) => this.setState({ clientList: data }));
  }

  render() {
    return (
      <>
        <Header />
        <div style={{ marginLeft: "40%", marginTop: "10%" }}>
          <input
            type="text"
            onChange={this.searchClickevent}
            placeholder="Search"
          ></input>
          <select name="option" id="option">
            <option value="firstname">FirstName</option>
            <option value="lastname">LastName</option>
          </select>
        </div>
        <div style={{ marginLeft: "45%", marginTop: "50px" }}>
          {this.state.filteredList === null ? (
            <>
              {this.state.clientList != null ? (
                <>
                  <table>
                    <tr>
                      <th>Firstname</th>
                      <th>Lastname</th>
                    </tr>
                    <tbody>
                      {this.state.clientList.data.map((client) => (
                        <>
                          <tr>
                            <ClientDetails client={client} />
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </>
              ) : null}
            </>
          ) : (
            <>
              <table>
                <tr>
                  <th>Firstname</th>
                  <th>Lastname</th>
                </tr>
                <tbody>
                  {this.state.filteredList.map((client) => (
                    <>
                      <tr>
                        <ClientDetails client={client} />
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
        <Footer />
      </>
    );
  }
}

export default Mainpage;
