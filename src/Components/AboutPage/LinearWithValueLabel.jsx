
import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress 
          variant="determinate" 
          {...props} 
          sx={{ height: 10, borderRadius: 5 }} 
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
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
    <div className='flex flex-col w-full px-[5vw] justify-center mb-30'>
      <Box 
        sx={{ width: '100%' }} 
        className='flex flex-col gap-10 w-full p-12 border border-blue-100 bg-white shadow-[0_20px_50px_rgba(59,130,246,0.15)] rounded-[3rem] hover:scale-[1.01] duration-500 ease-in-out transition-transform'
      >
        <div className='flex flex-col gap-10'>

          <div className='grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 items-center'>
            <div><h4 className="text-xs font-black tracking-[0.2em] uppercase text-slate-500">Scalable Web Solutions</h4></div>
            <LinearProgressWithLabel value={progress1}  />
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 items-center' >
            <h4 className="text-xs font-black tracking-[0.2em] uppercase text-slate-500">Search Visibility Growth</h4>
            <LinearProgressWithLabel value={progress2} />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 items-center'>
            <div><h4 className="text-xs font-black tracking-[0.2em] uppercase text-slate-500">Online Brand Presence</h4></div>
            <LinearProgressWithLabel value={progress3} />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 items-center'>
            <div><h4 className="text-xs font-black tracking-[0.2em] uppercase text-slate-500">Performance & Speed Enhancement </h4></div>
            <LinearProgressWithLabel value={progress4} />
          </div>

        </div>
      </Box>
    </div>
  );
}