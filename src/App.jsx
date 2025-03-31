import './App.css'
import FormPages from './components/Forms/formsPages/formsPage'
import NavBar from './components/navBar/navBar'
import UserPage from './components/userPage/userPage'
import SearchPage from './components/searchPage/search_page'

function App() {
  

  return (
    <div className='h-full min-h-screen dark:bg-gray-900 flex w-full '>
      <NavBar user="XXXXX"/>
      <div className='md:ml-48'>
        <SearchPage/>
      </div>
    </div>
  )
}

export default App
