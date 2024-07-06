import React from 'react'
import TrackPortative from './TrackPortative'

export default function TracksContainer() {
  return (
    <div className='h-full'>
        <ul>
            <TrackPortative></TrackPortative>
            <TrackPortative></TrackPortative>
            <TrackPortative></TrackPortative>
            <TrackPortative></TrackPortative>
        </ul>
    </div>
  )
}
