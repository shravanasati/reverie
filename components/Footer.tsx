import React from "react";
import Container from "./ui/Container";
import { BookOpen, Twitter, Instagram, Facebook, Github } from "lucide-react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="#" className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-journal-600" />
              <span className="text-xl font-medium">
                <span className="text-journal-700">reverie</span>
              </span>
            </Link>
            <p className="text-journal-600 mb-6 max-w-md">
              Transform your thoughts with AI-powered journaling. Capture insights,
              track emotions, and grow with intelligent reflection.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-journal-500 hover:text-journal-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-journal-500 hover:text-journal-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://github.com/shravanasati/reverie" className="text-journal-500 hover:text-journal-700 transition-colors">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4 text-journal-800">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#features" className="text-journal-600 hover:text-journal-800 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-journal-600 hover:text-journal-800 transition-colors">
                  Pricing
                </Link>
              </li>
              {/* <li>
                <Link href="#" className="text-journal-600 hover:text-journal-800 transition-colors">
                  Security
                </Link>
              </li> */}
              <li>
                <Link href="#" className="text-journal-600 hover:text-journal-800 transition-colors">
                  App
                </Link>
              </li>
            </ul>
          </div>

          {/* <div>
            <h3 className="font-medium text-lg mb-4 text-journal-800">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-journal-600 hover:text-journal-800 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-journal-600 hover:text-journal-800 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-journal-600 hover:text-journal-800 transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="#" className="text-journal-600 hover:text-journal-800 transition-colors">
                  Research
                </Link>
              </li>
            </ul>
          </div> */}

          {/* <div>
            <h3 className="font-medium text-lg mb-4 text-journal-800">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-journal-600 hover:text-journal-800 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-journal-600 hover:text-journal-800 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-journal-600 hover:text-journal-800 transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="text-journal-600 hover:text-journal-800 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div> */}
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-journal-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} reverie. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <Link href="/privacy" className="text-journal-500 hover:text-journal-800 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/tos" className="text-journal-500 hover:text-journal-800 text-sm transition-colors">
              Terms of Service
            </Link>
            {/* <Link href="#" className="text-journal-500 hover:text-journal-800 text-sm transition-colors">
              Cookie Policy
            </a> */}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
