// app/page.tsx - WE WRITE THIS TOGETHER
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
           Universities <span className="text-blue-600">Slide Bank</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Free lecture slides for Ghanaian students. From students, for students.
        </p>
        
        {/* Search Bar - We'll build this later */}
        <div className="bg-white p-2 rounded-lg shadow-lg max-w-2xl flex" >
          <input 
            type="text" 
            placeholder="Search for courses..." 
            className="flex-1 px-4 py-3 outline-none text-black"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Search
          </button>
        </div>
      </div>
    </main>
  )
}