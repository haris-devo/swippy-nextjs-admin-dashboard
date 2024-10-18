"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMail, FiEye, FiEyeOff } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { BiLock } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import LoginImage from "@/icons/LoginImage";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [focused, setFocused] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const handleFocus = (field: string) => {
    setFocused((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: string) => {
    setFocused((prev) => ({ ...prev, [field]: false }));
  };

  return (
    <div className="min-h-screen w-full">
      <div className="flex min-h-screen">
        {/* Left Side - Form */}
        <div className="w-full p-6 sm:p-8 xl:w-1/2">
          <div className="mx-auto max-w-md space-y-8">
            {/* Header */}
            <div className="text-center xl:text-left">
              <div className="mb-2 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Start your journey
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Create your account
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Join thousands of users today
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    onFocus={() => handleFocus("name")}
                    onBlur={() => handleBlur("name")}
                    className={`w-full rounded-xl border-2 bg-transparent px-4 py-3 pl-12 text-gray-900 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:text-white ${focused.name ? "border-primary" : "border-gray-200 dark:border-gray-700"}`}
                    placeholder="John Doe"
                  />
                  <BsPerson
                    className={`absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transition-colors ${focused.name ? "text-primary" : "text-gray-400"}`}
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    onFocus={() => handleFocus("email")}
                    onBlur={() => handleBlur("email")}
                    className={`w-full rounded-xl border-2 bg-transparent px-4 py-3 pl-12 text-gray-900 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:text-white ${focused.email ? "border-primary" : "border-gray-200 dark:border-gray-700"}`}
                    placeholder="john@example.com"
                  />
                  <FiMail
                    className={`absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transition-colors ${focused.email ? "text-primary" : "text-gray-400"}`}
                  />
                </div>
              </div>

              {/* Password Fields Group */}
              <div className="space-y-4">
                {/* Password Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword.password ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      onFocus={() => handleFocus("password")}
                      onBlur={() => handleBlur("password")}
                      className={`w-full rounded-xl border-2 bg-transparent px-4 py-3 pl-12 text-gray-900 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:text-white ${focused.password ? "border-primary" : "border-gray-200 dark:border-gray-700"}`}
                      placeholder="Min. 8 characters"
                    />
                    <BiLock
                      className={`absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transition-colors ${focused.password ? "text-primary" : "text-gray-400"}`}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword((prev) => ({
                          ...prev,
                          password: !prev.password,
                        }))
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword.password ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword.confirmPassword ? "text" : "password"}
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          confirmPassword: e.target.value,
                        })
                      }
                      onFocus={() => handleFocus("confirmPassword")}
                      onBlur={() => handleBlur("confirmPassword")}
                      className={`w-full rounded-xl border-2 bg-transparent px-4 py-3 pl-12 text-gray-900 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:text-white ${focused.confirmPassword ? "border-primary" : "border-gray-200 dark:border-gray-700"}`}
                      placeholder="Re-enter your password"
                    />
                    <BiLock
                      className={`absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transition-colors ${focused.confirmPassword ? "text-primary" : "text-gray-400"}`}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword((prev) => ({
                          ...prev,
                          confirmPassword: !prev.confirmPassword,
                        }))
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword.confirmPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="text-primary hover:text-primary/80"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-primary hover:text-primary/80"
                  >
                    Privacy Policy
                  </Link>
                </span>
              </div>

              {/* Sign Up Button */}
              <button
                type="submit"
                className="w-full transform rounded-xl bg-primary px-4 py-3 font-medium text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50 active:scale-95"
              >
                Create Account
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

              {/* Google Sign Up */}
              <button
                type="button"
                className="flex w-full items-center justify-center space-x-2 rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <FcGoogle className="h-5 w-5" />
                <span>Sign up with Google</span>
              </button>

              {/* Sign In Link */}
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  href="/auth/signin"
                  className="font-medium text-primary hover:text-primary/80"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="animate-fade-in-left hidden w-1/2 bg-gradient-to-br from-white to-gray-400 xl:block">
          <div className="flex h-full flex-col items-center justify-center p-12">
            <div className="mb-8 text-center">
              <h1 className="mb-4 text-4xl font-bold text-primary">
                Join Our Community
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Start your journey with thousands of other users
              </p>
            </div>
            <LoginImage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
