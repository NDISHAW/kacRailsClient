import React from 'react'
import UserHeader from '../partials/UserHeader';
export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
        <UserHeader />
<main className="flex-grow"></main>
        <h1>Dashboard</h1>

    </div>
  );
}
