import React,{ useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';

function Info() {
  
  const {result, load} = useContext(GlobalContext)
  const {main,sys} = result
 
  return (
    <div>
      {
        load ? <div>
           <div>
          <div className='temp'>
            <p>{main.temp}</p>
            <p>{result.feels_like}</p>
          </div>
          <div className='sehir'>
            <p>{name} {sys.country}</p>
            <p>Tarih</p>
          </div>
        </div>
      </div> : null
      }
    </div>
  );
}

export default Info