/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
            {...register("email")}
          />
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
            {...register("password")}
          />
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg  transition duration-300"
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
