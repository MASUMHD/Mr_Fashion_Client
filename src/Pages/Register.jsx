/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Enter your password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
              {...register("confirmPassword", {
                required: true,
                validate: (value) => {
                  if (watch("password") != value) {
                    return "Passwords do not match";
                  }
                },
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
              required
              {...register("role")}
            >
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg  transition duration-300"
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
              Don't have an account?{" "}
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
