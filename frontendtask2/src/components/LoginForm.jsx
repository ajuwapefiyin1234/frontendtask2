import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Mail, Lock, User, ArrowLeft } from 'lucide-react';

// --- ZOD SCHEMAS (Validation Rules) ---
// Login form validation schema using Zod
// Defines the structure and validation rules for login data
const loginSchema = z.object({
  email: z.string().email("Invalid email address"), // Must be a valid email format
  password: z.string().min(1, "Password is required"), // Must not be empty
});

// Signup form validation schema using Zod
// Defines the structure and validation rules for signup data
const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"), // Must be at least 2 characters
  email: z.string().email("Invalid email address"), // Must be a valid email format
  password: z.string().min(6, "Password must be at least 6 characters"), // Must be at least 6 characters
});

/**
 * LoginForm Component
 * Handles user login and signup with form validation
 * This is a separate component to keep App.jsx clean for routing
 */
export default function LoginForm() {
  // State to toggle between login and signup forms
  const [isLogin, setIsLogin] = useState(true);
  // State to manage loading state during form submission
  const [loading, setLoading] = useState(false);

  // --- LOGIN FORM SETUP ---
  // Initialize React Hook Form for login with Zod validation
  const {
    register: registerLogin, // Function to register input fields
    handleSubmit: handleLoginSubmit, // Function to handle form submission
    formState: { errors: loginErrors }, // Object containing form validation errors
  } = useForm({
    resolver: zodResolver(loginSchema), // Connect Zod schema to React Hook Form
  });

  /**
   * Login submission handler
   * Simulates a login request with a 1-second delay and displays a success alert
   * @param {Object} data - Form data containing email and password
   */
  const onLogin = (data) => {
    setLoading(true); // Show loading state
    setTimeout(() => {
      setLoading(false); // Hide loading state
      alert("Login Successful!"); // Show success message (replace with actual login logic)
    }, 1000); // Simulate API call delay
  };

  // --- SIGNUP FORM SETUP ---
  // Initialize React Hook Form for signup with Zod validation
  const {
    register: registerSignup, // Function to register input fields
    handleSubmit: handleSignupSubmit, // Function to handle form submission
    formState: { errors: signupErrors }, // Object containing form validation errors
  } = useForm({
    resolver: zodResolver(signupSchema), // Connect Zod schema to React Hook Form
  });

  /**
   * Signup submission handler
   * Simulates a signup request with a 1-second delay and displays a success alert
   */
  const onSignup = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Account Created!");
    }, 1000);
  };

  return (
    // Main container: Full screen height with centered content and light gray background
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-white p-8 pb-4">
          {/* Back to Landing Button */}
          <button 
            onClick={() => window.location.href = '/'}
            className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </button>
          
          {/* Dynamic title based on current form mode */}
          <h1 className="text-2xl font-bold text-center mb-2">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          {/* Dynamic subtitle based on current form mode */}
          <p className="text-center text-gray-500 text-sm">
            {isLogin ? 'Enter your credentials to access your account' : 'Enter your details to get started'}
          </p>
        </div>

        {/* Form Section */}
        <div className="p-8 pt-2">
          {/* Conditional rendering: Show login form or signup form based on isLogin state */}
          {isLogin ? (
            <form onSubmit={handleLoginSubmit(onLogin)} className="space-y-4">
              {/* Email Input Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <div className="relative">
                  {/* Mail icon inside the input */}
                  <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  {/* Email input with validation registration */}
                  <input {...registerLogin("email")} type="email" placeholder="m@example.com" className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm" />
                </div>
                {/* Display validation error if exists */}
                {loginErrors.email && <span className="text-red-500 text-xs">{loginErrors.email.message}</span>}
              </div>

              {/* Password Input Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Password</label>
                <div className="relative">
                  {/* Lock icon inside the input */}
                  <Lock className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  {/* Password input with validation registration */}
                  <input {...registerLogin("password")} type="password" placeholder="••••••••" className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm" />
                </div>
                {/* Display validation error if exists */}
                {loginErrors.password && <span className="text-red-500 text-xs">{loginErrors.password.message}</span>}
              </div>

              {/* Submit Button */}
              <button type="submit" disabled={loading} className="w-full bg-indigo-600 text-white py-2.5 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center gap-2 font-medium">
                {/* Show loading spinner or button text based on loading state */}
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Sign In"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleSignupSubmit(onSignup)} className="space-y-4">
              {/* Name Input Field (only in signup) */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Full Name</label>
                <div className="relative">
                  {/* User icon inside the input */}
                  <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  {/* Name input with validation registration */}
                  <input {...registerSignup("name")} type="text" placeholder="John Doe" className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm" />
                </div>
                {/* Display validation error if exists */}
                {signupErrors.name && <span className="text-red-500 text-xs">{signupErrors.name.message}</span>}
              </div>

              {/* Email Input Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <div className="relative">
                  {/* Mail icon inside the input */}
                  <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  {/* Email input with validation registration */}
                  <input {...registerSignup("email")} type="email" placeholder="m@example.com" className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm" />
                </div>
                {/* Display validation error if exists */}
                {signupErrors.email && <span className="text-red-500 text-xs">{signupErrors.email.message}</span>}
              </div>

              {/* Password Input Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Password</label>
                <div className="relative">
                  {/* Lock icon inside the input */}
                  <Lock className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  {/* Password input with validation registration */}
                  <input {...registerSignup("password")} type="password" placeholder="••••••••" className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm" />
                </div>
                {/* Display validation error if exists */}
                {signupErrors.password && <span className="text-red-500 text-xs">{signupErrors.password.message}</span>}
              </div>

              {/* Submit Button */}
              <button type="submit" disabled={loading} className="w-full bg-indigo-600 text-white py-2.5 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center gap-2 font-medium">
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Create Account"}
              </button>
            </form>
          )}
        </div>

        {/* Footer Section - Toggle between Login and Signup */}
        <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
          <p className="text-sm text-gray-600">
            {/* Dynamic text based on current form mode */}
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            {/* Toggle button to switch between login and signup forms */}
            <button onClick={() => setIsLogin(!isLogin)} className="text-indigo-600 font-semibold hover:underline">
              {isLogin ? "Sign up" : "Log in"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
