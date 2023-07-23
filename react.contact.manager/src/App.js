import react, {Component} from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import UserRead from './components/UserRead'
import UserCreate from './components/UserCreate'
import UserUpdate from './components/UserUpdate'
import UserSearch from './components/UserSearch.js'
import Menu from './components/Menu'
export default class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<UserRead/>}/>
        <Route path="/create" element={<UserCreate/>}/>
        <Route path="/update/:id" element={<UserUpdate/>}/>
        <Route path="/search" element={<UserSearch/>}/>
      </Routes>
      </BrowserRouter>
      </>
    )
  }
} 