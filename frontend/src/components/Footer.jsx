import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A40] text-[#F0F4F8] text-sm py-6 w-full">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-center gap-3">
        <p className="whitespace-nowrap">
          &copy; {new Date().getFullYear()} <strong>Super Mall</strong>. All rights reserved.
        </p>

        <nav className="flex flex-wrap justify-center gap-4">
          <a
            href="/privacy"
            className="hover:text-[#7EC8E3] transition underline-offset-2 hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="hover:text-[#7EC8E3] transition underline-offset-2 hover:underline"
          >
            Terms of Service
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
