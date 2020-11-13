const { createSlice } = require("@reduxjs/toolkit");

const rootSlice = createSlice({
  name: "root",
  initialState: {
      date: "",
      name: "",
      county: "",
      challenge: "",
      gender: "",
      race: "",
      ethnicity:"",
      comment: ""
  },
  reducers: {
    submitDate: (state, action) => {state.comment = action.payload},
    submitName: (state, action) => {state.name = action.payload},
    submitCounty: (state, action) => {state.county = action.payload},
    submitChallenge: (state, action) => {state.challenge = action.payload},
    submitGender: (state, action) => {state.gender = action.payload},
    submitRace: (state, action) => {state.race = action.payload},
    submitEthnicity: (state, action) => {state.ethnicity = action.payload},
    submitComment: (state, action) => {state.comment = action.payload}

  },
});

export const reducer = rootSlice.reducer

export const {submitName, submitDate, submitCounty, submitChallenge, submitGender, submitRace, submitEthnicity, submitComment} = rootSlice.actions