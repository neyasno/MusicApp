import { useContext } from 'react'
import MainPageCategories from './MainPageCategories'
import MainPageFooter from './MainPageFooter'
import MainPageHeader from './MainPageHeader'
import MainPageMain from './MainPageMain'

export default function MainPageContent() {

  let actualContent = useContext();

  return (
    <div className='w-full flex flex-col bg-main_black rounded-xl text-white my-2 mr-2'>
      <MainPageHeader></MainPageHeader>
      <div className="w-full flex flex-col rounded-xl overflow-y-scroll"> 
        <MainPageCategories></MainPageCategories>   
        <MainPageMain></MainPageMain>
        <MainPageFooter></MainPageFooter>
      </div>
    </div>
  )
}
