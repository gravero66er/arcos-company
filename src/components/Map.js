import React from "react";
import { YMaps, Map } from "react-yandex-maps";

function YaMap() {
  return (
    <YMaps>
      <div>
        <Map width='100%' height='491px' defaultState={{ center: [56.834010, 60.621610], zoom: 17 }} />
      </div>
    </YMaps>
  );
}

export default YaMap;