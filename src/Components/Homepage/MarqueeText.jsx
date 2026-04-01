import MarqueeModule from 'react-fast-marquee';
import AnimatedText from './AnimatedText';

const Marquee = MarqueeModule.default;
const MarqueeText = () => {
  console.log(Marquee);
  return (
    <div>
      <Marquee autoFill speed={100}>
        <AnimatedText />
      </Marquee>
    </div>
  );
};

export default MarqueeText;
