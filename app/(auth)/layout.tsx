import Image from "next/image";
import { ReactNode } from "react";
import BackgroundImage from "../../public/login_background.jpg";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src={BackgroundImage}
        alt="bacground image"
        className="hidden sm:flex sm:object-cover -z-10"
        priority
        fill
      />
      {children}
    </div>
  );
};

export default AuthLayout;
