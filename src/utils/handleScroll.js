import { setActiveSection } from "../store/features/activeSection/sectionSlice.js";

/**
 * Sets the active section based on the current scroll position.
 * @param {Function} dispatch - The dispatch function from the Redux store.
 */

export default function handleScroll(dispatch) {
  const sections = [
    "about",
    "education",
    "skills",
    "experience",
    "portfolio",
    "contacts",
    "feedbacks",
  ];

  for (const sectionName of sections) {
    const element = document.getElementById(sectionName);
    if (
      element &&
      element.getBoundingClientRect().top < window.innerHeight / 3
    ) {
      dispatch(setActiveSection(sectionName));
    }
  }
}
