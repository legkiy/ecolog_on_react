import React from 'react';
import { useEffect } from 'react';

export default function YaMap({ scriptIndex }) {
  const urls = [
    //now script with cherem
    'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A348ab2921a417af486e1c724d73b0ff8f0b8af9d2e9d6dc77cb9b93eba8122cb&amp;width=100%&amp;height=100%&amp;lang=ru_RU&amp;scroll=true',
    //coal script
    'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A51a235b9121f62a63e2477d0e6d4cfbd1f173fe1fdb5498ff2a4a8dc44fc9470&amp;width=500&amp;height=400&amp;lang=ru_RU&amp;scroll=true',
    //electro script
    'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A2b9618de49aa18cfa2c464d8c17e05698372573f0cb6402418a6b08922a00612&amp;width=500&amp;height=400&amp;lang=ru_RU&amp;scroll=true',
    //gas script
    '',
    //renew energy
    '',
  ];

  useEffect(() => {
    const mapWay = document.getElementById('ya-map');
    mapWay.innerHTML = '';
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = urls[scriptIndex] || urls[1];
    script.async = true;
    mapWay.appendChild(script);
  });

  return (
    <div className="right-box">
      <h2 className="banner">
        Расположение объектов энергетической инфраструктуры
      </h2>
      <div className="ya-map" id="ya-map"></div>
    </div>
  );
}
