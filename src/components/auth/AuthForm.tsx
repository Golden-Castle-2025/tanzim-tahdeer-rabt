
import { useState } from "react";
import LoginForm from "./forms/LoginForm";
import RegisterForm from "./forms/RegisterForm";
import ResetPasswordForm from "./forms/ResetPasswordForm";

interface AuthFormProps {
  isLogin: boolean;
}

const AuthForm = ({ isLogin }: AuthFormProps) => {
  const [showResetForm, setShowResetForm] = useState(false);

  if (showResetForm) {
    return <ResetPasswordForm onBack={() => setShowResetForm(false)} />;
  }

  return isLogin ? (
    <LoginForm onShowResetForm={() => setShowResetForm(true)} />
  ) : (
    <RegisterForm />
  );
};

export default AuthForm;
