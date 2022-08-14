import React from 'react'
import UserHeader from '../partials/UserHeader';
export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <div>
        <UserHeader />
      </div>
      <article>
        <h1>Dashboard</h1>
      </article>
    </div>
  );
}
