import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight} from 'lucide-react'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <nav className='space-y-5'>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zin-200'>
              <HomeIcon/>
              Home</a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zin-200'>
              <Search/>
              Search</a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zin-200'>
              <Library/>
              Your Library</a>
          </nav>
         <nav className='mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3'>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist</a>
       
         </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex-1 items-center gap-4">
            <button className='p-1 rounded-full bg-black/40 '>
              <ChevronLeft/>
            </button>
            <button className='p-1 rounded-full bg-black/40 '>
              <ChevronRight/>
            </button>
          </div>
        </main>
      </div>
      <div>
        <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
          footer
        </footer>
      </div>
    </div>
  )
}
