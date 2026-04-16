'use client'
import React from 'react'
import { authClient } from "@/lib/auth-client"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'


const Dashboard = () => {


  // const { data: session, isPending } = authClient.useSession()
  const router = useRouter()

  // useEffect(() => {
  //   if (!isPending && !session) {
  //     router.push('/signin')
  //   }
  // }, [session, isPending])

  // if (isPending) return <div>Loading...</div>


   const signuot = async () => {
    await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        router.push("/signin"); // redirect to login page
      },
    },
  });
  }


  return (
    <div className="flex  bg-gray-50 text-gray-900">

      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-8">Hilal App</h2>

        <nav className="space-y-2">
          {["Dashboard", "Projects", "Analytics", "Settings"].map((item) => (
            <div
              key={item}
              className="p-3 rounded-xl cursor-pointer hover:bg-gray-100 transition"
            >
              {item}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col">

        {/* Navbar */}
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
          <h1 className="text-xl font-semibold">Dashboard</h1>

          <div className="flex items-center gap-4">
            <input
              placeholder="Search..."
              className="hidden md:block px-3 py-2 border rounded-lg text-sm"
            />

            <button onClick={signuot} className="px-4 py-2 text-sm bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Logout
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="p-6 space-y-8">

          {/* Welcome */}
          <div>
            <h2 className="text-3xl font-bold">Welcome back 👋</h2>
            <p className="text-gray-500 mt-1">
              Heres whats happening with your projects today.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white p-5 rounded-2xl shadow-sm border hover:shadow-md transition">
              <p className="text-gray-500 text-sm">Total Projects</p>
              <h3 className="text-2xl font-bold mt-2">12</h3>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm border hover:shadow-md transition">
              <p className="text-gray-500 text-sm">Active Users</p>
              <h3 className="text-2xl font-bold mt-2">1,240</h3>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm border hover:shadow-md transition">
              <p className="text-gray-500 text-sm">Revenue</p>
              <h3 className="text-2xl font-bold mt-2">$8,540</h3>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm border hover:shadow-md transition">
              <p className="text-gray-500 text-sm">Growth</p>
              <h3 className="text-2xl font-bold mt-2">+12%</h3>
            </div>

          </div>

          {/* Main Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Activity */}
            <div className="lg:col-span-2 bg-white p-6 rounded-2xl border shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>

              <ul className="space-y-4">
                <li className="flex justify-between text-sm">
                  <span>New project created</span>
                  <span className="text-gray-400">2 min ago</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span>User signed up</span>
                  <span className="text-gray-400">10 min ago</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span>Payment received</span>
                  <span className="text-gray-400">1 hour ago</span>
                </li>
              </ul>
            </div>

            {/* Profile Card */}
            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Your Profile</h3>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full" />
                <div>
                  <p className="font-medium">Hilal Ahmad</p>
                  <p className="text-sm text-gray-500">Frontend Developer</p>
                </div>
              </div>

              <button className="mt-6 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                Edit Profile
              </button>
            </div>

          </div>

        </div>
      </main>
    </div>
  )
}

export default Dashboard