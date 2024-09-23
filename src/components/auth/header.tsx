import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="bg-blue-100 flex justify-end px-5 py-2">
      <Button
        size="lg"
        className="text-right"
        variant="default"
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        Log out
      </Button>
      <p className="text-muted-foreground text-sm ">{label}</p>
    </div>
  );
};
