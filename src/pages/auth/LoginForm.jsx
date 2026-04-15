import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { useState } from "react";
import Checkbox from "../../components/ui/Checkbox";

const LoginForm = () => {
  const [checked, setChecked] = useState(false);

  return (
    <form action="" className="flex flex-col gap-6">
      <Input type="email" id="email" label="Email (Required)" />

      <Input type="password" id="password" label="Password (Required)" />

      <Checkbox
        checked={checked}
        setChecked={setChecked}
        label="Remember me on this computer"
      />

      <Button variant="primary" size="lg" type="submit">
        login
      </Button>

      <p className="text-sm uppercase">
        By continuing, I confirm that I have read and accept the{" "}
        <Link className="nav-link" to="/terms">
          Terms and Conditions
        </Link>
        . and the{" "}
        <Link className="nav-link" to="/policy">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
};

export default LoginForm;
