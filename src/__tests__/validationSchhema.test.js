import { describe, expect, it } from "vitest";
import { validationSchema } from "../utils/validationSchhema";

describe("validationSchema", () => {
  it("should validate a valid object", async () => {
    const validObject = {
      name: "JavaScript",
      range: 80,
    };
    await expect(validationSchema.validate(validObject)).resolves.toBe(
      validObject
    );
  });

  it("should throw an error for an invalid object with missing name", async () => {
    const invalidObject = {
      range: 80,
    };
    await expect(validationSchema.validate(invalidObject)).rejects.toThrow(
      "Skill name is a required field"
    );
  });

  it("should throw an error for an invalid object with invalid range", async () => {
    const invalidObject = {
      name: "JavaScript",
      range: 5,
    };
    await expect(validationSchema.validate(invalidObject)).rejects.toThrow(
      "Skill range must be greater than or equal to 10"
    );
  });
});
