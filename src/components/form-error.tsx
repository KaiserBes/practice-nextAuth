import { FaExclamationTriangle } from "react-icons/fa";

interface FormErrorProps {
  message?: "string";
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;
  return (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center text-sm text-destructive gap-x-4">
      <FaExclamationTriangle className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
