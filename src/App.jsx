import React from 'react'
import SearchForm from './components/SearchForm'
import Info from './components/Info'
import GlobalProvider from './context/GlobalContext';
import '../src/assets/styles/reset.scss'
function App() {
  return (
    <div className='app'>
      <GlobalProvider>
         <SearchForm />
         <Info />
      </GlobalProvider>
     
    </div>
  )
}

export default App
