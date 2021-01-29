import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Hello from './Hello'
import Projects from './Projects'
import About from './About'
import { Switch, Route, } from 'react-router-dom'
import ContactForm from './ContactForm'
import CV from './CV'

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Hello}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/cv" component={CV}></Route>
        <Hello />
      </Switch>

      <ContactForm />
      <Footer />
    </>
  )
}

export default App
