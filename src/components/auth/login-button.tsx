"use client";
import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push("/auth/login");
    console.log("LOGIN BUTTON CLICKED");
  };
  return (
    <div className="">
      <span onClick={onClick} className="cursor-pointer">
        {children}
      </span>
    </div>
  );
};

export default LoginButton;
