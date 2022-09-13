import React,{useEffect} from 'react';

export default function MainOnlyMap({scriptIndex}) {
  const urls=[
    "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A4a221686dbf5fd263c2c7cf067e14d9cf30e4a511542453c1b9c0d6a074f3373&amp;width=100%&amp;height=100%&amp;lang=ru_RU&amp;scroll=true",
  ]
  useEffect(() => {
    const mapWay = document.getElementById('ya-map');
    mapWay.innerHTML = '';
    const script = document.createElement('script');
    script.src =
      urls[scriptIndex-3]
    script.async = true;
    mapWay.appendChild(script);
  });

  return (
    <div className="only-map-box">
      <h2 className="banner">
        Расположение объектов энергетической инфраструктуры
      </h2>
      <div className='ya-map-box'>
      <div className="ya-map" id="ya-map"></div>
      </div>
    </div>
  );
}
