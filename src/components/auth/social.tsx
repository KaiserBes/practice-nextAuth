"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import { useSession, signIn, signOut } from "next-auth/react";

export const Social = () => {
  const { data: session } = useSession();

  return (
    <div className="flex w-full gap-x-2 items-center">
      {session ? (
        <Button
          size="lg"
          className="w-full"
          variant="outline"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Log out
        </Button>
      ) : (
        <>
          <Button
            size="lg"
            className="w-full"
            variant="outline"
            onClick={() =>
              signIn("google", {
                redirect: true,
                callbackUrl: "/",
              })
            }
          >
            <FcGoogle className="h-5 w-5" />
          </Button>
          <Button
            size="lg"
            className="w-full"
            variant="outline"
            onClick={() =>
              signIn("github", {
                redirect: true,
                callbackUrl: "/",
              })
            }
          >
            <FaGithub className="h-5 w-5" />
          </Button>
        </>
      )}
    </div>
  );
};
