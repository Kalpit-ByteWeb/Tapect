import { useState } from "react";
import { Button, Image } from "../../libs/Index";
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for mobile menu

interface DropdownItem {
  name: string;
  link: string;
}

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Dummy data for dropdowns
  const productDropdownItems: DropdownItem[] = [
    { name: "Product 1", link: "/product/1" },
    { name: "Product 2", link: "/product/2" },
    { name: "Product 3", link: "/product/3" },
  ];

  const companyDropdownItems: DropdownItem[] = [
    { name: "About Us", link: "/company/about" },
    { name: "Our Team", link: "/company/team" },
    { name: "Careers", link: "/company/careers" },
  ];

  const renderDropdown = (items: DropdownItem[]) => (
    <div className="dropdown">
      {items.map((item) => (
        <Link key={item.name} to={item.link} className="dropdown-item">
          {item.name}
        </Link>
      ))}
    </div>
  );

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="container mx-auto py-4 px-4 sm:px-0 lg:px-0">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="Logo">
            <Link to="/">
              <Image src="/Logo/Tapect-logo.svg" alt="Tapect-logo" width={100} height={100} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
              {isMobileMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>

          {/* Navigation */}
          <div className={`NavBar md:flex items-center space-x-4 ${isMobileMenuOpen ? "block absolute top-full left-0 w-full bg-white shadow-md py-4 px-6" : "hidden"}`}>
            <nav className="md:flex md:space-x-6">
              <div className="relative">
                <NavLink
                  to="/product"
                  className={({ isActive }) =>
                    isActive ? "Nav-active flex items-center" : "flex items-center"
                  }
                  onClick={closeMobileMenu}
                >
                  Products
                  <IoIosArrowDown className="ml-1" />
                </NavLink>
                {renderDropdown(productDropdownItems)}
              </div>
              <NavLink
                to="/features"
                className={({ isActive }) => (isActive ? "Nav-active" : "")}
                onClick={closeMobileMenu}
              >
                Features
              </NavLink>
              <NavLink
                to="/teams-business"
                className={({ isActive }) => (isActive ? "Nav-active" : "")}
                onClick={closeMobileMenu}
              >
                Teams & Business
              </NavLink>
              <div className="relative">
                <NavLink
                  to="/company"
                  className={({ isActive }) =>
                    isActive ? "Nav-active flex items-center" : "flex items-center"
                  }
                  onClick={closeMobileMenu}
                >
                  Company
                  <IoIosArrowDown className="ml-1" />
                </NavLink>
                {renderDropdown(companyDropdownItems)}
              </div>
            </nav>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button className="btn-primary px-3 py-2 hidden md:block" type="button">
              <Link to="/login">Log In</Link>
            </Button>
            <Link to="/cart">
              <Image src="/Icons/Cart-icon.svg" alt="Cart Icon" width={39} height={39} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;