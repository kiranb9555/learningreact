import React from 'react'

const Main = () => {

    const b=()=>{

        const c=["kiran","rohit","w1","w2"]
        const int=Math.floor(Math.random()*4)
        return c[int]
      }
    
  return (
    <Main>
      <p>{b()}</p>
    </Main>
  )
}

export default Main
