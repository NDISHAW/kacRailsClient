import React from 'react'
import Footer from '../partials/Footer';
import UserHeader from '../partials/UserHeader';
export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <UserHeader />
      <main className="flex-grow">
        <Stu
      </main>
      <Footer />
    </div>
  );
}
