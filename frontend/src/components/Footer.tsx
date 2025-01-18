import React from 'react';

export function Footer() {
  return (
    <footer className="p-4">
      <div className="w-full max-w-screen-xl mx-auto">
        <hr className="my-6 border-gray-300 dark:border-gray-700" />
        <span className="block text-sm text-secondary sm:text-center dark:text-gray-400">
          © AMK MFI Plc. All rights reserved  
          <a 
            href="https://www.amkcambodia.com/en/terms-conditions/" 
            className="hover:underline mx-1 text-darkpurple"
          >
             Terms of Service
          </a>
          <a 
            href="https://www.amkcambodia.com/en/privacy-security/#:~:text=We%20use%20the%20information%20you,by%20law%20to%20do%20so." 
            className="hover:underline text-darkpurple"
          >
            Privacy Policy
          </a>
        </span>
      </div>
    </footer>
  );
}
