"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">Account Info</h2>
          <p className="text-gray-300">Email: {session?.user?.email}</p>
          <p className="text-gray-300">Credits: {session?.user?.credits || 0}</p>
          <p className="text-gray-300">Role: {session?.user?.role || "USER"}</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-4">
            <button className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded text-left">
              Generate Image
            </button>
            <button className="w-full bg-green-600 hover:bg-green-700 px-4 py-3 rounded text-left">
              Generate Video
            </button>
            <button className="w-full bg-purple-600 hover:bg-purple-700 px-4 py-3 rounded text-left">
              Generate Audio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}