import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Label,
  Cell,
} from 'recharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faChartSimple } from '@fortawesome/free-solid-svg-icons';
import CustomTooltip from './LineChart';


const GraphCard = () => {
  const [showSearchPopup, setShowSearchPopup] = useState(false);
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [chartType, setChartType] = useState('bar');
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  const toggleChartType = (type) => {
    setChartType(type);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.aqi.in/api/v1/getLocationHistory24Hourinterview', {
          headers: {
            'Content-Type': 'application/json',
            locationid: 'PLLODA000004',
            searchtype: 'locationId',
            sendevid: 'AQI-IN',
          },
        });

        const responseData = response.data;
        console.log('API Response Data:', responseData);

        const locationData = responseData.Table.Data[0];
        console.log('Location Data:', locationData);
        setData1(locationData);

        const chartData = locationData.averageArray.map((value, index) => ({
          time: locationData.timeArray2[index],
          PM10: value,
        }));
        console.log('Chart Data:', chartData);

        setData(chartData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const popupRef = useRef(null);

  const getLineColor = (pm10Value) => {
    if (pm10Value <= 50) {
      return 'green'; 
    } else if (pm10Value <= 100) {
      return 'yellow'; 
    } else if (pm10Value <= 150) {
      return 'orange'; 
    } else {
      return 'red'; 
    }
  };

  const CustomDot = (props) => {
    const { cx, cy, stroke, payload } = props;

    return (
      <circle
        cx={cx}
        cy={cy}
        r={4}
        fill={getLineColor(payload.PM10)} // Set the dot color based on PM10 data
        stroke={stroke}
      />
    );
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        
        setShowSearchPopup(false);
      }
    };

    
    if (showSearchPopup) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
     
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [showSearchPopup]);

  const buttons = [
    {
      label: "cityName",
      icon:
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="6.85" cy="6.85" r="6.85" fill="#667580" />
          <path d="M13.3008 6.65039L-0.000188351 6.65039" stroke="white" stroke-width="2.66023" />
          <path d="M6.65039 0L6.65039 13.301" stroke="white" stroke-width="2.66023" />
        </svg>

    },
    {
      label: 'Add to Compare',
      onClick: () => setShowSearchPopup(true),
      icon:
        <svg
          width="10"
          height="10"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 h-3 text-gray-600"
        >
          <rect
            x="0.432149"
            y="0.432149"
            width="14.6931"
            height="14.6931"
            rx="4.75364"
            stroke="#667580"
            strokeWidth="0.864298"
          />
          <path
            d="M7.78125 4.32129V11.2357"
            stroke="#667580"
            strokeWidth="1.03716"
            strokeLinecap="round"
          />
          <path
            d="M4.32422 7.77832L11.2386 7.77832"
            stroke="#667580"
            strokeWidth="1.03716"
            strokeLinecap="round"
          />
        </svg>
    },
    {
      label: 'Add to Compare',
      onClick: () => setShowSearchPopup(true),
      icon:
        <svg
          width="10"
          height="10"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 h-3 text-gray-600"
        >
          <rect
            x="0.432149"
            y="0.432149"
            width="14.6931"
            height="14.6931"
            rx="4.75364"
            stroke="#667580"
            strokeWidth="0.864298"
          />
          <path
            d="M7.78125 4.32129V11.2357"
            stroke="#667580"
            strokeWidth="1.03716"
            strokeLinecap="round"
          />
          <path
            d="M4.32422 7.77832L11.2386 7.77832"
            stroke="#667580"
            strokeWidth="1.03716"
            strokeLinecap="round"
          />
        </svg>
    },
    {

      icon: <FontAwesomeIcon icon={faChartSimple} />,
      onClick: () => toggleChartType('bar'),
    },
    {

      icon: <FontAwesomeIcon icon={faChartLine} />,
      onClick: () => toggleChartType('line'),
    },
    {
      label: (
        <select className="border border-dimgray-100 rounded py-1 px-2 m-1 " style={{ minWidth: 'fit-content' }}>
          <option value="option4">PM10μg/m3</option>
          <option value="option5">PM1μg/m3</option>
          <option value="option6">PM2.5μg/m3</option>
          <option value="option6">CO2μg/m3</option>
          <option value="option6">NO2μg/m3</option>
        </select>
      ),
      icon: null
    },
    {
      label: (
        <select className="border border-dimgray-100 rounded py-1 px-2 m-1" style={{ minWidth: 'fit-content' }}>
          <option value="option4">24 Hours</option>
          <option value="option5">7 Days</option>
          <option value="option6">1 Month</option>
        </select>
      ),
      icon: null
    },
  ];


  const svgStyle = {
    maskType: 'alpha',
    maskUnits: 'userSpaceOnUse',
    x: 0,
    y: 0,
    width: 29,
    height: 28,
  };

  const getMinValueColorClass = (minValue) => {
    if (minValue <= 50) {
      return 'bg-green-500';
    } else if (minValue <= 100) {
      return 'bg-yellow-500';
    } else if (minValue <= 150) {
      return 'bg-orange-500';
    } else {
      return 'bg-red-500';
    }
  };

  const getMinValueTextColorClass = (minValue) => {
    if (minValue <= 50) {
      return 'text-green-500';
    } else if (minValue <= 100) {
      return 'text-yellow-500';
    } else if (minValue <= 150) {
      return 'text-orange-500';
    } else {
      return 'text-red-500';
    }
  };

  const getMaxValueColorClass = (maxValue) => {
    if (maxValue <= 50) {
      return 'bg-green-500';
    } else if (maxValue <= 100) {
      return 'bg-yellow-500';
    } else if (maxValue <= 150) {
      return 'bg-orange-500';
    } else {
      return 'bg-red-500';
    }
  };

  const getMaxValueTextColorClass = (maxValue) => {
    if (maxValue <= 50) {
      return 'text-green-500';
    } else if (maxValue <= 100) {
      return 'text-yellow-500';
    } else if (maxValue <= 150) {
      return 'text-orange-500';
    } else {
      return 'text-red-500';
    }
  };


  const normalButtonClasses = 'bg-white text-custom-gray font-bold py-1 rounded m-1 border hover:bg-whitesmoke-200 hover:text-white hover:border-transparent flex items-center';
  const activeButtonClasses = 'bg-black text-white font-bold py-1 rounded m-1 hover:bg-gray-800 flex items-center';


  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl" >
      <div className={`p-8 relative ${showSearchPopup ? 'filter blur-sm' : ''}`} >
        <div className=" tracking-wide text-sm text-black-mad font-semibold">Historic Data <span className="text-custom-gray">in </span></div>
        <div className="mt-4 flex flex-wrap justify-between">
          <div className="flex flex-wrap">
            {buttons.slice(0, 3).map((button, index) => (
              <button
                key={index} onClick={() => {
                  button.onClick();
                  setActiveButtonIndex(index);
                }}

                className="bg-transparent border text-custom-gray font-bold py-1 rounded m-1 hover:bg-whitesmoke-200 hover:text-white hover:border-transparent flex items-center"
                style={{ minWidth: 'fit-content' }}
              >
                {button.icon && (
                  <span className="mr-2">{button.icon}</span>
                )}
                {button.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-evenly">
            <>
              {buttons.slice(3, 5).map((button, index) => (
                <button
                  key={index}
                  onClick={() => {
                    button.onClick();
                    setActiveButtonIndex(index);
                  }}
                  className={`${activeButtonIndex === index ? activeButtonClasses : normalButtonClasses
                    }`}
                  style={{ minWidth: 'fit-content' }}
                >
                  {button.icon && <span className="mr-2">{button.icon}</span>}
                  {button.label}
                </button>
              ))}

            </><>
              {buttons.slice(5).map((button, index) => (
                <div key={index} >{button.label}</div>
              ))}
            </>
          </div>
        </div>

        {chartType === 'bar' && (
          <div className="mt-4" style={{ width: '100%', height: '300px' }}>
            <ResponsiveContainer>
              <BarChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 20,
                }}
              >
                <CartesianGrid vertical={false} strokeDasharray="4 4" />
                <XAxis dataKey="time" label={{ value: 'Time', position: 'insideBottom', offset: -10 }} axisLine={false} />
                <YAxis
                  dataKey="PM10"
                  label={{
                    value: 'PM10 (μg/m³)',
                    angle: -90,
                    position: 'insideLeft',
                  }}
                  axisLine={false}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey="PM10"
                  barSize={20}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={getLineColor(entry.PM10)}
                    />
                  ))}
                </Bar>
                <ReferenceLine y={15} stroke="#3988FF" label={<Label value="15" position="left" />} />
                <ReferenceLine y={0} stroke="gray" strokeDasharray="3 3" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {chartType === 'line' && (<div className="mt-4" style={{ width: '100%', height: '300px' }}>
          <ResponsiveContainer>
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 20,
              }}
            >
              <CartesianGrid vertical={false} strokeDasharray="4 4" />
              <XAxis dataKey="time" label={{ value: 'Time', position: 'insideBottom', offset: -10 }} axisLine={false} />
              <YAxis
                dataKey="PM10"
                label={{
                  value: 'PM10 (μg/m³)',
                  angle: -90,
                  position: 'insideLeft',
                }}
                axisLine={false}
              />

              <Tooltip content={<CustomTooltip />} />

              <Line
                type="monotone"
                dataKey="PM10"
                dot={<CustomDot />}
                strokeWidth={2}
                
              >
                {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={getLineColor(entry.PM10)}
                    />
                  ))}
              </Line>

              <ReferenceLine y={15} stroke="lightblue" label={<Label value="15" position="left" />} />
              <ReferenceLine y={0} stroke="gray" strokeDasharray="3 3" />
            </LineChart>
          </ResponsiveContainer>
        </div>)}
      </div>
      <div className='flex justify-between px-8'>
        <p className='flex justify-center items-center'><span className="rounded-full h-2 w-2 bg-blue-500 inline-block mx-1"></span><span>WHO Guidelines </span>
          <svg
            width="29"
            height="28"
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-600"
          >
            <mask
              id="mask0_0_4140"
              style={svgStyle}
            >
              <rect x="0.666992" width="28" height="28" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_0_4140)">
              <path
                d="M14.667 17.5C14.667 15.9965 14.667 13.65 14.667 13.65M14.667 21C18.517 21 21.667 17.85 21.667 14C21.667 10.15 18.517 7 14.667 7C10.817 7 7.66699 10.15 7.66699 14C7.66699 17.85 10.817 21 14.667 21Z"
                stroke="#667580"
                stroke-width="1.05"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.667 11.5483V11.1983"
                stroke="#667580"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg></p>

        <p>
          <span className={`rounded-full h-2 w-2 ${getMinValueColorClass(data1.minValue)} inline-block mx-1`}></span>
          <span className={getMinValueTextColorClass(data1.minValue)}>min </span>
          <span>{data1.minValue} μg/m3</span>
          <span className={`rounded-full h-2 w-2 ${getMaxValueColorClass(data1.maxValue)} inline-block mx-1`}></span>
          <span className={getMaxValueTextColorClass(data1.maxValue)}>max </span>
          <span>{data1.maxValue} μg/m3</span>
        </p>



      </div>
      {/* Pop-up/modal */}
      {showSearchPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="bg-white p-4 rounded shadow-md" ref={popupRef}>
            <h2 className="text-xl font-semibold mb-4">Search and Select Options</h2>
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded p-2 mb-4"
            />
            
            <button
              onClick={() => {
                
                setShowSearchPopup(false);
              }}
              className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default GraphCard;

