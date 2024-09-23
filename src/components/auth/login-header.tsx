import { cn } from "@/lib/utils";

interface LoginHeaderProps {
  label: string;
}

export const LoginHeader = ({ label }: LoginHeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 justify-center items-center">
      <h1 className={cn("text-3xl font-semibold")}>Facebook</h1>
      <p className="text-muted-foreground text-sm ">{label}</p>
    </div>
  );
};
