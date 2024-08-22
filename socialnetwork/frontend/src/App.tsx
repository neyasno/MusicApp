import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react'
import ActionPages from './Pages/ActionPages'
import Pages from './Pages/Pages'
import { BrowserRouter } from 'react-router-dom';
import { EActionPages } from './Pages/ActionPageTypes';
import axios from 'axios';
import { EApi } from './utils/paths';
import getCookieValue from './utils/cookie';

type TLoginStatusContext = {
  isLoggedIn: boolean;
  setLoggedIn: Function;
};

export const ActionContext = createContext<Dispatch<SetStateAction<EActionPages>>>(()=>{ });
export const PlayerContext = createContext({});
export const LoginStatusContext = createContext<TLoginStatusContext>({isLoggedIn: false , setLoggedIn:()=>{}});

function App() {

  const [ currentAction , setAction ] = useState(EActionPages.NONE);
  const [ isLoggedIn , setLoggedIn ] = useState(false);

  const [isLoanding , setLoandingStatus] = useState(true)
  
  useEffect(()=>{
    axios.get(EApi.DEFAULT , {params:{
      token : getCookieValue("token") , 
    }}).then(()=>{
      setLoggedIn(true)
    }).finally(()=>
      setLoandingStatus(false)
    )
  },[])

  return (
    <div className='w-full h-full relative'>
      <BrowserRouter>

        <ActionContext.Provider value={setAction}>
          
          <LoginStatusContext.Provider value={{isLoggedIn , setLoggedIn}}>

          {isLoanding ?<p className='bg-main_BLACK'>Загрузка...</p>:<Pages/>} 

          </LoginStatusContext.Provider>
       

          <ActionPages setAction={setAction} actionPage={currentAction}/>

        </ActionContext.Provider>

      </BrowserRouter>
    </div>
  )
}

export default App 
