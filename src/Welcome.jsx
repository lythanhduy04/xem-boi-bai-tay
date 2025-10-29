import { TypeAnimation } from "react-type-animation";
import TarotIMG from './assets/tarot-98.png';

function Welcome({ clickKhamPha }) {
  return (
    <div className="w-full">
      <img className="block ml-auto mr-auto mb-5" src={TarotIMG} alt="Tarot" />
      <div>
        <TypeAnimation
          sequence={[
            "Vận mệnh của bạn sẽ ra sao?",
            1000,
          ]}
          speed={75}
          wrapper="h1"
          className="font-mono"
          repeat={Infinity}
        />
      </div>
      <button className="mt-5 font-mono" onClick={clickKhamPha}>
        Bắt đầu khám phá
      </button>
    </div>
  );
}

export default Welcome;
