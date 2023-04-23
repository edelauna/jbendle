import { render, screen, fireEvent } from "@testing-library/react";

import { Menu } from "./Menu";
import { Section } from "../../landing-page/LandingPage";

describe("Menu component", () => {
  const sections: Section[] = [
    { title: "Home", component: <div>"home"</div> },
    { title: "About", component: <div>"about"</div> },
    { title: "Contact", component: <div>"contact</div> }
  ];

  const handleMenuItemClick = jest.fn();

  it("should render the logo and title", () => {
    render(<Menu sections={sections} handleMenuItemClick={handleMenuItemClick} />);
    expect(screen.getByText("JEN BENDLE")).toBeInTheDocument();
  });

  it("should render the menu items", () => {
    render(<Menu sections={sections} handleMenuItemClick={handleMenuItemClick} />);
    const menuItems = sections.map((section) => screen.getByText(section.title));

    expect(menuItems).toHaveLength(3);
    expect(menuItems[0]).toBeInTheDocument();
    expect(menuItems[1]).toBeInTheDocument();
    expect(menuItems[2]).toBeInTheDocument();
  });

  it("should call the handleMenuItemClick function when a menu item is clicked", () => {
    render(<Menu sections={sections} handleMenuItemClick={handleMenuItemClick} />);
    const menuItems = sections.map((section) => screen.getByText(section.title));
    fireEvent.click(menuItems[1]);
    expect(handleMenuItemClick).toHaveBeenCalled();
  });
});
