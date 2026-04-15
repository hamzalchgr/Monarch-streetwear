import { Link } from "react-router-dom";
import Logo from "../../components/ui/Logo";
import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import clsx from "clsx";

const Auth = () => {
  const [joined, setJoined] = useState(true);

  return (
    <div className="px-4 py-20 max-w-[460px] mx-auto flex flex-col gap-6">
      <Link to="/">
        <Logo type="icon" className="h-10 w-fit" />
      </Link>

      <h1 className="font-medium text-3xl">
        Now let's make you a Monarch Member.
      </h1>

      <div className="font-medium flex ">
        <button
          type="button"
          aria-label="login form"
          className={clsx(
            "cursor-pointer uppercase w-full h-12 transition-all duration-200 hover:bg-surface",
            joined && "border-b-2 border-primary",
          )}
          onClick={() => setJoined(true)}
        >
          Login
        </button>
        <button
          type="button"
          aria-label="registering form"
          className={clsx(
            "cursor-pointer uppercase w-full h-12 transition-all duration-200 hover:bg-surface",
            !joined && "border-b-2 border-primary",
          )}
          onClick={() => setJoined(false)}
        >
          Join us
        </button>
      </div>

      {joined ? <LoginForm /> : <RegisterForm />}
    </div>
  );
};

export default Auth;
