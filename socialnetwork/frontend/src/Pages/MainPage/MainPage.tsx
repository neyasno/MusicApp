import MainPageMedia from "./MainPageParts/MainAside/MainPageMedia"
import MainPageSelection from "./MainPageParts/MainAside/MainPageSelection"
import MainPageContent from "./MainPageParts/MainContent/MainPageContent"
import { EContent } from "./MainPageTypes"

export default function MainPage(props:{activeContent:EContent}) {
  return (
    <div className="w-full h-full bg-black flex">
      <div className="w-3/12 h-full flex flex-col p-2">
        <MainPageSelection></MainPageSelection>
        <MainPageMedia></MainPageMedia>
      </div>
      <MainPageContent activeContent={props.activeContent}></MainPageContent>

    </div>
  )
}
