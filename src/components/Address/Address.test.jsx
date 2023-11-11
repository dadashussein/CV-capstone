import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Address from "./Address";
import { addressData } from "../../utils/data";

describe("Address", () => {
  it("renders the address items", () => {
    render(<Address addressData={addressData} />);
    const addressItems = screen.getAllByRole("listitem");
    expect(addressItems).toHaveLength(addressData.length);
    addressData.forEach((element, index) => {
      const titleElement = screen.getByText(element.title);
      const textElement = screen.getByText(element.text);
      expect(titleElement).toBeInTheDocument();
      expect(textElement).toBeInTheDocument();
      expect(addressItems[index]).toContainElement(titleElement);
      expect(addressItems[index]).toContainElement(textElement);
    });
  });
});
