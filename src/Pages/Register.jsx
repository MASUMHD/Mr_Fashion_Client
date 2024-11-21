/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin";
import UseAuth from "../Components/Hooks/UseAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = UseAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigator = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "Your account has been created successfully!",
        });
        navigator("/");
      })
      .catch((error) => {
        console.error("Error during registration:", error);
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message || "Something went wrong. Please try again.",
        });
      });
  };

  return (
    <div className="mt-0 lg:mt-10">
      <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-50">
        <h1 className="text-4xl font-bold text-center mb-8">Register</h1>
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
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Please enter a valid email.",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-600">{errors.email.message}</span>
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
              {...register("password", {
                required: "Password is required.",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
                  message:
                    "Password must be at least 8 characters long, include uppercase and lowercase letters, one number, and one special character.",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-600">{errors.password.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              {...register("confirmPassword", {
                required: "Confirm Password is required.",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match.",
              })}
            />
            {errors.confirmPassword && (
              <span className="text-red-600">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700"
            >
              Role
            </label>
            <select
              className="select select-bordered w-full mt-1"
              {...register("role", { required: "Role is required." })}
            >
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
            {errors.role && (
              <span className="text-red-600">{errors.role.message}</span>
            )}
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg transition duration-300"
            >
              Register
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
              Already have an account?{" "}
              <a
                href="/Login"
                className="text-yellow-500 font-bold hover:underline"
              >
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
