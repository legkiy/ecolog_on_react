import React from 'react';
import { useEffect } from 'react';

export default function YaMap({ scriptIndex }) {
  const urls = [
    //2 map  with baikal ecolog border
    'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9652247e6b84ac970072b95d77fbe77dca40ca7410991b61d9a5ed0e96fab8f6&amp;width=100%&amp;height=100%&amp;lang=ru_RU&amp;scroll=true',
    'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9652247e6b84ac970072b95d77fbe77dca40ca7410991b61d9a5ed0e96fab8f6&amp;width=100%&amp;height=100%&amp;lang=ru_RU&amp;scroll=true',
    //map with LAP
    'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A8cb571e2838a57fe3900df867bc6ea8ccb01643e902d92b8ebfc8a5a00a30528&amp;width=100%&amp;height=100%&amp;lang=ru_RU&amp;scroll=true',
  ];

  useEffect(() => {
    const mapWay = document.getElementById('ya-map');
    mapWay.innerHTML = '';
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src =
      urls[scriptIndex] ||
      'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9652247e6b84ac970072b95d77fbe77dca40ca7410991b61d9a5ed0e96fab8f6&amp;width=100%&amp;height=100%&amp;lang=ru_RU&amp;scroll=true';
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
