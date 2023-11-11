import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Skill name is a required field"),

  range: Yup.number()
    .required("Skill range is a required field")
    .typeError("Skill range must be a 'number' type")
    .min(10, "Skill range must be greater than or equal to 10")
    .max(100, "Skill range must be less than or equal to 100"),
});
