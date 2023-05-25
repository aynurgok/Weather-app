import React, {useContext} from 'react'
import { useEffect } from 'react'
import "../assets/styles/searchForm.scss" 
import { GlobalContext } from '../context/GlobalContext'

function SearchForm() {

    const {search, setSearch} = useContext(GlobalContext)
    useEffect(() => {
        console.log(search)

    }, [search])

   const onChange = (e) => {
    setSearch(e.target.value)
    e.preventDefault()
   }
  return (
    <div className='searchForm-container'>
      <h2 className='title'>Hava durumu</h2>
      <form>
        <input value={search} onChange={onChange} type="text" placeholder='Aramak istediğiniz şehri giriniz' className='input' />
        <button className='search-btn'>Ara</button>
      </form>
    </div>
  )
}

export default SearchForm
