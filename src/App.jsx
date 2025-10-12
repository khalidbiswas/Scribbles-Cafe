import Navbar from './components/navbar/navbar';
import Blogs from './components/blogs/blogs';
import './App.css'

function App() {


  return (
    <div className='w-[90%] mx-auto'>
      <Navbar></Navbar>
      <div className='flex justify-between w-[90%] mx-auto'>

        <div className='left-container w-[70%]'>
          <Blogs></Blogs>
        </div>
        <div className=' right-container border w-[30%]'>
         <h1 className='text-xl '>Reading Time: 0</h1>
        <h1>bookmarked count : 0</h1>
        </div>

      </div>
    </div>
  )
}

export default App
