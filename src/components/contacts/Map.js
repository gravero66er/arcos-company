import React from 'react'
import { YMaps, Map } from 'react-yandex-maps'

function YaMap() {
  return (
    <YMaps>
      <div>
        <Map
          width="100%"
          height="491px"
          defaultState={{ center: [56.83401, 60.62161], zoom: 17 }}
        />
      </div>
    </YMaps>
  )
}

export default YaMap
