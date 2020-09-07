import React from "react";
import { connect } from "react-redux";
import { anotherName, fetchNameFromApi } from "./action/myAction";
import "./App.css";

function App(props) {
  // console.log(props);
  const { name, age, machine, hobbies } = props.myUser;
  return (
    <div className="App">
      <h1>Hello {name},</h1>
      <div>
        Your are currently {age} years old, and currently using {machine}{" "}
        machine for coding practices , your hobbies are :
        {hobbies.map((hobby, index) => (
          <p key={index}>{hobby}</p>
        ))}
      </div>
      <p> click to find what are you doing</p>
      <button onClick={() => props.myAction("coding and learning redux")}>
        {" "}
        click{" "}
      </button>
      <p>{props.work}</p>

      <p> click to change name from action creator</p>
      <button onClick={() => props.changeName("Syeda Sumreen Ali")}>
        {" "}
        click{" "}
      </button>

      <p>
        {" "}
        click to fetch name online through action creator and redux-thunk
        middleware{" "}
      </p>
      <button onClick={() => props.changeNameOnline()}> click </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myUser: state.user,
    work: state.work,
  };
};

const dispatchStateToProps = (dispatch) => {
  return {
    myAction: (message) => {
      dispatch({ type: "SHOW_ACTION", payload: message });
    },

    changeName: (name) => {
      dispatch(anotherName(name));
    },

    changeNameOnline: () => {
      dispatch(fetchNameFromApi());
    },
  };
};

export default connect(mapStateToProps, dispatchStateToProps)(App);
