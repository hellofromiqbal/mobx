'use client'

import Users from "@/components/Users";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Mobx State Management</h1>
      {/* <Users store={usersStore}/> */}
      <Users/>
    </main>
  );
}
