import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import Header from './components/common/heading/Header'
import Home from './components/home/Home' 
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Price from "./components/pricing/Price"


function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={ Home } />
          <Route path='/about' exact component={ About } />
          <Route path='/courses' exact component={ CourseHome } />
          <Route path='/team' exact component={ Team } />
          <Route path='/pricing' exact component={ Price } />
        </Switch>
      </Router>
    </>
  )
}

export default App