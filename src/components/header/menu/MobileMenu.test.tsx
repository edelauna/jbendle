import { render, screen, fireEvent } from "@testing-library/react";
import { MobileMenu } from "./MobileMenu";
import { Section } from "../../landing-page/LandingPage";

const mockHandleOpenNavMenu = jest.fn();
const mockHandleCloseNavMenu = jest.fn();
const mockHandleMenuItemClick = jest.fn();

const mockSections: Section[] = [

  { title: "Section 1", component: <></> },
  { title: "Section 2", component: <></> },
  { title: "Section 3", component: <></> },
];

describe("MobileMenu", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the mobile menu icon and logo", () => {
    render(
      <MobileMenu
        sections={mockSections}
        handleOpenNavMenu={mockHandleOpenNavMenu}
        handleCloseNavMenu={mockHandleCloseNavMenu}
        handleMenuItemClick={mockHandleMenuItemClick}
        anchorElNav={null}
      />

    );

    expect(screen.getByRole("button", {name: "mobile menu" })).toBeInTheDocument();
    expect(screen.getByText("LOGO")).toBeInTheDocument();
  });

  it("should open the menu when the menu icon is clicked and call handleOpenNavMenu", () => {
    render(
      <MobileMenu
        sections={mockSections}
        handleOpenNavMenu={mockHandleOpenNavMenu}
        handleCloseNavMenu={mockHandleCloseNavMenu}
        handleMenuItemClick={mockHandleMenuItemClick}

        anchorElNav={null}
      />
    );

    const menuButton = screen.getByRole("button", {name: "mobile menu" });
    fireEvent.click(menuButton);

    expect(mockHandleOpenNavMenu).toHaveBeenCalled();
  });
  it("should call handleMenuItemClick when a menu item is clicked", () => {
    render(
      <MobileMenu
        sections={mockSections}
        handleOpenNavMenu={mockHandleOpenNavMenu}

        handleCloseNavMenu={mockHandleCloseNavMenu}
        handleMenuItemClick={mockHandleMenuItemClick}
        anchorElNav={document.createElement("div")}
      />
    );

    const menuItems = screen.getAllByRole("menuitem");

    fireEvent.click(menuItems[1]);

    expect(mockHandleMenuItemClick).toHaveBeenCalledWith({ _e: expect.any(Object), i: 1 });
  });
});
