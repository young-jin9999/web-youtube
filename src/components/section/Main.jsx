import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Main = (props) => {
  return (
    <div>
    <Header></Header>
    <main id='main' role='main'>
      {props.children}
    </main>
    <Footer></Footer>
    </div>
  )
}

export default Main