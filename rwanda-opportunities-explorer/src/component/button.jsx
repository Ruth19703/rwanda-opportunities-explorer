function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
}) {
  const styles = {
    primary: "bg-blue-700 text-white hover:bg-blue-800",
    secondary: "bg-slate-200 text-slate-800 hover:bg-slate-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-blue-700 text-blue-700 hover:bg-blue-50",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`rounded-lg px-4 py-2 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-50 ${styles[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;