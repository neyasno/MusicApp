import VerificationPage from './VerificationPage/VerificationPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { EVerificationType }   from './VerificationPage/VerificationTypes'
import MainPage from './MainPage/MainPage'

export default function Pages() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <MainPage></MainPage>
          }/>
          <Route path='/search' element={
            <MainPage></MainPage>
          }/>
          <Route path='/section/:id' element={
            <MainPage></MainPage>
          }/>
          <Route path='/registration' element={
            <VerificationPage type={EVerificationType.REGISTRATION}></VerificationPage>
          }/>
          <Route path='/login' element={
            <VerificationPage type={EVerificationType.LOGIN}></VerificationPage>
          }/>
          <Route path='/login/reset' element={
            <VerificationPage type={EVerificationType.RESET_PASSWORD}></VerificationPage>
          }/>
          
        </Routes>
    </BrowserRouter>  
  )
}
