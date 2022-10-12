import React from 'react';

export default function MapDiscription({ scriptIndex }) {
  if (scriptIndex === 4) {
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
  } else if (scriptIndex === 5) {
    return (
      <div className="footnote">
        <ul>
          <li>WS &mdash; скорость ветра, м/с</li>
        </ul>
      </div>
    );
  }
}