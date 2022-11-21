import React from 'react';
import { useEffect } from 'react';

export default function YaMap({ scriptIndex }) {
  const urls = [
    //now script with cherem
    'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A348ab2921a417af486e1c724d73b0ff8f0b8af9d2e9d6dc77cb9b93eba8122cb&amp;width=100%&amp;height=100%&amp;lang=ru_RU&amp;scroll=true',
    //coal script
    'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A964b525d13d22f3e62d0094cd7e27e1c78a69e184fc959859336134baf6a4631&amp;width=100%&amp;height=100%&amp;lang=ru_RU&amp;scroll=true',
    //map with LAP
    'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A8cb571e2838a57fe3900df867bc6ea8ccb01643e902d92b8ebfc8a5a00a30528&amp;width=100%&amp;height=100%&amp;lang=ru_RU&amp;scroll=true',
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
