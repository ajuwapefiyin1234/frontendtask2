import React, { useState } from 'react';
import { ArrowRight, Users, Calendar, CheckCircle, BarChart3, Shield, Menu, X } from 'lucide-react';

/**
 * Landing Page Component
 * Main landing page for Student Attendance Tracker
 * Features hero section, feature highlights, and call-to-action
 */
export default function Landing() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSmoothScroll = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">AttendTrack</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => handleSmoothScroll('features')} className="text-gray-600 hover:text-indigo-600 transition">Features</button>
              <button onClick={() => handleSmoothScroll('about')} className="text-gray-600 hover:text-indigo-600 transition">About</button>
              <button onClick={() => handleSmoothScroll('contact')} className="text-gray-600 hover:text-indigo-600 transition">Contact</button>
            </nav>
            <div className="hidden md:block">
              <button 
                onClick={() => window.location.href = '/auth'}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition flex items-center gap-2"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-indigo-600 transition p-2"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button 
                  onClick={() => handleSmoothScroll('features')}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition"
                >
                  Features
                </button>
                <button 
                  onClick={() => handleSmoothScroll('about')}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition"
                >
                  About
                </button>
                <button 
                  onClick={() => handleSmoothScroll('contact')}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition"
                >
                  Contact
                </button>
                <button 
                  onClick={() => window.location.href = '/auth'}
                  className="block w-full text-left px-3 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-md transition"
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Track Student Attendance
            <span className="block text-indigo-600">Effortlessly</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Modern attendance management system for educational institutions. 
            Streamline your attendance tracking with real-time insights and comprehensive reporting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/auth'}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition text-lg font-medium flex items-center justify-center gap-2 transform hover:scale-105"
            >
              Start Free Trial <ArrowRight className="h-5 w-5" />
            </button>
            <button 
              onClick={() => handleSmoothScroll('features')}
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition text-lg font-medium border border-indigo-200 transform hover:scale-105"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage student attendance efficiently
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-200 transition-colors duration-300">
                <Users className="h-8 w-8 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">Student Management</h4>
              <p className="text-gray-600">Easily add, edit, and manage student information with our intuitive interface</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <Calendar className="h-8 w-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">Smart Attendance</h4>
              <p className="text-gray-600">Mark attendance as present, absent, or late with quick and easy controls</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                <BarChart3 className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Analytics Dashboard</h4>
              <p className="text-gray-600">Get comprehensive insights with attendance statistics and trend analysis</p>
            </div>

            {/* Feature 4 */}
            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                <CheckCircle className="h-8 w-8 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">Attendance History</h4>
              <p className="text-gray-600">View complete attendance records and generate detailed reports</p>
            </div>

            {/* Feature 5 */}
            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors duration-300">
                <Shield className="h-8 w-8 text-yellow-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">Secure & Reliable</h4>
              <p className="text-gray-600">Enterprise-grade security with data backup and recovery options</p>
            </div>

            {/* Feature 6 */}
            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors duration-300">
                <Calendar className="h-8 w-8 text-red-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">Real-time Updates</h4>
              <p className="text-gray-600">Instant attendance updates and notifications for parents and administrators</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">10,000+</div>
              <div className="text-indigo-200">Students Managed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-indigo-200">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-indigo-200">Educational Institutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">About AttendTrack</h3>
          <p className="text-lg text-gray-600 mb-8">
            We're dedicated to simplifying attendance management for educational institutions worldwide. 
            Our platform combines cutting-edge technology with user-friendly design to deliver 
            exceptional attendance tracking solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">5+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">99.9%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Attendance Management?</h3>
          <p className="text-lg text-indigo-100 mb-8">
            Join thousands of educational institutions already using AttendTrack
          </p>
          <button 
            onClick={() => window.location.href = '/auth'}
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition text-lg font-medium flex items-center justify-center gap-2 mx-auto transform hover:scale-105 shadow-lg"
          >
            Get Started Now <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">AttendTrack</h4>
              <p className="text-gray-400">Modern attendance management for educational institutions</p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Product</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Company</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Legal</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AttendTrack. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
