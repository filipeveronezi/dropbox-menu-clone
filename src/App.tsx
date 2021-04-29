import React from 'react'

import GlobalStyles from './styles/GlobalStyles'
import Section from './components/Section'
import SideMenu from './components/SideMenu'
import MenuForm from './components/MenuForm'

import pageData from './data'

function App() {
  return (
    <>
      <Section
        variant="blue"
        title={pageData[0].title}
        description={pageData[0].description}
      />
      <Section
        variant="beige"
        title={pageData[1].title}
        description={pageData[0].description}
      />
      <Section
        variant="blue"
        title={pageData[2].title}
        description={pageData[0].description}
      />
      <Section
        variant="white"
        title={pageData[3].title}
        description={pageData[0].description}
      />
      <Section
        variant="black"
        title={pageData[4].title}
        description={pageData[0].description}
      />

      <SideMenu>
        <MenuForm />
      </SideMenu>

      <GlobalStyles />
    </>
  )
}

export default App
