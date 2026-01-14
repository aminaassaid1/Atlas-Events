import { useState, useEffect } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const navItems = [
  { name: "Accueil", href: "/", scrollTo: "accueil" },
  { name: "À Propos", href: "/about" },
  {
    name: "Services",
    href: "/services",
    subItems: [
      { name: "Tous les services", href: "/services" },
      { name: "Événements", href: "/services/evenements" },
      { name: "Vacances", href: "/services/vacances" },
      { name: "Activités", href: "/services/activites" },
      { name: "Hébergement", href: "/services/hebergement" },
      { name: "Spa", href: "/services/spa" },
      { name: "Transport", href: "/services/transport" },
    ]
  },
  { name: "Activités", href: "/activites" },
  { name: "Boutique", href: "/boutique" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.scrollTo) {
      if (location.pathname === "/") {
        scrollToSection(item.scrollTo);
      } else {
        navigate("/");
        setTimeout(() => scrollToSection(item.scrollTo!), 100);
      }
    }
  };

  return (
    <header
      className={`site-header sticky-header absolute lg:left-8.75 lg:right-8.75 lg:top-8.75 left-0 right-0 top-0 duration-500 z-50 transition-all ${isScrolled
        ? "!fixed animate-header-scroll-animation bg-primary rounded-b-3xl !top-0"
        : ""
        }`}
    >
      <div className="main-bar-wraper">
        <div className="w-full lg:min-h-30 min-h-20 lg:ps-8.75 px-4 lg:pe-13.75 duration-500 rounded-5xl flex items-center justify-between">
          <div className="flex relative w-full">
            {/* Logo */}
            <div className="flex items-center relative z-9 h-20 lg:w-44 w-30">
              <Link to="/" className="table-cell align-middle">
                <img
                  src={logo}
                  alt="Atlas For Events"
                  className="object-contain duration-500 h-12"
                />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xmenu-toggler lg:hidden float-right mt-4.5 mb-4 md:ml-7 ml-4 size-11 bg-dark-600 relative cursor-pointer max-lg:order-1"
              type="button"
            >
              <span className={`block absolute left-2.5 h-0.5 rounded-px bg-white duration-300 top-3.25 w-5.5 ${isMobileMenuOpen ? 'rotate-45 top-5.5' : ''}`}></span>
              <span className={`block absolute left-2.5 h-0.5 rounded-px bg-white duration-0 top-5.5 w-6.25 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block absolute left-2.5 h-0.5 rounded-px bg-white duration-300 top-8 w-4 ${isMobileMenuOpen ? '-rotate-45 top-5.5 w-5.5' : ''}`}></span>
            </button>

            {/* Mobile Menu Overlay */}
            <div className={`lg:hidden fixed top-0 left-0 bg-black size-full duration-300 z-50 ${isMobileMenuOpen ? 'opacity-50 visible' : 'opacity-0 invisible pointer-events-none'}`} onClick={() => setIsMobileMenuOpen(false)}></div>

            {/* Desktop & Mobile Navigation */}
            <div className={`flex lg:justify-center lg:basis-auto lg:grow max-lg:flex-col justify-start font-base max-lg:fixed max-lg:h-screen max-lg:px-5 max-lg:top-0 max-lg:z-[60] max-lg:bg-white max-lg:w-72 max-lg:overflow-auto max-lg:duration-700 header-nav custom-scroll ${isMobileMenuOpen ? 'max-lg:left-0' : 'max-lg:-left-75'}`}>
              {/* Mobile Logo */}
              <div className="flex items-center relative z-9 py-6.25 lg:hidden">
                <Link to="/" className="table-cell align-middle">
                  <img
                    src={logo}
                    alt="Atlas For Events"
                    className="object-contain duration-500 h-12"
                  />
                </Link>
              </div>

              {/* Navigation Items */}
              <ul className="lg:flex flex-wrap navbar-nav">
                {navItems.map((item) => {
                  // Item with dropdown
                  if ('subItems' in item && item.subItems) {
                    return (
                      <li key={item.name} className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
                        <button
                          onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                          className={`lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block flex items-center justify-between w-full text-lg font-medium transition-colors duration-300 ${isScrolled ? "lg:text-white text-primary hover:text-secondary" : "lg:text-white text-primary hover:text-secondary"
                            }`}
                        >
                          <span className="inline-block">{item.name}</span>
                          <ChevronDown className={`lg:hidden h-4 w-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Dropdown Menu */}
                        <ul className={`lg:absolute bg-white lg:rounded-xxl block lg:left-0 max-lg:border-t max-lg:border-gray-200 w-full lg:w-55 z-10 mt-0 text-left duration-500 lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0 ${openDropdown === item.name ? 'max-lg:block' : 'max-lg:hidden'} lg:opacity-0 lg:invisible lg:translate-y-10`}>
                          {item.subItems.map((subItem) => (
                            <li key={subItem.name} className="relative border-b border-black/5">
                              <Link
                                to={subItem.href}
                                className="block relative text-sm text-primary font-semibold py-3 lg:px-5 duration-500 hover:text-primary hover:pl-6.25"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <span>{subItem.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  }

                  // Item with scroll behavior
                  if (item.scrollTo) {
                    return (
                      <li key={item.name} className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative">
                        <button
                          onClick={() => {
                            handleNavClick(item);
                            setIsMobileMenuOpen(false);
                          }}
                          className={`lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium transition-colors duration-300 ${isScrolled ? "lg:text-white text-primary hover:text-secondary" : "lg:text-white text-primary hover:text-secondary"
                            }`}
                        >
                          <span className="inline-block">{item.name}</span>
                        </button>
                      </li>
                    );
                  }

                  // Regular link
                  return (
                    <li key={item.name} className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative">
                      <Link
                        to={item.href}
                        className={`lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium transition-colors duration-300 ${isScrolled ? "lg:text-white text-primary hover:text-secondary" : "lg:text-white text-primary hover:text-secondary"
                          }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="inline-block">{item.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Mobile Social Links */}
              <div className="lg:hidden block max-lg:p-5 text-center mt-auto">
                <ul>
                  <li className="inline-block mx-0.5">
                    <a className="size-10 !leading-10 border border-black/10 text-center text-primary" target="_blank" href="https://www.facebook.com">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="inline-block mx-0.5">
                    <a className="size-10 !leading-10 border border-black/10 text-center text-primary" target="_blank" href="https://twitter.com">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="inline-block mx-0.5">
                    <a className="size-10 !leading-10 border border-black/10 text-center text-primary" target="_blank" href="https://www.instagram.com">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side - Search */}
            <div className="flex lg:justify-end lg:items-center z-9 h-20 xl:pl-8 max-lg:ms-auto">
              <div className="flex items-center">
                <ul className="ml-5 flex items-center -mr-2.5">
                  <li className="inline-block">
                    <button
                      type="button"
                      className={`flex items-center justify-center size-14 px-4 cursor-pointer transition-colors ${isScrolled ? "text-white" : "text-primary"
                        }`}
                    >
                      <Search className="h-5 w-5" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
