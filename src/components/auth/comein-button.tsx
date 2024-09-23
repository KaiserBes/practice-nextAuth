"use client";
import { useRouter } from "next/navigation";

interface ComeInButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const ComeInButton = ({
  children,
  mode = "redirect",
  asChild,
}: ComeInButtonProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push("/page");
  };
  return (
    <div className="">
      <span onClick={onClick} className="cursor-pointer">
        {children}
      </span>
    </div>
  );
};

export default ComeInButton;
