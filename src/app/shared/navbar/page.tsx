const NavbarPage = () => {
  return (
    <div className="container-xl ">
      <div className="">
        <nav className="p-4 sm:p-4 md:p-5 lg:p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="/images/link--thetripkartpng@2x.png"
                alt="Logo"
                className="w-[150px] sm:w-[150px] md:w-[250px] lg:w-[350px] xl:w-[400px]  h-auto"
              />
              {/* <span className="text-white text-lg font-semibold">
                Your Logo
              </span> */}
            </div>

            {/* <!-- Navigation items (right side) --> */}
            <div className="hidden lg:flex space-x-4 font-bold text-[20px] text-[#3B444F] gap-[40px]">
              <a href="#" className="">
                FLIGHT
              </a>
              <a href="#" className="text-dark">
                HOTEL
              </a>
              <a href="#" className="text-dark">
                HOLIDAYS
              </a>
              <a href="#" className="text-dark">
                EVENTS
              </a>
              <a href="#" className="text-dark">
                CAR RENTAL
              </a>
              <a href="#" className="text-dark">
                VISA
              </a>
              <a href="#" className="text-dark">
                CONTACT
              </a>
            </div>

            {/* <!-- Mobile Menu Button (visible on small screens) --> */}
            <div className="lg:hidden">
              {/* <!-- You can use an icon or any element to represent the menu button --> */}
              <button
                id="mobile-menu-button"
                className="text-black font-bold focus:outline-none"
              >
                ☰
              </button>
            </div>
          </div>
        </nav>

        {/* <!-- Mobile Menu (hidden by default) --> */}
        <div id="mobile-menu" className="lg:hidden bg-blue-500 p-4 hidden">
          <a href="#" className="block text-white py-2">
            Home
          </a>
          <a href="#" className="block text-white py-2">
            About
          </a>
          <a href="#" className="block text-white py-2">
            Services
          </a>
          <a href="#" className="block text-white py-2">
            Contact
          </a>
          <a href="#" className="block text-white py-2">
            Blog
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavbarPage;
