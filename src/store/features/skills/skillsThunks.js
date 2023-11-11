import { createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch skills from the API
export const getSkills = createAsyncThunk("getSkills", async () => {
  const response = await fetch("api/skills");
  const data = await response.json();
  return data;
});

// Async thunk to post a new skill to the API
export const postSkills = createAsyncThunk("postSkills", async (newSkill) => {
  const response = await fetch("api/skills", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newSkill),
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }
});

// Async thunk to delete a skill from the API
export const deleteSkills = createAsyncThunk(
  "deleteSkills",
  async (skillId) => {
    const response = await fetch(`api/skills?id=${skillId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      return skillId;
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
  }
);

// Async thunk to load skills locally from localStorage
export const loadSkillsLocally = createAsyncThunk(
  "skills/loadSkillsLocally",
  async (_, { dispatch }) => {
    const skills = JSON.parse(localStorage.getItem("skills"));
    if (skills) {
      dispatch(getSkills.fulfilled(skills));
    }
  }
);
