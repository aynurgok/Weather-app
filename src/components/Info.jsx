import React,{ useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';
import '../assets/styles/info.scss'
import {BsFillCloudLightningFill} from 'react-icons/bs'

function Info() {
  
  const {result, load, date} = useContext(GlobalContext)
  const {main,sys} = result
  console.log(result)
  return (
    <div>
      {
          load ? 
            <div className='info-container'>
              <div className='left-box'>
                <p className='country-name'>{result.name} {sys.country}</p>
                <p className='date'>{date ? date.toDateString() : null}</p>
                <div className='temp-area'>
                  <BsFillCloudLightningFill fontSize={80} style={{color:"white", marginTop:20}}/>
                  <div className='desc'>
                    <p className='temp'>{main.temp.toFixed(2)}°C</p>
                    <p className='weather-desc'>{result.weather[0].description}</p>
                  </div>
                </div>
              </div>
              <div className='right-box'>
                <div className='box'>{main.feels_like}</div>
                <div className='box'>{main.feels_like}</div>
                <div className='box'>{main.feels_like}</div>
                <div className='box'>{main.feels_like}</div>
                <div className='box'>{main.feels_like}</div>
                <div className='box'>{main.feels_like}</div>
              </div>
           </div>  
    : null
      }
    </div>
  );
}

export default Info