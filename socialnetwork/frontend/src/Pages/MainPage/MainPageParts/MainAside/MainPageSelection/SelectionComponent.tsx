import React from 'react'
import { Link } from 'react-router-dom'

export default function SelectionComponent({link , svg ,text} : {link : string , svg : string , text : string}) {
    return(
        <Link to={ link }>
          <div className="flex pt-6 items-center group">
              <div className="pr-4 ">
                <svg data-encore-id="icon" className="fill-main_l_grey group-hover:fill-main_WHITE" role="img" aria-hidden="true" viewBox="0 0 24 24" height="27">
                  <path d={svg}></path>
                </svg>
              </div>
              <p className="group-hover:text-main_WHITE">
                {text}
              </p>
          </div>
        </Link>
      )
}