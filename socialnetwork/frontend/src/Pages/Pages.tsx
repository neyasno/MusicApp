import VerificationPage from './VerificationPage/VerificationPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { EVerificationType } from './VerificationPage/VerificationTypes'
import MainPage from './MainPage/MainPage'
import { EContent } from './MainPage/MainPageTypes'

export default function Pages() {
  return (
      <Routes>
        <Route path='/' element={
          <MainPage activeContent={EContent.MAIN}></MainPage>
        } />


        <Route path='/categories' element={
          <MainPage activeContent={EContent.CATEGORIES}></MainPage>
        } />


        <Route path='/search/' element={
          <MainPage activeContent={EContent.SEARCH_RESULTS}></MainPage>
        } />
        <Route path='/search/:category' element={
          <MainPage activeContent={EContent.SEARCH_RESULTS}></MainPage>
        } />
        <Route path='/search/:category/:params' element={
          <MainPage activeContent={EContent.SEARCH_RESULTS}></MainPage>
        } />


        <Route path='/section/:id' element={
          <MainPage activeContent={EContent.CARD}></MainPage>
        } />
        <Route path='/section/collection/:id' element={
          <MainPage activeContent={EContent.COLLECTION}></MainPage>
        } />


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
