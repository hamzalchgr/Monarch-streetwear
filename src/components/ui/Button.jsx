import clsx from 'clsx';

const Button = ({ children, variant, size, className, ...rest }) => {
  const base = "transition-all duration-200 cursor-pointer uppercase font-medium flex justify-center items-center rounded-full";
  const variants = {
    primary: "bg-primary hover:bg-secondary text-accent",
    secondary: "bg-transparent hover:bg-surface text-text-strong",
    outline: "border border-solid border-border hover:bg-surface",
  }
  const sizes= {
    sm: "w-10 h-10",
    md: "px-8 h-12",
    lg: "w-full h-12"
  }

  return (
    <button
      type="button"
      className={clsx(base, variants[variant], sizes[size], className)}
      {...rest}
    >{children}</button>
  )
}

export default Button