import { createContext, useState } from 'react'
import ActionPages from './Pages/ActionPages'
import Pages from './Pages/Pages'
import { BrowserRouter } from 'react-router-dom';
import { EActionPages } from './Pages/ActionPageTypes';

type LoginStatusContextType = {
  isLoggedIn: boolean;
  setLoggedIn: Function;
};

export const ActionContext = createContext({});
export const PlayerContext = createContext({});
export const LoginStatusContext = createContext<LoginStatusContextType | undefined>(undefined);

function App() {

  const [ currentAction , setAction ] = useState(EActionPages.NONE);
  const [ isLoggedIn , setLoggedIn ] = useState(false);
  

  return (
    <div className='w-full h-full relative'>
      <BrowserRouter>

        <ActionContext.Provider value={setAction}>
        <LoginStatusContext.Provider value={{isLoggedIn , setLoggedIn}}>

          <Pages></Pages>

        </LoginStatusContext.Provider>
        </ActionContext.Provider>

        <ActionPages setAction={setAction} actionPage={currentAction}></ActionPages>

        

      </BrowserRouter>
    </div>
  )
}

export default App 
