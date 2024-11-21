/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin";
import UseAuth from "../Components/Hooks/UseAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert

const Login = () => {
  const { login } = UseAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigator = useNavigate();

  const onSubmit = (data) => {
    login(data.email, data.password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome back!",
        });
        navigator("/");
      })
      .catch((error) => {
        console.error("Error during login:", error);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message || "Invalid email or password. Please try again.",
        });
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-8">Login</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 border border-yellow-500"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
            {...register("email", {
              required: "Email is required.",
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
            {...register("password", {
              required: "Password is required.",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long.",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg transition duration-300"
          >
            Login
          </button>
        </div>

        <div className="flex items-center my-4">
          <hr className="w-full border-gray-300" />
          <span className="px-4 text-sm text-gray-500">or</span>
          <hr className="w-full border-gray-300" />
        </div>

        {/* Google Social Login */}
        <SocialLogin />

        <div className="text-center">
          <p className="text-base text-gray-500">
            Don't have an account?{" "}
            <a
              href="/Register"
              className="text-yellow-500 font-bold hover:underline"
            >
              Register
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
