import { ShoppingCart } from "lucide-react";
import React from "react";
import shoppy from "../assets/jshopyfinal.png";
import { Form, redirect, useActionData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import store from "../app/store";

const Login = () => {
  const data = useActionData();
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
    navigate("/products"); // Redirect after login
  };

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center  px-6 py-12 lg:px-8 mt-52 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Form action="/login" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>

              {data && data.error && <p>{data.error}</p>}
            </div>
          </Form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Create an account here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

export const loginData = async ({ request }) => {
  const retrievedata = await request.formData();

  const recData = {
    email: retrievedata.get("email"),
    password: retrievedata.get("password"),
  };

  console.log(recData);

  if (recData.email == "test11@gmail.com" && recData.password == "pass123") {
    store.dispatch(login());
    return redirect("/products");
  } else {
    return { error: "Invalid Credentials" };
  }
};
