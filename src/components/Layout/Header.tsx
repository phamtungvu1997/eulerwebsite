import React, { useEffect, useState } from "react";
import { cn } from "@/utils/helpers";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled ? "glass hairline-b" : "bg-transparent"
      )}
    >
      <nav className="shadow-lg">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="block h-8 w-auto"
                  src="src/assets/logo.png"
                  alt="Logo"
                />
              </div>

              {/* Desktop main nav */}
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100"
                  >
                    Home
                  </a>

                  {/* Products Dropdown (desktop) */}
                  <div className="group relative">
                    <button className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100">
                      Products
                      <svg
                        className="ml-1 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        />
                      </svg>
                    </button>

                    {/* Mega Menu */}
                    <div className="invisible absolute left-0 z-50 mt-2 w-screen max-w-6xl transform rounded-lg border border-gray-200 bg-white opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100 -translate-x-1/4">
                      <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-3">
                        <div>
                          <h3 className="mb-4 text-lg font-semibold text-gray-900">Software</h3>
                          <ul className="space-y-3">
                            <li>
                              <a href="#" className="text-gray-600 hover:text-indigo-600">
                                Web Development
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-gray-600 hover:text-indigo-600">
                                Mobile Apps
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-gray-600 hover:text-indigo-600">
                                Desktop Software
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-gray-600 hover:text-indigo-600">
                                Enterprise Solutions
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-gray-600 hover:text-indigo-600">
                                API Services
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="mb-4 text-lg font-semibold text-gray-900">Hardware</h3>
                          <ul className="space-y-3">
                            <li>
                              <a href="#" className="text-gray-600 hover:text-indigo-600">
                                Laptops
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-gray-600 hover:text-indigo-600">
                                Desktops
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-gray-600 hover:text-indigo-600">
                                Tablets
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-gray-600 hover:text-indigo-600">
                                Accessories
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-gray-600 hover:text-indigo-600">
                                Networking
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="mb-4 text-lg font-semibold text-gray-900">Featured</h3>
                          <div className="rounded-lg bg-gray-100 p-4">
                            <img
                              src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt="Featured Product"
                              className="mb-3 rounded-lg"
                            />
                            <h4 className="font-medium text-gray-900">New Release</h4>
                            <p className="mb-2 text-sm text-gray-600">
                              Check out our latest product offering with advanced features.
                            </p>
                            <a
                              href="#"
                              className="text-sm font-medium text-indigo-600 hover:text-indigo-800"
                            >
                              Learn more →
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100"
                  >
                    Services
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Mobile menu button */}
              <div className="sm:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  aria-expanded={mobileMenuOpen}
                  aria-controls="mobile-menu"
                  id="mobile-menu-button"
                  onClick={() => setMobileMenuOpen((v) => !v)}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <div
          id="mobile-menu"
          className={cn("sm:hidden", mobileMenuOpen ? "block" : "hidden")}
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a
              href="#"
              className="block rounded-md bg-gray-100 px-3 py-2 text-base font-medium text-gray-900"
            >
              Home
            </a>

            {/* Mobile Products Dropdown */}
            <div className="relative">
              <button
                className="mobile-dropdown-trigger flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-base font-medium text-gray-900 hover:bg-gray-100"
                onClick={() => setMobileProductsOpen((v) => !v)}
                aria-expanded={mobileProductsOpen}
              >
                Products
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  />
                </svg>
              </button>

              <div className={cn("mobile-dropdown-content px-4 py-2", mobileProductsOpen ? "block" : "hidden")}>
                <div className="mb-4 border-l-2 border-indigo-500 pl-2">
                  <h4 className="mb-2 font-medium text-gray-900">Software</h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="block text-gray-600 hover:text-indigo-600">
                        Web Development
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block text-gray-600 hover:text-indigo-600">
                        Mobile Apps
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block text-gray-600 hover:text-indigo-600">
                        Desktop Software
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="border-l-2 border-indigo-500 pl-2">
                  <h4 className="mb-2 font-medium text-gray-900">Hardware</h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="block text-gray-600 hover:text-indigo-600">
                        Laptops
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block text-gray-600 hover:text-indigo-600">
                        Desktops
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block text-gray-600 hover:text-indigo-600">
                        Accessories
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100"
            >
              Services
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100"
            >
              About
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
