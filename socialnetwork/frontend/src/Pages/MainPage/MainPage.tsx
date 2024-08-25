import Player from "./MainPageParts/Player/Player"
import MainPageMedia from "./MainPageParts/MainAside/MainPageMedia"
import MainPageSelection from "./MainPageParts/MainAside/MainPageSelection"
import { Outlet } from "react-router-dom"

export default function MainPage() {
  return (
  //   <div className="bg-main_BLACK h-full p-2">
  //   <div className="h-full grid grid-cols-16 grid-rows-16 gap-2">
  //       <div className="col-span-3 row-span-14">
  //         <div className="h-full flex flex-col">
  //           <div className="">
  //             <MainPageSelection></MainPageSelection>
  //           </div>
  //           <div className="h-full mt-2">
  //             <MainPageMedia></MainPageMedia>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="col-span-13 row-span-14">
  //         <Outlet></Outlet>
  //       </div>
  //       <div className="col-span-full row-span-2">
  //         <Player></Player> 
  //       </div>
  //   </div>
  // </div>

  <div className="bg-main_BLACK h-full p-2">
    <div className="flex flex-col h-full">
      <div className="flex h-full mb-2 max-h-11/12">
          <div className="w-2/12 mr-2 flex flex-col bg-red-500">
            <div className="">
              <MainPageSelection></MainPageSelection>
            </div>
            <div className="mt-2 h-full">
            <MainPageMedia></MainPageMedia>
            </div>
          </div>
          <div className=" flex-1 flex">
              <Outlet></Outlet>
          </div>
      </div>
      <div className=" h-1/12">
        <Player></Player>
      </div>
    </div>
  </div>

  )
}
