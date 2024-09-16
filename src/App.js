import './App.css'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import CourseItemDetails from './CourseItemDetails'
import NotFound from './NotFound'

// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/courses/:id" component={CourseItemDetails} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
