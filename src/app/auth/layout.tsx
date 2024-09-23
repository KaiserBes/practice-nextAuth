const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white to-green-200">
      {children}
    </div>
  );
};

export default AuthLayout;
