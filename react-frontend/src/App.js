import React from "react";
import "./App.css";
import ShowonMap from "./ShowonMap";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      condition: 0,
      list: []
    };
    this.sameName = this.sameName.bind(this);
    this.diffloc = this.diffloc.bind(this);
    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.append("file", this.uploadInput.files[0]);

    fetch("https://find-locations.herokuapp.com/upload", {
      method: "POST",
      body: data
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ list: data.list, condition: data.condition });
      })
      .catch(error => {
        console.log(error);
      });
  }

  diffloc(e) {
    e.preventDefault();
    var e = document.getElementById("myselects");
    var label = e.options[e.selectedIndex].text;
    var data = {
      name: label
    };
    fetch("https://find-locations.herokuapp.com/upload/diffloc", {
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ list: data.list, condition: data.condition });
      })
      .catch(error => {
        console.log(error);
      });
  }
  sameName() {
    var e = document.getElementById("myselect");
    var label = e.options[e.selectedIndex].text;
    document.getElementById("samename").innerHTML = "";
    var node = document.createElement("h1");
    var textnode = document.createTextNode(
      "You live in " +
        this.state.list[this.state.list.length - 1] +
        ", " +
        label
    );
    node.appendChild(textnode);
    document.getElementById("samename").appendChild(node);
  }

  render() {
    // var newDiv = document.createElement("div");
    // var selectHTML = "";
    // selectHTML = "<select id=myselect";
    // selectHTML += "<option selected disabled hidden>Choose here</option>"
    // var i;
    // for (i = 0; i < this.state.list.length; i = i + 1) {
    //   selectHTML +=
    //     "<option value='" + i + "'>" + this.state.list[i] + "</option>";
    // }
    // selectHTML += "</select>";
    // selectHTML += '<button type="button" onClick={this.sameName}>Submit</button>'
    // newDiv.innerHTML = selectHTML;
    // document.getElementById("samename").appendChild(newDiv);

    return (
      <div className="container">
        <div className="row heading">
          <h1> Location Finder </h1>
        </div>
        <br />
        <div className="row">
          <form onSubmit={this.handleUploadImage}>
            <input
              ref={ref => {
                this.uploadInput = ref;
              }}
              type="file"
            />
            <button type="submit">Upload</button>
          </form>
        </div>
        {/* Conditional Rendering begins */}

        {this.state.condition == 1 && (
          <div className="row heading2">
            <h1>
              You live in {this.state.list[0]} and in the state{" "}
              {this.state.list[1]}{" "}
            </h1>
            <div className="marked">
              <ShowonMap place={this.state.list[0]} />
            </div>
          </div>
        )}
        {this.state.condition == 2 && (
          <div className="row heading2" id="samename">
            <h1>Which state among the following do you live in?</h1>
           <form id="mine">
               <select id="myselect">
                <option selected disabled hidden>
                  Choose here
                </option>
                <option value="1">{this.state.list[0]}</option>
                <option value="2">{this.state.list[1]}</option>
              </select> 
              <button type="button" onClick={this.sameName}>
                Submit
              </button>
            </form>
          </div>
        )}
        {this.state.condition == 3 && (
          <div className="heading2">
            <h1>I got two locations</h1>
            <p>Where do you live among these?</p>
            <form>
              <select id="myselects">
                <option selected disabled hidden>
                  Choose here
                </option>
                <option value="1">{this.state.list[0]}</option>
                <option value="2">{this.state.list[1]}</option>
              </select>
              <button type="button" onClick={this.diffloc}>
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default App;
