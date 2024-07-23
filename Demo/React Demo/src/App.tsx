import React from 'react'
import "./App.css"
const App = () => {
const data=[1,2,3,4]
  
  return (
    <div className='App'>
    
      {
        data.map((item)=>{
          return <div>{item}</div>
        })
      }

      <hr/>

      
    </div>
  )
}

export default App;