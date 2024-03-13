import Navbar from "./navbar.js";
import Footer from "./Footer.js";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
