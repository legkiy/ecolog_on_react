import { FC, useEffect } from 'react';

interface IYaMap {
  scriptIndex: number;
}

const YaMap: FC<IYaMap> = ({ scriptIndex }) => {
  const urls = [
    //now script with cherem
    'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A348ab2921a417af486e1c724d73b0ff8f0b8af9d2e9d6dc77cb9b93eba8122cb&amp;width=100%&amp;height=100%&amp;lang=ru_RU&amp;scroll=true',
    //coal script
    'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ad23699d514f7cbf0166cf175a2c869a086c4ec4eb01d4d6db923ea3e45a7bbcb&amp;width=100%&amp;height=100%&amp;lang=ru_RU&amp;scroll=true',
    //electro script
    'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A589b3831b444362c71bee9acd47159602001b3c2a8755c949c6539bf4c106236&amp;width=100%&amp;height=100%&amp;lang=ru_RU&amp;scroll=true',
    //gas script
    'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A752e951aaa597af01c5a6e9fcf7774908c7fdde94a7994011ef16124b910fdb5&amp;width=100%&amp;height=100%&amp;lang=ru_RU&amp;scroll=true',
    //renew energy
    'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ad45033bef372af85fe0bedbf969feb6b64fc3687248356d0a89376585a7e949e&amp;width=100%&amp;height=100%&amp;lang=ru_RU&amp;scroll=true',
  ];

  useEffect(() => {
    const mapWay = document.querySelector(`#ya-map-${scriptIndex}`);
    mapWay!.innerHTML = '';
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = urls[scriptIndex] || urls[1];
    script.async = true;
    mapWay!.appendChild(script);
  }, [scriptIndex]);

  return (
    <div className="right-box">
      <h2 className="banner">
        Расположение объектов энергетической инфраструктуры
      </h2>
      <div className="ya-map" id={`ya-map-${scriptIndex}`}></div>
    </div>
  );
};
export default YaMap;
