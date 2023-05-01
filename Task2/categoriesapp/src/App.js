import React from 'react'
import { BrowserRouter, Route, Routes, ex } from 'react-router-dom'
import Categories from './component/Categories'
import Items from './component/Items'
import Main from './component/Main'
import Overview from './component/Overview'
import Tags from './component/Tags'
import SelectedCategoryProvider from './Contex/SelectedCategoryContext'

function App() {
  return (
    <div>
      <BrowserRouter>
      <SelectedCategoryProvider>
        <Routes>
          <Route path='/' element={<Categories />} />
          <Route path='Items' element={<Items />} />
          <Route path='Main' element={<Main />}>
            <Route path='/Main/Tags' element={<Tags />} />
            <Route path='Overview' element={<Overview />} />
          </Route>
        </Routes>
        </SelectedCategoryProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
