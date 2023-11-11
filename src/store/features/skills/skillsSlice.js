import { createSlice } from "@reduxjs/toolkit";
import { deleteSkills, getSkills, postSkills } from "./skillsThunks";

const initialState = {
  skills: [],
  isLoading: false,
  isLoadingAddSkill: false,
  isLoadingUpdateSkill: false,
  error: null,
};

export const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSkills.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSkills.fulfilled, (state, action) => {
        state.skills = action.payload;
        state.isLoading = false;
      })
      .addCase(getSkills.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(postSkills.pending, (state) => {
        state.isLoadingAddSkill = true;
      })
      .addCase(postSkills.fulfilled, (state, action) => {
        state.skills.push(action.payload);
        state.isLoadingAddSkill = false;
        const skillsLocally = JSON.parse(
          localStorage.getItem("skills") || "[]"
        );
        skillsLocally.push(action.payload);
        localStorage.setItem("skills", JSON.stringify(skillsLocally));
      })
      .addCase(postSkills.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(deleteSkills.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteSkills.fulfilled, (state, action) => {
        state.skills = state.skills.filter(
          (skill) => skill.id !== action.payload
        );
        state.isLoading = false;
        const skillsLocally = JSON.parse(
          localStorage.getItem("skills") || "[]"
        );
        const deletedSkillIndex = skillsLocally.findIndex(
          (skill) => skill.id === action.payload
        );
        if (deletedSkillIndex !== -1) {
          skillsLocally.splice(deletedSkillIndex, 1);
          localStorage.setItem("skills", JSON.stringify(skillsLocally));
        }
      })
      .addCase(deleteSkills.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export default skillsSlice.reducer;
