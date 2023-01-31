import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const formSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please type in an email")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please type a valid email"
    ),
  password: Yup.string()
    .required("Please type a password")
    .min(6, "Password length should be at least 6 characters"),

  cPassword: Yup.string()
    .min(6, "Password length should be at least 6 characters")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
});
const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });
  const submitHandler = async (e) => {
    const res = await fetch("http://127.0.0.1:5000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: e.email, password: e.password }),
    });
    if (res.ok) navigate("/login");
    const data = await res.json();
    if (res.ok === false && data.msg)
      setError("fetchError", { message: data.msg });
  };
  return (
    <div className="bg-darkBlue min-h-screen flex justify-center items-center">
      <div
        className={`bg-login w-[min(320px,_80%)] flex flex-col rounded-lg  h-[370px]`}
      >
        <p className="text-white font-light text-xl pl-6 py-6">Sign Up</p>
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="text-white text-xs font-light w-[min(279px,_90%)] h-[220px]  flex flex-col gap-4 pl-6"
        >
          <div className="h-[50px] flex flex-col gap-4">
            <input
              {...register("email")}
              className={`w-full border-b-gray-500 border-b-2 bg-login focus:bg-login focus:outline-none`}
              type="email"
              placeholder="Email address"
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (
                <p className="text-rose-500">{message}</p>
              )}
            />
          </div>
          <div className="h-[50px] flex flex-col gap-4">
            <input
              className={`w-full border-b-gray-500 border-b-2 bg-login focus:outline-none`}
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => (
                <p className="text-rose-500">{message}</p>
              )}
            />
          </div>
          <div className="h-[50px] flex flex-col gap-4">
            <input
              className={`w-full border-b-gray-500 border-b-2 bg-login focus:outline-none`}
              type="Password"
              placeholder="Repeat Password"
              {...register("cPassword")}
            />
            <ErrorMessage
              errors={errors}
              name="cPassword"
              render={({ message }) => (
                <p className="text-rose-500">{message}</p>
              )}
            />
          </div>
          <button
            className={`cursor-pointer  p-4 bg-rose-600 rounded-md`}
            type="submit"
          >
            Create an account
          </button>
          {errors.fetchError && (
            <p className="text-rose-500">{errors.fetchError?.message}</p>
          )}
        </form>
        <div className="flex gap-2 mt-auto mb-6 text-xs mx-auto">
          <p className=" text-gray-500">Already have an account?</p>
          <a href="/login" className="cursor-pointer text-rose-500 font-medium">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
