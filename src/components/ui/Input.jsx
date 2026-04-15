const Input = ({ type, id, label }) => {
  return (
    <label
      htmlFor={id}
      className="flex flex-col gap-1.5 text-sm font-medium uppercase text-text-muted"
    >
      {label}
      <input id={id} type={type} placeholder="" required />
    </label>
  );
};

export default Input;
