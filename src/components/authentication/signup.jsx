import { Fragment, useState } from "react";
import { Card, Button, Input } from "@nextui-org/react";
import useCreateUser from "../../hooks/userRecipes";

const Signup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    const { username, email, password, sign_up } = useCreateUser();
  return (
    <main>
      <section>
        <div className="mx-5 flex justify-between">
          <div className="ps-[20dvw] pt-[15dvh]">
            <Card className="w-[25dvw] p-5 shadow-none border-1">
              <Input
                type="text"
                className="rounded-none"
                required
                label="Username"
                ref={username}
              />
              <Input
                type="text"
                required
                className="py-[10pt] rounded"
                label="Email"
                ref={email}
              />
              <Input
                label="Password"
                ref={password}
                placeholder="Enter your password"
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                    aria-label="toggle password visibility"
                  >
                    {isVisible ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16} color={"#000000"} fill={"none"}>
                      <path d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16} color={"#000000"} fill={"none"}>
                        <path d="M22 8C22 8 18 14 12 14C6 14 2 8 2 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M15 13.5L16.5 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 11L22 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 13L4 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 13.5L7.5 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                className="w-full"
              />
              <div className="flex justify-center">
                <Button className="bg-[#ff0000] px-[8em] my-4 text-white rounded" onClick={sign_up}>
                  Sign Up
                </Button>
              </div>
            </Card>
          </div>
          <div className="">
            <img
              src="https://i.pinimg.com/564x/48/2a/57/482a5709b40093d1d5ffc035a5386f5e.jpg"
              alt=""
              className="h-[98dvh] object-cover rounded-md mt-2 me-3"
              style={{
                position : 'fixed',
                top : 0,
                right : 0,
                bottom : 0,
                zIndex : 20
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Signup;
