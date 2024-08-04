import VerificationPage from './VerificationPage/VerificationPage'
import { Route, Routes } from 'react-router-dom'
import { EVerificationType } from './VerificationPage/VerificationTypes'
import MainPage from './MainPage/MainPage'
import { EContent } from './MainPage/MainPageTypes'
import MainPageContent from './MainPage/MainPageParts/MainContent/MainPageContent'
import React from 'react'

const Pages = () => {
  return (
      <Routes>
        <Route path='/' element={<MainPage/>}>
          <Route path='/' element={ <MainPageContent activeContent={EContent.MAIN}/> }/>
          <Route path='/categories' element={ <MainPageContent activeContent={EContent.CATEGORIES}/> } />
          <Route path='/search/' element={ <MainPageContent activeContent={ EContent.SEARCH_RESULTS}/>} />
          <Route path='/search/:category' element={ <MainPageContent activeContent={ EContent.SEARCH_RESULTS}/> } />
          <Route path='/search/:category/:params' element={ <MainPageContent activeContent={ EContent.SEARCH_RESULTS}/>} />
          <Route path='/section/:id' element={ <MainPageContent activeContent={EContent.COLLECTION}/> } />
          <Route path='/section/collection/:id' element={ <MainPageContent activeContent={EContent.COLLECTION}/> } />

      </Route>

        <Route path='/login' element={
          <VerificationPage type={EVerificationType.LOGIN}></VerificationPage>
        } />
        <Route path='/login/reset' element={
          <VerificationPage type={EVerificationType.RESET_PASSWORD}></VerificationPage>
        } />
        <Route path='/registration' element={
          <VerificationPage type={EVerificationType.REGISTRATION}></VerificationPage>
        } />


        <Route path='/info' element={
          <p>Information page</p>
        } />

        
      </Routes>
  )
}

export default React.memo(Pages)


