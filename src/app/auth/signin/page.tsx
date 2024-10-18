"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMail, FiEye, FiEyeOff } from "react-icons/fi";
import { BiLock } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import LoginImage from "@/icons/LoginImage";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-600">
      <div className="flex h-screen overflow-hidden bg-white shadow-2xl transition-all dark:bg-gray-900">
        {/* Left Side - Image */}
        <div className="animate-fade-in-right hidden w-1/2 bg-gradient-to-br from-white to-gray-400 xl:block">
          <div className="flex h-full flex-col items-center justify-center p-12">
            <div className="mb-8 text-center">
              <h1 className="mb-4 text-4xl font-bold text-primary">Swippy</h1>
              <p className="text-gray-600">Continue your journey with us</p>
            </div>
            <LoginImage />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full p-6 sm:p-8 xl:w-1/2">
          <div className="mx-auto max-w-md space-y-8">
            {/* Header */}
            <div className="text-center xl:text-left">
              <div className="mb-2 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Start for free
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Welcome back
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Please enter your details
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setIsEmailFocused(true)}
                    onBlur={() => setIsEmailFocused(false)}
                    className={`w-full rounded-xl border-2 bg-transparent px-4 py-3 pl-12 text-gray-900 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:text-white ${isEmailFocused ? "border-primary" : "border-gray-200 dark:border-gray-700"}`}
                    placeholder="Enter your email"
                  />
                  <FiMail
                    className={`absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transition-colors ${isEmailFocused ? "text-primary" : "text-gray-400"}`}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    onFocus={() => setIsPasswordFocused(true)}
                    onBlur={() => setIsPasswordFocused(false)}
                    className={`w-full rounded-xl border-2 bg-transparent px-4 py-3 pl-12 text-gray-900 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:text-white ${isPasswordFocused ? "border-primary" : "border-gray-200 dark:border-gray-700"}`}
                    placeholder="Enter your password"
                  />
                  <BiLock
                    className={`absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transition-colors ${isPasswordFocused ? "text-primary" : "text-gray-400"}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Remember me
                  </span>
                </label>
                <Link
                  href="/auth/forgot-password"
                  className="text-sm font-medium text-primary hover:text-primary/80"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full transform rounded-xl bg-primary px-4 py-3 font-medium text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50 active:scale-95"
              >
                Sign in
              </button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500 dark:bg-gray-900 dark:text-gray-400">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Google Sign In */}
              <button
                type="button"
                className="flex w-full items-center justify-center space-x-2 rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <FcGoogle className="h-5 w-5" />
                <span>Sign in with Google</span>
              </button>

              {/* Sign Up Link */}
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                Don&apos;t have an account?{" "}
                <Link
                  href="/auth/signup"
                  className="font-medium text-primary hover:text-primary/80"
                >
                  Sign up for free
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
