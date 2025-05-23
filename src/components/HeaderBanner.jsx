import Marquee from 'react-fast-marquee';
import { JellyfishIcon } from './Icons';

const jellyfishIcons = ['j1', 'j2', 'j3', 'j4'];
const grupo = [
  <h3 key="1">ENVIOS GRATIS</h3>,
  <h3 key="2"><span>A PARTIR DE <strong>$500.000</strong></span></h3>,
  <h3 key="3" className="flex gap-2">
   {jellyfishIcons.map((id) => (
      <span key={id}>
        <JellyfishIcon size={16} />
      </span>
    ))}
  </h3>,
  <h3 key="4"><strong>AGUAS VIVAS</strong></h3>,
  <h3 key="5" className="flex gap-2">
   {jellyfishIcons.map((id) => (
      <span key={id}>
        <JellyfishIcon size={16} />
      </span>
    ))}
  </h3>,
];

export default function HeaderBanner() {
  return (
    <Marquee
      speed={100}
      gradient={false}
      className="bg-primary py-1 text-[#333] text-sm"
    >
      {/* Repite el grupo varias veces */}
      {[...Array(9)].flatMap((_, i) =>
        grupo.map((item, j) => (
          <div key={`${i}-${j}`} className="mx-4">
            {item}
          </div>
        ))
      )}
    </Marquee>
  );
}
