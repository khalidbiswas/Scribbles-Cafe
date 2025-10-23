import Navbar from './components/navbar/navbar';
import Blogs from './components/blogs/blogs';
import './App.css'
import { useState } from 'react';

function App() {
  const [bookmarked, setBookmark] = useState([])

  const handleBookmark = (blog ) => {
    setBookmark([...bookmarked, blog]);


  }

  return (
    <div className='w-[90%] mx-auto'>
      <Navbar></Navbar>
      <div className='flex justify-between mx-auto'>

        <div className='left-container w-{70%}'>
          <Blogs handleBookmark={handleBookmark}></Blogs>
        </div>
        <div className=' right-container border w-[30%]'>
          <h1 className='text-xl '>Reading Time: 0</h1>
          <h1>bookmarked count : 0</h1>
          {
            bookmarked.map((bookmark) => <p>{bookmark.title}</p>)
          }
        </div>

      </div>
    </div>
  )
}

export default App
