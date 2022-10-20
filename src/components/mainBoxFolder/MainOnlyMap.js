import React, { useEffect } from 'react';
import MapDiscription from './MapDiscription';

export default function MainOnlyMap({ scriptIndex }) {
  const urls = [
    //wood map
    'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A4a221686dbf5fd263c2c7cf067e14d9cf30e4a511542453c1b9c0d6a074f3373&amp;width=100%&amp;height=100%&amp;lang=ru_RU&amp;scroll=true',
    //solar
    'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9de8096eb46d0ace793bdd19ee894c2dd17324dcc68599f5bf9604dd26e2c89d&amp;width=100%&amp;height=100%&amp;lang=ru_RU&amp;scroll=true',
    //wind
    'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A1c5ea34a91ac050694549da76b4fa8f43a6e59c0577ca39a16f7e118449827f1&amp;width=100%&amp;height=100%&amp;lang=ru_RU&amp;scroll=true',
    //termal
    'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A2d808e71779a8cab3361e96dca0aa41eef58e43eeeac5e356382e4eb9fa2baef&amp;width=100%&amp;height=100%&amp;lang=ru_RU&amp;scroll=true',
  ];
  useEffect(() => {
    const mapWay = document.getElementById('ya-map');
    mapWay.innerHTML = '';
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.async = true;
    script.src = urls[scriptIndex - 3];
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
      <MapDiscription scriptIndex={scriptIndex} />
    </div>
  );
}
