import RegisterForm from "@/components/registerForm/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center pb-25">
      <div className="w-125 bg-(--bgSoft) p-12.5 flex flex-col text-center gap-7.5 rounded-[15px]">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;