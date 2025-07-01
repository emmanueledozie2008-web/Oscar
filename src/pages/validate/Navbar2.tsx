import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { FiPackage } from 'react-icons/fi';
import {
  MdSupportAgent,
  MdQuestionAnswer,
  MdContactSupport,
  MdOutlineAssignment,
  MdArticle
} from 'react-icons/md';
import {
  HiOutlineChartBar,
  HiOutlineCog,
  HiOutlineSwitchHorizontal
} from 'react-icons/hi';

const Navbar2: React.FC = () => {
  const [isPilAppsOpen, setIsPilAppsOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  return (
    <nav className="bg-gray-50 shadow-sm fixed bottom-0 left-0 right-0 z-50 border-t backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Home link */}
          <a
            href="/"
            className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-500 transition-colors flex items-center"
          >
            <AiOutlineHome className="mr-1 text-lg" />
            Home
          </a>

          {/* PilApps dropdown */}
          <div className="relative ml-4">
            <button
              type="button"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-500 flex items-center"
              onClick={() => setIsPilAppsOpen(!isPilAppsOpen)}
            >
              <FiPackage className="mr-1 text-lg" />
              PilApps
              <svg
                className={`ml-1 h-4 w-4 transition-transform ${
                  isPilAppsOpen ? 'rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isPilAppsOpen && (
              <div className="absolute bottom-full mb-2 w-60 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-10">
                <a
                  href="/services/analytics"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <HiOutlineChartBar />
                  Analytics
                </a>
                <a
                  href="/services/automation"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <HiOutlineCog />
                  Automation
                </a>
                <a
                  href="/services/integration"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <HiOutlineSwitchHorizontal />
                  Integration
                </a>
                <a
                  href="/services/custom-dev"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <HiOutlineCog />
                  Custom Development
                </a>
              </div>
            )}
          </div>

          {/* Support dropdown */}
          <div className="relative ml-4">
            <button
              type="button"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-500 flex items-center"
              onClick={() => setIsSupportOpen(!isSupportOpen)}
            >
              <MdSupportAgent className="mr-1 text-lg" />
              Support
              <svg
                className={`ml-1 h-4 w-4 transition-transform ${
                  isSupportOpen ? 'rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isSupportOpen && (
              <div className="absolute bottom-full mb-2 w-64 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-10">
                <a
                  href="/support/faq"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <MdQuestionAnswer />
                  FAQs
                </a>
                <a
                  href="/support/contact"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <MdContactSupport />
                  Contact Support
                </a>
                <a
                  href="/support/tickets"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <MdOutlineAssignment />
                  Support Tickets
                </a>
                <a
                  href="/support/documentation"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <MdArticle />
                  Documentation
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
