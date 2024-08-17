import VerificationPage from './VerificationPage/VerificationPage'
import { Route, Routes } from 'react-router-dom'
import { EVerificationType } from './VerificationPage/VerificationTypes'
import MainPage from './MainPage/MainPage'
import { EContent } from './MainPage/MainPageTypes'
import MainPageContent from './MainPage/MainPageParts/MainContent/MainPageContent'
import React from 'react'
import EPaths from '../utils/paths'

const Pages = () => {
  return (
      <Routes>
        <Route path='/' element={<MainPage/>}>
          <Route path='/'                                   element={ <MainPageContent activeContent={EContent.MAIN}/> }/>
          <Route path={EPaths.CATEGORIES}                   element={ <MainPageContent activeContent={EContent.CATEGORIES}/> } />
          <Route path={EPaths.SEARCH}                       element={ <MainPageContent activeContent={ EContent.SEARCH_RESULTS}/>} />
          <Route path={EPaths.SEARCH + ":category"}         element={ <MainPageContent activeContent={ EContent.SEARCH_RESULTS}/> } />
          <Route path={EPaths.SEARCH + ":category/:params"} element={ <MainPageContent activeContent={ EContent.SEARCH_RESULTS}/>} />
          <Route path={EPaths.COLLECTIONS + ":id"}          element={ <MainPageContent activeContent={EContent.COLLECTION}/> } />
          <Route path={EPaths.ALBUMS + ":id"}               element={ <MainPageContent activeContent={EContent.CARD}/> } />
          <Route path={EPaths.AUTHORS + ":id"}              element={ <MainPageContent activeContent={EContent.CARD}/> } />
          <Route path={EPaths.TRACKS + ":id"}               element={ <MainPageContent activeContent={EContent.CARD}/> } />
          <Route path={EPaths.PLAYLISTS + ":id"}            element={ <MainPageContent activeContent={EContent.CARD}/> } />
      </Route>

        <Route path={EPaths.LOGIN} element={
          <VerificationPage type={EVerificationType.LOGIN}></VerificationPage>
        } />
        <Route path={EPaths.RESET_PASSWORD} element={
          <VerificationPage type={EVerificationType.RESET_PASSWORD}></VerificationPage>
        } />
        <Route path={EPaths.REGISTRATION} element={
          <VerificationPage type={EVerificationType.REGISTRATION}></VerificationPage>
        } />


        <Route path={EPaths.INFO} element={
          <p>Information page</p>
        } />

        
      </Routes>
  )
}

export default React.memo(Pages)


