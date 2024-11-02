import { brainwave } from "../assets/";
import { navigation } from "../constants";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  const pathname = useLocation();

  return (
    <div className="fixed top-0 left-0 w-full backdrop-blur-sm bg-n-8/90 border-b lg:backdrop-blur-sm lg:bg-n-8/90 border-n-6">
      <div className="flex items-center px-5 lg:px-7.5 py-6">
        <a href="#hero" className="block w-[12rem] xl:mr-8">
          <img src={brainwave} alt="brainwave" width={190} height={40} />
        </a>
        <nav className="hidden fixed  top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent ">
          <div className="relative z-2 flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((nav) => (
              <a
                href={nav.url}
                key={nav.id}
                className={` relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  nav.onlyMobile ? "lg:hidden" : ""
                } py-6 px-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  nav.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : " lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 `}
              >
                {nav.title}
              </a>
            ))}
          </div>
        </nav>

        <a
          href=""
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New Account
        </a>

        <Button className="hidden lg:flex" href="#login">
          sign in
        </Button>
      </div>
    </div>
  );
};

export default Header;