export const anotherName = (name) => {
  // action creator is an action that returns object contain type and payload
  return {
    type: "ANOTHER_NAME",
    payload: name,
  };
};

// export const fetchNameFromApi = () => {
//   return (dispatch) => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((res2) =>
//         dispatch({
//           type: "FETCH_NAME_ONLINE",
//           payload: res2[0].name,
//         })
//       )
//       .catch((err) => console.log(err));
//   };
// };

//async method

export const fetchNameFromApi = () => {
  return async (dispatch) => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const res2 = await data.json();
    dispatch({
      type: "FETCH_NAME_ONLINE",
      payload: res2[0].name,
    });
  };
};
