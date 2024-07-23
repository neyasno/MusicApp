import { createContext, useContext, useState } from 'react'
import ActionPages from './Pages/ActionPages'
import Pages from './Pages/Pages'
import { BrowserRouter } from 'react-router-dom';
import { EActionPages } from './Pages/ActionPageTypes';
import Player from './Pages/Player';

export const ActionContext = createContext({});
export const PlayerContext = createContext({});
export const LoginStatusContext = createContext({});

function App() {

  const [ isActionVisible , setActionVisability ] = useState(false);
  const [ isLoggedIn , setLoggedIn ] = useState(false);
  

  return (
    <div className='w-full h-full relative'>
      <BrowserRouter>

        <ActionContext.Provider value={setActionVisability}>
        <LoginStatusContext.Provider value={{isLoggedIn , setLoggedIn}}>

          <Pages></Pages>

        </LoginStatusContext.Provider>
        </ActionContext.Provider>

        <ActionPages isVisible={isActionVisible} setVisability={setActionVisability} actionPage={EActionPages.VERIFICATION}></ActionPages>

        <Player></Player>

      </BrowserRouter>
    </div>
  )
}

export default App 
