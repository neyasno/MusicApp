
import { useEffect, useState } from 'react'
import ContentLine, { IItemServer } from '../MainContentComponents/ItemComponents/ContentLine'
import { IItem } from '../MainContentComponents/ItemComponents/Item'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

type TContentCollection = {
  id : string ,
  title : string , 
  type_of : string , 
  items : IItemServer[]
}

export default function ContentCollection() {

  const [data , setDividedData] = useState<{data : IItemServer[][] , isRounded : boolean}>({data:[],isRounded:false})

  const location = useLocation()

  useEffect(()=>{

    const url = "http://localhost:8080/api" + location.pathname
    
    axios.get(url).then((resp)=>{
      let data = divideData(resp.data["items"] , 7)
      setDividedData({
        data : data , 
        isRounded : resp.data["type_of"]=="AUTHORS"? true : false
      })
    })

  },[])

  return (
      <section>
          <div className='p-4 pt-0'>
              {data.data.map((item , key) =>(
                  <ContentLine title='' id='' type='' items={item} key={key} isRounded={data.isRounded}></ContentLine>
              ))}
          </div>
      </section>
  )
}

const divideData =( data : IItemServer[] , parts : number) =>{

  let dataBlock = [];
  let dividedData = [];
  let dataBlockAmount = data.length/parts;

  for(let i = 0 ; i < (dataBlockAmount) ; i++){
      for(let j = 0 ; j < parts ; j++){
          let clearItem = data.pop(); 
          if(clearItem){
              dataBlock.push( clearItem )
          }   
      }
      dividedData.push(dataBlock);
      dataBlock = [];
  }

  console.log(dividedData)

  
  return dividedData;
}