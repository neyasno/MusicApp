import Player from "./MainPageParts/Player/Player"
import MainPageMedia from "./MainPageParts/MainAside/MainPageMedia"
import MainPageSelection from "./MainPageParts/MainAside/MainPageSelection"
import MainPageContent from "./MainPageParts/MainContent/MainPageContent"
import { EContent } from "./MainPageTypes"

export default function MainPage({activeContent}:{activeContent:EContent}) {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full h-full bg-main_BLACK flex">

      <div className="w-3/12 h-full flex flex-col p-2">

        <MainPageSelection></MainPageSelection>
        <MainPageMedia></MainPageMedia>
        
      </div>

      <MainPageContent activeContent={activeContent}></MainPageContent>
      </div>
      <Player></Player>
    </div>

  )
}
