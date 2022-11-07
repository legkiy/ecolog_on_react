import React from 'react';

export default function MapDiscription({ scriptIndex }) {
  if (scriptIndex === 6) {
    return (
      <div className="footnote">
        <ul>
          <li>
            BHI &mdash; прямая солнечная радиация на горизонтальную поверхность,
            кВ*ч/м<sup>2</sup>/год;
          </li>
          <li>
            DHI &mdash; рассеянная солнечная радиация на горизонтальную
            поверхность, кВ*ч/м<sup>2</sup>/год;
          </li>
          <li>
            GHI &mdash; суммарная солнечная радиация на горизонтальную
            поверхность, кВ*ч/м<sup>2</sup>/год;
          </li>
        </ul>
      </div>
    );
  } else if (scriptIndex === 7) {
    return (
      <div className="footnote">
        <ul>
          <li>WS &mdash; скорость ветра, м/с</li>
        </ul>
      </div>
    );
  } else if (scriptIndex === 8) {
    return (
      <div className="footnote">
        <ul>
          <li>По каждой высоте указаа тумпература в &deg;C</li>
          <li>h &mdash; глубина измерения температуры</li>
        </ul>
      </div>
    );
  }
}
