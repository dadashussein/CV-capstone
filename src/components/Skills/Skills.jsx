import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSkills,
  getSkills,
  loadSkillsLocally,
} from "../../store/features/skills/skillsThunks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenClip, faTimes } from "@fortawesome/free-solid-svg-icons";
import AddSkills from "./AddSkills";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import "./skills.scss";

const Skills = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const { skills } = useSelector((state) => state.skills);

  const [parentForm] = useAutoAnimate();

  useEffect(() => {
    if (localStorage.getItem("skills")) {
      dispatch(loadSkillsLocally());
    } else {
      dispatch(getSkills());
    }
  }, [dispatch]);

  const handleDeleteSkill = (name) => {
    dispatch(deleteSkills(name));
  };
  return (
    <div className="skills">
      <button onClick={() => setShow(!show)} className="skills--button">
        <span>
          <FontAwesomeIcon icon={faPenClip} />
        </span>
        {show ? "Close edit" : "Open edit"}
      </button>

      <div ref={parentForm}>{show && <AddSkills />}</div>

      {skills &&
        skills.map((skill) => (
          <div className="skills__container" key={skill.id}>
            <ul className="skills__container-list">
              <li
                className="skills__container-list-item"
                style={{ width: `${skill.range}%` }}
              >
                {skill.name}
                <button onClick={() => handleDeleteSkill(skill.id)}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </li>
            </ul>
          </div>
        ))}

      <div className="skills__line-container">
        <div className="skills__line-container--bottom"></div>
        <div className="skills__line-container--degree">
          <div className="beginner">
            <div></div>
            <span>Beginner</span>
          </div>
          <div className="proficient">
            <div></div>
            <span>Proficient</span>
          </div>
          <div className="expert">
            <div></div>
            <span>Expert</span>
          </div>
          <div className="master">
            <div></div>
            <span>Master</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
