import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1>Layout</h1>
      {children}
    </div>
  );
};

export default AuthLayout;
