// import React from "react";
// // import { Table } from "react-bootstrap";
// import MTStudet from "./school/MTStudet";
// // import Navbar from "./Navbar";
// // import Employee from "./school/Employee";

// export default function Home() {
//   return (
//     <div className="App">
//       <div style={{ width: "100%", display: "flex" }}>
//         <MTStudet />
//       </div>
//     </div>
//   );
// }

import React from "react";

import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import FeaturesHome from "../partials/Features";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import Testimonials from "../partials/Testimonials";
import Newsletter from "../partials/Newsletter";
import Footer from "../partials/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;