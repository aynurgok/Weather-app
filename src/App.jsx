import React from 'react'
import SearchForm from './components/SearchForm'
import Info from './components/Info'
import GlobalProvider from './context/GlobalContext';

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
