"use client";
import { LoginButton } from "@/components/auth/login-button";
import { Button } from "../components/ui/button";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { Header } from "@/components/auth/header";
import ComeInButton from "@/components/auth/comein-button";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="">
      <Header label="" />
      <main className="flex h-[100vh] flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-100 to-blue-600">
        <div className="space-x-6 text-center">
          <h1
            className={cn("text-6xl font-semibold text-white drop-shadow-md")}
          >
            🔐 Facebook
          </h1>
          <p className="text-white text-lg mt-4">
            Simple authentication service
          </p>
          <div className="">
            {session ? (
              <ComeInButton>
                <Button className="mt-4">Come in</Button>
              </ComeInButton>
            ) : (
              <LoginButton>
                <Button className="mt-4">Sign in</Button>
              </LoginButton>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
