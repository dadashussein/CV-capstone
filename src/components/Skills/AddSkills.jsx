import { Formik, Field, Form } from "formik";
import { validationSchema } from "../../utils/validationSchhema";

import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { postSkills } from "../../store/features/skills/skillsThunks";

const AddSkills = () => {
  const dispatch = useDispatch();
  const { isLoadingAddSkill } = useSelector((state) => state.skills);

  const onSubmit = (values, actions) => {
    const data = {
      name: values.name,
      range: values.range,
    };
    dispatch(postSkills(data));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        range: "",
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isValid }) => (
        <Form className="form">
          <div className="form__name">
            <label htmlFor="name">Skill name :</label>
            <Field
              type="text"
              name="name"
              id="name"
              placeholder="Enter skill name"
              className="form__input"
            />
            {errors.name && touched.name && (
              <div className="form__error">{errors.name}</div>
            )}
          </div>

          <div className="form__range">
            <label htmlFor="range">Skill range : </label>
            <Field
              type="text"
              name="range"
              id="range"
              placeholder="Enter skill range"
              className="form__input"
            />
            {errors.range && touched.name && (
              <div className="form__error">{errors.range}</div>
            )}
          </div>

          <button disabled={!isValid} type="submit" className="form__submit">
            {isLoadingAddSkill ? (
              <ClipLoader color="#fff" size={20} />
            ) : (
              "Add skill"
            )}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddSkills;
