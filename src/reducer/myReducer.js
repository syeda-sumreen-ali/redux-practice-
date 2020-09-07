const initialState = {
  user: {
    name: "Sumreen",
    age: 23,
    machine: "hp",
    hobbies: ["eat", "code", "love", "sleep"],
  },
  work: "what am i doing ??????",
};

export const myReducer = (state = initialState, action) => {
  // console.log(action);
  if (action.type === "SHOW_ACTION") {
    return {
      ...state,
      work: action.payload,
    };
  }

  if (action.type === "ANOTHER_NAME") {
    console.log(state.user);

    return {
      ...state,
      user: { ...state.user, name: action.payload },
    };
  }

  if (action.type === "FETCH_NAME_ONLINE") {
    return {
      ...state,
      user: { ...state.user, name: action.payload },
    };
  }
  return state;
};
