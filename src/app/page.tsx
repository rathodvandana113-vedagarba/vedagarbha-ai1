export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Vedagarbha Ai</h1>
      <p className="text-xl text-gray-400">
        Your AI generation platform is ready.
      </p>
      <div className="mt-8">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </main>
  );
}