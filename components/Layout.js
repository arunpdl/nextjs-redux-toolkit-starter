import React from "react";
import Link from "next/link";
import Head from "next/head";

const Layout = ({ children, title = "My Nextjs App" }) => {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <div className="grid md:grid-cols-3">
      <div className="md:col-span-1 md:flex md:justify-end">
        <nav className="text-right">
          <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <div className="flex justify-between items-center">
            <h1 className="font-bold uppercase p-4 border-b border-gray-100">
              <Link href="/">
                <a className="hover:text-gray-700">Arun Poudel</a>
              </Link>
            </h1>
            <div
              className="px-4 cursor-pointer md:hidden"
              onClick={() => setShowMenu(!showMenu)}
            >
              <svg
                className="w-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </div>
          </div>
          <ul
            className={
              showMenu
                ? "text-sm mt-6 md:block"
                : "text-sm mt-6 md:block hidden"
            }
          >
            <li className="text-gray-700 font-bold py-1 border-r-4 border-primary">
              <Link href="/">
                <a className="px-4 flex justify-end">
                  <span>Home</span>
                  <svg
                    className="w-5 ml-2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                </a>
              </Link>
            </li>
            <li className="text-gray-700 py-1 border-r-4 border-white">
              <Link href="/repos">
                <a className="px-4 flex justify-end">
                  <span>Repos</span>
                  <svg
                    className="w-5 ml-2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                  </svg>
                </a>
              </Link>
            </li>
            <li className="text-gray-700 py-1 border-r-4 border-white">
              <Link href="/about">
                <a className="px-4 flex justify-end">
                  <span>About</span>
                  <svg
                    className="w-5 ml-2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </a>
              </Link>
            </li>
            <li className="text-gray-700 py-1 border-r-4 border-white">
              <Link href="/contact">
                <a className="px-4 flex justify-end">
                  <span>Contact</span>
                  <svg
                    className="w-5 ml-2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"></path>
                  </svg>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <main className="px-16 py-6 font-body bg-gray-100 md:col-span-2">
        {children}
      </main>
    </div>
  );
};

export default Layout;
