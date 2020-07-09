import React from "react";
import Link from "next/link";
import Head from "next/head";

const Layout = ({ children, title = "My Nextjs App" }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header style={{ display: "flex", justifyContent: "space-around" }}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/repos">
          <a>Repos</a>
        </Link>
      </header>
      <main style={{ padding: "20px 15px", minHeight: "810px" }}>
        {children}
      </main>
      <footer
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span>Arun Poudel</span>
      </footer>
    </div>
  );
};

export default Layout;
