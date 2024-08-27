import { Button } from "@nextui-org/react";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between mx-5 lg:mx-10 py-4">
        <div className="logo">Logo Here</div>
        <div className="flex gap-5 sm-">
          <ul className="list-none hidden lg:flex gap-5 mt-3">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
          </ul>
        </div>
        <div className="lg:flex gap-3 hidden ">
            <Button className="rounded-full px-10">Sign in</Button>
            <Button color="primary" className="px-10 rounded-full">
              Sign Up
            </Button>
          </div>
        <div className="lg:hidden">
          <Button className="bg-[white]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={16}
              height={16}
              color={"black"}
              fill={"none"}
            >
              <path
                d="M4 5L20 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12L20 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 19L20 19"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
