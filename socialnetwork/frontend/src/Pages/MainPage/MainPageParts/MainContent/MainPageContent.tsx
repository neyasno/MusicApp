import MainPageFooter from './MainPageFooter'
import MainPageHeader from './MainPageHeader'
import { EContent } from '../../MainPageTypes'
import ContentMain from './ContentPages/ContentMain'
import ContentCategories from './ContentPages/ContentCategories'
import ContentSearch from './ContentPages/ContentSearch/ContentSearch'
import ContentAuthor from './ContentPages/ContentAuthor'
import ContentCard from './ContentPages/ContentCard/ContentCard'
import ContentCollection from './ContentPages/ContentCollection'

export default function MainPageContent(props:{activeContent:EContent}) {

  const renderContent = () =>{

    switch(props.activeContent){

      case(EContent.MAIN):{
         return <ContentMain></ContentMain>
      }
      case(EContent.AUTHOR):{
        return <ContentAuthor></ContentAuthor>
      }
      case(EContent.CARD):{
        return <ContentCard></ContentCard>
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
    <div className='w-full flex flex-col bg-main_black rounded-xl text-main_WHITE my-2 mr-2'>
      <MainPageHeader></MainPageHeader>
      <div className="w-full flex flex-col rounded-b-xl overflow-y-scroll "> 

        <main>
        {renderContent()}
        </main>

        <MainPageFooter></MainPageFooter>

      </div>
    </div>
  )
}
