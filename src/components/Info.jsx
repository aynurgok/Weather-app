import React,{ useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';

function Info() {
  
  const {result} = useContext(GlobalContext)
  const {main} = result
  return (
    <div>
      {
        result ? <div>
          <div>
          <div className='temp'>
            <p>{main.temp}</p>
            <p>{result.feels_like}</p>
          </div>
          <div className='sehir'>
            <p>{result.name} {result.sys.country}</p>
            <p>Tarih</p>
          </div>
        </div> 
      </div> : null
      }
    </div>
  );
}

export default Info