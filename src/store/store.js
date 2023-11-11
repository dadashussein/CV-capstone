import { configureStore } from "@reduxjs/toolkit";
import educationReducer from "./features/education/educationSlice";
import skillsReducer from "./features/skills/skillsSlice";
import sectionReducer from "./features/activeSection/sectionSlice";


export const store = configureStore({
  reducer: {
    education: educationReducer,
    skills: skillsReducer,
    section : sectionReducer,
  },
});
