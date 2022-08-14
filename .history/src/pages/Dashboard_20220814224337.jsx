import React from 'react'
import Footer from '../partials/Footer';
import UserHeader from '../partials/UserHeader';
import Student from '../School/Student';
export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-5">
      <UserHeader />
      <main className="flex-grow">
        <Student/>
      </main>
      <Footer />
    </div>
  );
}
