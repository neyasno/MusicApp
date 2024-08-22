
import { useContext } from "react";
import SearchField from "./MainPageHeader/SearchField";
import VerifyBlock from "./MainPageHeader/VerifyBlock";
import { LoginStatusContext } from "../../../../App";
import AccountBlock from "./MainPageHeader/AccountBlock";

export default function MainPageHeader() {
  const loginContext = useContext(LoginStatusContext)
  return (
    <header className="bg-main_dd_black rounded-t-xl h-14">
      <nav>
        <div className="flex justify-between items-center">

          <div className="w-1/3 pl-6">
            <SearchField></SearchField>
          </div>
          <div className="mr-6">
            {(loginContext?.isLoggedIn)? <AccountBlock/> : <VerifyBlock/> }
          </div>
        </div>
      </nav>
    </header>
  )
}
