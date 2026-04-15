import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { useState } from "react";
import Checkbox from "../../components/ui/Checkbox";

const RegisterForm = () => {
  const [checked, setChecked] = useState(true);

  return (
    <form action="" className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-4">
        <Input type="text" id="first-name" label="First name (Required)" />
        <Input type="text" id="last-name" label="last name (Required)" />
      </div>

      <Input type="email" id="email" label="email (Required)" />
      <Input type="password" id="password" label="Password (Required)" />

      <Checkbox
        checked={checked}
        setChecked={setChecked}
        label="Add me to the monarch mailing list"
      />

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

      <Button variant="primary" size="lg" type="submit">
        create accounte
      </Button>
    </form>
  );
};

export default RegisterForm;
