import React, { useEffect } from 'react';

export default function MainOnlyMap({ scriptIndex }) {
  const urls = [
    //wood map
    'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A4a221686dbf5fd263c2c7cf067e14d9cf30e4a511542453c1b9c0d6a074f3373&amp;width=100%&amp;height=100%&amp;lang=ru_RU&amp;scroll=true',
    //solar and wind map
    'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A37d77bd26d859f7f3c97b9ba7a643ea9adde78afa6ab3567825212b16dfd74ea&amp;width=760&amp;height=513&amp;lang=ru_RU&amp;scroll=true',
  ];
  useEffect(() => {
    const mapWay = document.getElementById('ya-map');
    mapWay.innerHTML = '';
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = urls[scriptIndex - 3];
    script.async = true;
    mapWay.appendChild(script);
  });

  return (
    <div className="only-map-box">
      <h2 className="banner">
        Расположение объектов энергетической инфраструктуры
      </h2>
      <div className="ya-map-box">
        <div className="ya-map" id="ya-map"></div>
      </div>
    </div>
  );
}
