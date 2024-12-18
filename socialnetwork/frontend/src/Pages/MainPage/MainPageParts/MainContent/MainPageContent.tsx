import MainPageFooter from './MainPageFooter'
import MainPageHeader from './MainPageHeader'
import { EContent } from '../../MainPageTypes'
import ContentMain from './ContentPages/ContentMain'
import ContentCategories from './ContentPages/ContentCategories'
import ContentSearch from './ContentPages/ContentSearch/ContentSearch'
import ContentCollection from './ContentPages/ContentCollection'
import ContentCardWrapper from './ContentPages/ContentCard/ContentCardWrapper'

export default function MainPageContent(props:{activeContent:EContent}) {

  const renderContent = () =>{

    switch(props.activeContent){

      case(EContent.MAIN):{
         return <ContentMain></ContentMain>
      }
      case(EContent.CARD):{
        return <ContentCardWrapper></ContentCardWrapper>
      }
      case(EContent.SEARCH_RESULTS):{
        return <ContentSearch></ContentSearch>
      }
      case(EContent.CATEGORIES):{
        return <ContentCategories></ContentCategories>
      }
      case(EContent.COLLECTION):{
        return <ContentCollection></ContentCollection>
      }
      default:{
        return <p>Error</p>
      }

    }

  }

  return (
    <div className='w-full h-full flex flex-col bg-main_black rounded-xl text-main_WHITE'>
      <MainPageHeader></MainPageHeader>
        <div className="w-full h-full flex flex-col flex-1 rounded-b-xl overflow-y-scroll "> 

        <main>
        {renderContent()}
        </main>

        <MainPageFooter></MainPageFooter>

        </div>
    </div>
  )
}
