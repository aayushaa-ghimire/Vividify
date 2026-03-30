import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel() {
  const [progress1, setProgress1] = React.useState(10);
  const [progress2, setProgress2] = React.useState(10);
  const [progress3, setProgress3] = React.useState(10);
  const [progress4, setProgress4] = React.useState(10);

  React.useEffect(() => {
    const timer1 = setInterval(() => {
      setProgress1((prevProgress) => (prevProgress >= 95 ? 95 : prevProgress + 10));
    }, 100);
    const timer2 = setInterval(() => {
      setProgress2((prevProgress) => (prevProgress >= 90 ? 90: prevProgress + 10));
    }, 100);
    const timer3 = setInterval(() => {
      setProgress3((prevProgress) => (prevProgress >= 88 ? 88 : prevProgress + 10));
    }, 100);
    const timer4 = setInterval(() => {
      setProgress4((prevProgress) => (prevProgress >= 92 ? 92 : prevProgress + 10));
    }, 100);
    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
      clearInterval(timer4);
    };
  }, []);

  return (
    <div className='flex flex-col w-full px-[15vw] justify-center mb-[6vw] '>
      <div>
        <h1>Our ....</h1>
      </div>
    <Box sx={{ width: '100%' }} className='flex flex-col gap-[2vw] w-fit px-[4vw] py-[3vw] border-1 border-[#dce5f5] bg-[#f4f8ff] shadow-lg rounded-3xl hover:scale-105 duration-100 ease-in-out transition-transform'>
      <div className='flex flex-col gap-[2vw]  '>

        <div className='grid grid-cols-2 gap-[2vw]'>
          <div><h4 className="text-sm font-bold tracking-[0.2em] uppercase">Scalable Web Solutions</h4></div>
          <div>
            <LinearProgressWithLabel value={progress1}  />
          </div>
        </div>
        
        
        <div className='grid grid-cols-2 gap-[2vw]' >
          <h4 className="text-sm font-bold tracking-[0.2em] uppercase">Search Visibility Growth</h4>
          <LinearProgressWithLabel value={progress2} />
        
        </div>
        <div className='grid grid-cols-2 gap-[2vw]'>
          <div><h4 className="text-sm font-bold tracking-[0.2em] uppercase">Online Brand Presence</h4></div>
          <LinearProgressWithLabel value={progress3} />
        </div>
        <div className='grid grid-cols-2 gap-[2vw]'>
          <div><h4 className="text-sm font-bold tracking-[0.2em] uppercase">Performance & Speed Enhancement </h4></div>
          <LinearProgressWithLabel value={progress4} />
        </div>
      </div>
    </Box>
    </div>
  );
}
