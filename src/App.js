import './App.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = 'your_api_token';
  const latitude = 'your_latitude';
  const longitude = 'your_longitude';

  useEffect(() => {
    const apiUrl = 'https://api.aqi.in/api/v1/getNearestLocationforinterview';


    const headers = {
      Authorization: `Bearer ${token}`,
      lat: 26.8467,
      lon: 80.9462,
    };

    axios.get(apiUrl, { headers })
      .then(response => {
        setData(response.data.Locations);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [latitude, longitude, token]);
  return (

    <header className="relative bg-gray w-full h-[85.69rem] overflow-hidden text-left text-[0.88rem] text-slategray-200 font-nunito-sans">
      <div className="absolute left-[0rem] w-[90.25rem] h-[30.38rem]">
        <iframe
          className="absolute left-[0rem] w-[90.25rem] h-[30.06rem] object-cover"
          alt=""
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.4563593971916!2d80.927927!3d26.8572383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfdbd930f6417%3A0x74d4784d9e8f5b2f!2sCivil%20Court%20Lucknow!5e0!3m2!1sen!2sin!4v1696418265457!5m2!1sen!2sin"
        />
        <div className="absolute left-[0rem] [background:linear-gradient(180deg,_rgba(209,_255,_207,_0.75),_rgba(197,_221,_130,_0.2))] w-[90.25rem] h-[30.06rem]" />
        <img
          className="absolute top-[19.13rem] left-[58.88rem] w-[1.25rem] h-[1.25rem]"
          alt=""
          src="/group-427320415.svg"
        />
        <img
          className="absolute top-[21.44rem] left-[50.94rem] w-[1.25rem] h-[1.25rem]"
          alt=""
          src="/group-427320416.svg"
        />
        <img
          className="absolute top-[18.31rem] left-[44.44rem] w-[1.25rem] h-[1.25rem]"
          alt=""
          src="/group-427320415.svg"
        />
        <img
          className="absolute top-[18.06rem] left-[33.63rem] w-[1.25rem] h-[1.25rem]"
          alt=""
          src="/group-427320416.svg"
        />
        <div className="absolute top-[16.06rem] left-[13.5rem] w-[12.19rem] h-[7.44rem] text-dimgray-100">
          <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-limegreen w-[0.88rem] h-[0.88rem]" />
          <div className="absolute top-[0.38rem] left-[1.31rem] w-[10.88rem] h-[7.06rem]">
            <div className="absolute  left-[0rem] rounded-md bg-white shadow-[5px_7px_8px_rgba(0,_0,_0,_0.05)] [backdrop-filter:blur(20px)] w-[10.88rem] h-[7.06rem]" />
            <div className="absolute top-[4.5rem] left-[10.31rem] [background:linear-gradient(-90deg,_rgba(190,_190,_190,_0.18),_#635e5e_46.15%,_rgba(190,_190,_190,_0.18))] w-[9.81rem] h-[0.06rem] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.17]" />
            <div className="absolute top-[0.94rem] left-[5.31rem] leading-[1.13rem] font-semibold">
              {data[0]?.cityName}
            </div>
            <div className={`absolute top-[2.44rem] left-[5.31rem] leading-[1.13rem] font-extrabold ${data[0]?.airComponents.find(sensor => sensor.sensorName === 'aqi')?.sensorData <= 50
              ? ' text-green-500'
              : data[0]?.airComponents.find(sensor => sensor.sensorName === 'aqi')?.sensorData <= 100
                ? 'text-yellow-500 '
                : 'text-orange-500 '
              }`}>
              {data[0]?.airComponents.find(sensor => sensor.sensorName === 'aqi')?.sensorData <= 50
                ? 'Good'
                : data[0]?.airComponents.find(sensor => sensor.sensorName === 'aqi')?.sensorData <= 100
                  ? 'Moderate'
                  : 'Unhealthy'
              }
            </div>


            <div className="absolute top-[5.25rem] left-[1rem] text-[0.82rem] font-semibold flex items-end w-[2.59rem] h-[1.01rem]">
              PM2.5
            </div>
            <div className="absolute top-[5.13rem] left-[6.38rem] w-[3.31rem] h-[1.13rem] text-[1.05rem] text-darkslategray">
              <div className="absolute top-[0.06rem] left-[0rem] font-extrabold flex items-center w-[1.52rem] h-[0.88rem]">
                {data[0]?.airComponents.find(sensor => sensor.sensorName === 'pm25')?.sensorData}
              </div>
              <div className="absolute top-[0rem] left-[1.44rem] text-[0.7rem] flex items-center w-[1.88rem] h-[1.13rem]">
                μg/m3
              </div>
            </div>
            <div className={`absolute top-[0.63rem] rounded-[50%] left-[0.94rem] w-[3.25rem] h-[3.25rem] text-[0.84rem] ${data[0]?.airComponents.find(sensor => sensor.sensorName === 'aqi')?.sensorData <= 50
              ? 'bg-green-500' // Green for AQI <= 50
              : data[0]?.airComponents.find(sensor => sensor.sensorName === 'aqi')?.sensorData <= 100
                ? 'bg-yellow-500' // Yellow for AQI <= 100
                : data[0]?.airComponents.find(sensor => sensor.sensorName === 'aqi')?.sensorData <= 150
                  ? 'bg-orange-500' // Orange for AQI <= 150
                  : data[0]?.airComponents.find(sensor => sensor.sensorName === 'aqi')?.sensorData <= 200
                    ? 'bg-red-500' // Red for AQI <= 200
                    : 'bg-pink-500' // Pink for AQI > 200
              }`}>
              <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-white w-[3.25rem] h-[3.25rem]" />
              <div className="absolute top-[0rem] left-[0rem] rounded-[50%] w-[3rem] h-[3.25rem]" />
              <div className="absolute top-[0.81rem] left-[1.19rem] leading-[1.08rem] font-extrabold">
                {data[0]?.airComponents.find(sensor => sensor.sensorName === 'aqi')?.sensorData}
              </div>
              <b className="absolute top-[1.69rem] left-[1.19rem] text-[0.5rem] leading-[1.08rem] text-dimgray-100">
                AQI
              </b>
            </div>


          </div>
        </div>
        <img
          className="absolute top-[15.88rem] left-[13.31rem] w-[1.25rem] h-[1.25rem]"
          alt=""
          src="/group-427320415.svg"
        />
        <button className="absolute top-[8.88rem] left-[75.88rem] w-[8.13rem] h-[2.38rem] text-[0.8rem] text-dimgray-200 rounded-[9.77px] bg-white shadow-[6px_4px_13px_rgba(0,_0,_0,_0.05)] box-border border-[0.4px] border-solid border-slategray-300">
          <span className="absolute top-[26.32%] left-[41.54%] font-semibold">Map</span>
          <img
            className="absolute top-[0.63rem] left-[1.13rem] w-[1.88rem] h-[0.92rem] object-cover"
            alt=""
            src="/aqi-logo-original-1@2x.png"
          />
          <img
            className="absolute h-[49.02%] w-[14.33%] top-[23.68%] right-[17.21%] bottom-[27.29%] left-[68.46%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group-51.svg"
          />
        </button>

        <div className="absolute top-[8.88rem] left-[38.94rem] w-[34.5rem] h-[2.63rem] text-[0.81rem]">
          <div className="absolute top-0 left-0 rounded-6xs bg-white shadow-[0px_7px_19px_rgba(0,_0,_0,_0.05)] w-full h-full" />
          <img
            className="absolute h-[33.82%] w-[2.57%] z-10 top-[34.02%] left-[3.31%] max-w-full overflow-hidden max-h-full opacity-[0.52]"
            alt=""
            src="/group-427319290.svg"
          />
          <input
            className="absolute pl-10 top-[0rem] left-[0rem] rounded-6xs bg-white shadow-[0px_7px_19px_rgba(0,_0,_0,_0.05)] w-[34.5rem] h-[2.63rem]"
            type="search"
            name="search"
            placeholder="Search"
          />
        </div>

        <div className="absolute top-[3.8rem] left-[1.3rem] bg-white w-[90%] h-[3.06rem] flex flex-row items-center justify-center rounded-md">
          {data.map((location, index) => {
            const aqi = location.airComponents.find(sensor => sensor.sensorName === 'AQI-IN')?.sensorData;
            let textColor = "";

            if (aqi < 50) {
              textColor = "green"; // Green text for AQI below 50
            } else if (aqi >= 50 && aqi < 100) {
              textColor = "yellow"; // Yellow text for AQI between 50 and 99
            } else if (aqi >= 100) {
              textColor = "orange"; // Orange text for AQI 100 and above
            }

            const textStyle = { color: textColor };

            return (
              <div key={index} className="flex flex-row items-center mr-4">
                <span className="mr-2">{location.locationName} :</span>
                <span className="mr-2" style={textStyle}>{aqi}</span> AQI-IN
                <div className="w-[1.69rem] h-[0.13rem] transform rotate-90 origin-top-left">
                  <div className="border-[1px] border-gradient to-[#635e5e] via-[rgba(190,190,190,0.18)] from-[rgba(190,190,190,0.18)] border-opacity-17 w-full h-full"></div>
                </div>
              </div>
            );
          })}
        </div>



        <div className="absolute left-[0rem] w-[90rem] h-[3.88rem] text-[0.94rem]">
          <div className="absolute top-[0rem] left-[0rem] bg-white shadow-[0px_1px_13px_rgba(0,_0,_0,_0.07)] w-[90rem] h-[3.88rem]" />
          <div className="absolute top-[1.38rem] left-[71.63rem] w-[4.26rem] h-[1.13rem] text-[0.88rem] text-dimgray-200">
            <b className="absolute top-[0rem] left-[1.44rem] leading-[1.13rem]">
              Eng
            </b>
            <img
              className="absolute top-[0rem] left-[0rem] w-[1.13rem] h-[1.13rem] overflow-hidden"
              alt=""
              src="/iconsaxlinearglobal.svg"
            />
            <img
              className="absolute h-[36.13%] w-[18.58%] top-[34.72%] right-[-1.1%] bottom-[29.15%] left-[82.52%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector87.svg"
            />
          </div>
          <div className="absolute top-[2.88rem] left-[77.44rem] [background:linear-gradient(-90deg,_rgba(190,_190,_190,_0.18),_#635e5e_46.15%,_rgba(190,_190,_190,_0.18))] w-[1.81rem] h-[0.13rem] [transform:_rotate(-90deg)] [transform-origin:0_0] opacity-[0.17]" />
          <div className="absolute top-[0.69rem] left-[76.88rem] w-[6.5rem] h-[2.5rem] text-[1rem] text-white">
            <div className="absolute top-[0rem] left-[0rem] rounded-lg bg-cornflowerblue shadow-[0px_1px_13px_rgba(0,_0,_0,_0.07)] w-[6.5rem] h-[2.5rem]" />
            <b className="absolute top-[0.81rem] left-[2rem] leading-[1.13rem] flex items-center w-[2.69rem] h-[0.88rem]">
              Login
            </b>
          </div>
          <div className="absolute top-[3.69rem] left-[27.38rem] rounded-[10px] bg-cornflowerblue w-[2.5rem] h-[0.19rem]" />
          <img
            className="absolute h-[36.74%] w-[3.44%] top-[31.63%] right-[89.34%] bottom-[31.63%] left-[7.22%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/aqilogosvg.svg"
          />
          <div>
            <div className="absolute top-[1.38rem] left-[34.57rem] leading-[1.13rem] font-semibold flex items-center w-[3.72rem]">
              Ranking
            </div>
            <div className="absolute top-[1.38rem] left-[27.31rem] leading-[1.13rem] font-semibold">
              Home
            </div>
            <div className="absolute top-[1.38rem] left-[43rem] leading-[1.13rem] font-semibold flex items-center w-[4.05rem]">
              Monitors
            </div>
            <div className="absolute top-[1.19rem] left-[51.76rem] w-[6.77rem] h-[1.5rem]">
              <div className="absolute top-[0.19rem] left-[0rem] leading-[1.13rem] font-semibold flex items-center w-[4.65rem]">
                Resources
              </div>
              <img
                className="absolute top-[0rem] left-[5.18rem] w-[1.59rem] h-[1.5rem] overflow-hidden"
                alt=""
                src="/iconsaxlineararrowdown2.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[49.13rem] left-[12.69rem] w-[64.44rem] h-[29.25rem] text-[0.7rem] text-darkslategray">
        <div className="absolute top-[0.25rem] left-[0rem] rounded-smi bg-white shadow-[2px_6px_41px_rgba(0,_0,_0,_0.05)] w-[64.44rem] h-[29.25rem]" />
        <div className="absolute top-[3.19rem] left-[3.5rem] text-[1rem] leading-[1.61rem]">
          <span className="font-extrabold">Major Pollutants</span>
          <span className="text-slategray-200">
            <span className="font-semibold font-nunito-sans">{` in `}</span>
            <b>{data[0]?.cityName}</b>
          </span>
        </div>
        <div className="absolute top-[6.25rem] left-[3.5rem] w-[16.94rem] h-[4.13rem] text-[0.81rem] text-slategray-200">
          <div className="absolute top-[0.56rem] left-[0rem] w-[16.38rem] h-[3.56rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-[8.94px] bg-ghostwhite box-border w-[16.38rem] h-[3.56rem] border-[0.5px] border-solid border-lightsteelblue" />
            <div className="absolute top-[1.24rem] left-[4.24rem] font-semibold flex items-end w-[4.79rem]">
              PM2.5
            </div>
            <div className="absolute top-[1.14rem] left-[9.94rem] w-[3.85rem] h-[1.38rem] text-[1rem] text-darkslategray">
              <b className="absolute top-[0rem] left-[0rem] flex items-center w-[1.89rem]">
                {data[0]?.airComponents.find(sensor => sensor.sensorName === 'pm25')?.sensorData}
              </b>
              <div className="absolute top-[0.28rem] left-[2.01rem] text-[0.67rem] flex items-center w-[1.84rem]">
                μg/m3
              </div>
            </div>
            <div className="absolute h-[45.86%] w-[13.91%] top-[27.69%] right-[79.6%] bottom-[26.45%] left-[6.49%] text-[0.34rem] text-slategray-100">
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[34.45%] right-[16.71%] bottom-[61.49%] left-[80.06%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[32.16%] right-[7.84%] bottom-[63.78%] left-[88.94%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector1.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[17.67%] right-[5.3%] bottom-[78.28%] left-[91.48%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector2.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[19.69%] right-[27.79%] bottom-[76.25%] left-[68.99%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector3.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[28.11%] right-[57.43%] bottom-[67.84%] left-[39.34%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector4.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[68.01%] right-[37.75%] bottom-[27.93%] left-[59.02%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector5.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[70.04%] right-[75.4%] bottom-[25.9%] left-[21.37%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector6.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[82.15%] right-[73.45%] bottom-[13.8%] left-[23.32%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector7.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[77.89%] right-[49.4%] bottom-[18.05%] left-[47.37%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector8.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[33.64%] right-[39.34%] bottom-[62.31%] left-[57.44%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector9.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[29.56%] right-[47.26%] bottom-[66.39%] left-[49.52%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector10.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[85.1%] right-[18.32%] bottom-[10.84%] left-[78.45%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector11.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[66.43%] right-[14.84%] bottom-[29.52%] left-[81.94%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector12.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[29.91%] right-[32.31%] bottom-[66.04%] left-[64.47%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector13.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[17.67%] right-[36.64%] bottom-[78.28%] left-[60.14%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector14.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[39.98%] right-[28.7%] bottom-[55.96%] left-[68.08%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector15.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[10.19%] right-[14.3%] bottom-[85.76%] left-[82.47%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector16.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[22.87%] right-[12.75%] bottom-[73.07%] left-[84.03%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector17.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[41.62%] right-[5.24%] bottom-[54.32%] left-[91.54%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector18.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[54.31%] right-[3.7%] bottom-[41.64%] left-[93.07%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector19.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[75.6%] right-[12.68%] bottom-[20.34%] left-[84.09%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector20.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[73.58%] right-[28.51%] bottom-[22.37%] left-[68.26%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector21.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[79.92%] right-[34.35%] bottom-[16.03%] left-[62.43%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector22.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[86.26%] right-[26.97%] bottom-[9.68%] left-[69.8%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector23.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[67.98%] right-[54.64%] bottom-[27.96%] left-[42.13%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector24.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[68.85%] right-[65.84%] bottom-[27.09%] left-[30.93%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector25.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[81.04%] right-[63.63%] bottom-[14.9%] left-[33.15%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector26.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[36.86%] right-[61.28%] bottom-[59.08%] left-[35.5%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector27.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[28.11%] right-[21.28%] bottom-[67.84%] left-[75.5%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector28.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[85.68%] right-[56.7%] bottom-[10.27%] left-[40.07%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector29.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[87.71%] right-[88.54%] bottom-[8.24%] left-[8.23%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector30.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[90.31%] right-[79.87%] bottom-[5.63%] left-[16.9%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector31.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[9.06%] right-[47.83%] bottom-[86.89%] left-[48.95%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector32.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[18.56%] right-[52.09%] bottom-[77.39%] left-[44.68%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector33.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[5%] right-[38.27%] bottom-[90.95%] left-[58.51%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector34.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[30.14%] right-[73.64%] bottom-[65.81%] left-[23.14%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector35.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[39.64%] right-[77.89%] bottom-[56.31%] left-[18.88%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector36.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[39.64%] right-[69.22%] bottom-[56.31%] left-[27.56%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector37.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[66.17%] right-[90.23%] bottom-[29.77%] left-[6.55%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector38.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[75.68%] right-[94.49%] bottom-[20.27%] left-[2.28%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector39.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[62.12%] right-[80.68%] bottom-[33.83%] left-[16.1%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector40.svg"
              />
              <img
                className="absolute h-[4.05%] w-[3.22%] top-[75.68%] right-[85.82%] bottom-[20.27%] left-[10.95%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector41.svg"
              />
              <img
                className="absolute h-[101.57%] w-[101.13%] top-[-0.78%] right-[-0.56%] bottom-[-0.78%] left-[-0.56%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector42.svg"
              />
              <div className="absolute h-[31.07%] w-[57.65%] top-[43.18%] left-[29.33%] font-semibold inline-block">
                PM2.5
              </div>
            </div>
          </div>
          <div className="absolute top-[1.59rem] left-[16.14rem] rounded-[8.94px] bg-limegreen w-[0.22rem] h-[1.51rem]" />
          <img
            className="absolute h-[27.25%] w-[6.64%] top-[0%] right-[0%] bottom-[72.75%] left-[93.36%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/exclamationmarksvgrepocom-1.svg"
          />
        </div>
        <div className="absolute top-[6.81rem] left-[24.13rem] w-[16.38rem] h-[3.56rem] text-[0.41rem] text-slategray-200">
          <div className="absolute top-[0rem] left-[0rem] rounded-[8.94px] bg-ghostwhite w-[16.38rem] h-[3.56rem]" />
          <div className="absolute h-[47.95%] w-[13.07%] top-[25.74%] right-[80.82%] bottom-[26.32%] left-[6.11%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] overflow-hidden">
              <div className="absolute h-[98.22%] w-[98.58%] top-[0.88%] right-[0.73%] bottom-[0.9%] left-[0.68%]">
                <img
                  className="absolute h-[7%] w-[5.57%] top-[27.79%] right-[34.33%] bottom-[65.21%] left-[60.1%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector43.svg"
                />
                <img
                  className="absolute h-[7%] w-[5.57%] top-[36.8%] right-[12.39%] bottom-[56.2%] left-[82.04%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector44.svg"
                />
                <img
                  className="absolute h-[7%] w-[5.57%] top-[44.94%] right-[4.27%] bottom-[48.06%] left-[90.17%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector45.svg"
                />
                <img
                  className="absolute h-[7%] w-[5.57%] top-[60.37%] right-[8.51%] bottom-[32.63%] left-[85.92%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector46.svg"
                />
                <img
                  className="absolute h-[7%] w-[5.57%] top-[69.7%] right-[44.3%] bottom-[23.3%] left-[50.13%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector47.svg"
                />
                <img
                  className="absolute h-[7%] w-[5.57%] top-[80.93%] right-[52.5%] bottom-[12.07%] left-[41.94%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector48.svg"
                />
                <img
                  className="absolute h-[7%] w-[5.57%] top-[66.11%] right-[23.72%] bottom-[26.89%] left-[70.71%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector49.svg"
                />
                <img
                  className="absolute h-[7%] w-[5.57%] top-[77.43%] right-[31.53%] bottom-[15.57%] left-[62.9%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector50.svg"
                />
                <img
                  className="absolute h-[7%] w-[5.57%] top-[77.73%] right-[17.31%] bottom-[15.27%] left-[77.12%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector51.svg"
                />
                <img
                  className="absolute h-[7%] w-[5.57%] top-[27.79%] right-[54.57%] bottom-[65.21%] left-[39.86%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector52.svg"
                />
                <img
                  className="absolute h-[7%] w-[5.57%] top-[26.16%] right-[65%] bottom-[66.83%] left-[29.43%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector53.svg"
                />
                <img
                  className="absolute h-[7%] w-[5.57%] top-[33.3%] right-[76.09%] bottom-[59.7%] left-[18.34%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector54.svg"
                />
                <img
                  className="absolute h-[7%] w-[5.57%] top-[46.51%] right-[72.47%] bottom-[46.49%] left-[21.96%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector55.svg"
                />
                <img
                  className="absolute h-[7%] w-[5.57%] top-[58.3%] right-[78.81%] bottom-[34.7%] left-[15.62%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector56.svg"
                />
                <img
                  className="absolute h-[7%] w-[5.57%] top-[67.9%] right-[89.18%] bottom-[25.09%] left-[5.25%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector57.svg"
                />
                <img
                  className="absolute h-[7%] w-[5.57%] top-[84.22%] right-[85.74%] bottom-[8.78%] left-[8.69%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector58.svg"
                />
                <img
                  className="absolute h-[7%] w-[5.57%] top-[75.58%] right-[77.51%] bottom-[17.41%] left-[16.92%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector59.svg"
                />
                <img
                  className="absolute h-[7%] w-[5.57%] top-[82.51%] right-[70.14%] bottom-[10.49%] left-[24.29%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector60.svg"
                />
                <img
                  className="absolute h-[7%] w-[5.57%] top-[69.7%] right-[63.59%] bottom-[23.3%] left-[30.84%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector61.svg"
                />
                <img
                  className="absolute h-[7%] w-[5.57%] top-[19.16%] right-[43.54%] bottom-[73.83%] left-[50.89%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector62.svg"
                />
                <img
                  className="absolute h-[7%] w-[5.57%] top-[6.95%] right-[44.71%] bottom-[86.05%] left-[49.72%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector63.svg"
                />
                <img
                  className="absolute h-[7%] w-[5.57%] top-[9.96%] right-[32.12%] bottom-[83.04%] left-[62.31%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector64.svg"
                />
                <img
                  className="absolute h-[7%] w-[5.57%] top-[12.56%] right-[20.74%] bottom-[80.43%] left-[73.69%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector65.svg"
                />
                <img
                  className="absolute h-[7%] w-[5.57%] top-[26.16%] right-[23.69%] bottom-[66.83%] left-[70.74%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector66.svg"
                />
                <img
                  className="absolute h-[7%] w-[5.57%] top-[17.45%] right-[9.22%] bottom-[75.55%] left-[85.21%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector67.svg"
                />
                <img
                  className="absolute h-[7%] w-[5.57%] top-[29.51%] right-[4.27%] bottom-[63.49%] left-[90.17%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector68.svg"
                />
                <img
                  className="absolute h-[101.81%] w-[101.42%] top-[-0.9%] right-[-0.73%] bottom-[-0.91%] left-[-0.69%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector69.svg"
                />
                <div className="absolute top-[37.99%] left-[29.9%] font-semibold">
                  PM10
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[1.03rem] left-[16.14rem] rounded-[8.94px] bg-mediumorchid w-[0.22rem] h-[1.51rem]" />
          <div className="absolute top-[1.24rem] left-[4.24rem] text-[0.81rem] font-semibold flex items-end w-[4.79rem]">
            PM10
          </div>
          <div className="absolute top-[1.14rem] left-[9.94rem] w-[3.85rem] h-[1.38rem] text-[1rem] text-darkslategray">
            <b className="absolute top-[0rem] left-[0rem] flex items-center w-[1.89rem]">
              {data[0]?.airComponents.find(sensor => sensor.sensorName === 'pm10')?.sensorData}
            </b>
            <div className="absolute top-[0.28rem] left-[2.01rem] text-[0.67rem] flex items-center w-[1.84rem]">
              μg/m3
            </div>
          </div>
        </div>
        <div className="absolute top-[18rem] left-[3.44rem] text-[1rem] leading-[1.61rem]">
          <span className="font-extrabold">Weather Forecast</span>
          <span className="text-slategray-200">
            <span className="font-semibold font-nunito-sans">{` in `}</span>
            <b>{data[0]?.cityName}</b>
          </span>
        </div>
        <div className='absolute top-[21.13rem] flex flex-row items-center gap-[14%] left-[7%]'>

          {data.map((forecast, index) => (
            <div key={index} className="list-none flex flex-col items-center justify-center">
              <li>
                {new Date(forecast?.forecast.forecastday[index].date).toLocaleDateString('en-US', { weekday: 'long' })}
              </li>
              <li className='flex items-center justify-center'>
                <div><img src={forecast?.forecast.forecastday[index].day.condition.icon} className='w-[2rem]' /></div>
                <div><span style={{ fontSize: '18px' }}>{forecast?.forecast.forecastday[index].day.maxtemp_c}</span>/<span style={{ fontSize: '13px' }}>{forecast?.forecast.forecastday[index].day.mintemp_c}c</span></div>
              </li>
              <li>{forecast?.forecast.forecastday[index].day.condition.text}</li>
              <li>{forecast?.forecast.forecastday[index].day.avghumidity} %</li>
              <div className="absolute flex items-center justify-center w-[4.81rem] h-[0.06rem] bg-gradient-to-r from-rgba(190, 190, 190, 0.18) to-#635e5e via-rgba(190, 190, 190, 0.18) transform rotate-90 origin-0 opacity-17" />
            </div>
          ))}



        </div>



        <div className="absolute top-[11.56rem] left-[3.5rem] w-[16.38rem] h-[3.56rem] text-[0.81rem] text-slategray-200">
          <div className="absolute top-[0rem] left-[0rem] rounded-[8.94px] bg-ghostwhite w-[16.38rem] h-[3.56rem]" />
          <div className="absolute top-[1.03rem] left-[16.14rem] rounded-[8.94px] bg-crimson w-[0.22rem] h-[1.51rem]" />
          <div className="absolute top-[1.24rem] left-[4.24rem] font-semibold flex items-end w-[4.79rem]">
            CO
          </div>
          <div className="absolute top-[1.14rem] left-[9.94rem] w-[3.85rem] h-[1.38rem] text-[1rem] text-darkslategray">
            <b className="absolute top-[0rem] left-[0rem] flex items-center w-[1.89rem]">
              {data[0]?.airComponents.find(sensor => sensor.sensorName === 'co')?.sensorData}
            </b>
            <div className="absolute top-[0.28rem] left-[2.01rem] text-[0.67rem] flex items-center w-[1.84rem]">
              ppm
            </div>
          </div>
          <div className="absolute top-[0.88rem] left-[1.13rem] w-[2.08rem] h-[1.74rem] text-[0.48rem]">
            <div className="absolute top-[0rem] left-[0rem] w-[2.08rem] h-[1.74rem] overflow-hidden">
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector70.svg"
              />
              <div className="absolute top-[38.52%] left-[28.1%] font-semibold">
                CO
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[11.56rem] left-[24.13rem] w-[16.38rem] h-[3.56rem] text-[0.81rem] text-slategray-200">
          <div className="absolute top-[0rem] left-[0rem] rounded-[8.94px] bg-ghostwhite w-[16.38rem] h-[3.56rem]" />
          <div className="absolute top-[1.03rem] left-[16.14rem] rounded-[8.94px] bg-limegreen w-[0.22rem] h-[1.51rem]" />
          <div className="absolute top-[1.24rem] left-[4.24rem] font-semibold flex items-end w-[4.79rem]">
            NO2
          </div>
          <div className="absolute top-[1.14rem] left-[9.94rem] w-[3.85rem] h-[1.38rem] text-[1rem] text-darkslategray">
            <b className="absolute top-[0rem] left-[0rem] flex items-center w-[1.89rem]">
              {data[0]?.airComponents.find(sensor => sensor.sensorName === 'no2')?.sensorData}
            </b>
            <div className="absolute top-[0.28rem] left-[2.01rem] text-[0.67rem] flex items-center w-[1.84rem]">
              ppb
            </div>
          </div>
          <div className="absolute top-[0.67rem] left-[1.11rem] w-[2.02rem] h-[1.97rem] text-[0.46rem]">
            <div className="absolute top-[0rem] left-[0rem] w-[2.02rem] h-[1.97rem] overflow-hidden">
              <img
                className="absolute h-[57.87%] w-full top-[14.18%] right-[0%] bottom-[27.95%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector71.svg"
              />
              <img
                className="absolute h-[15.09%] w-[14.72%] top-[0%] right-[61%] bottom-[84.91%] left-[24.28%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector72.svg"
              />
              <img
                className="absolute h-[12.43%] w-[12.12%] top-[14.39%] right-[77.73%] bottom-[73.18%] left-[10.15%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector73.svg"
              />
              <div className="absolute top-[31.03%] left-[27.69%] font-semibold">
                <span>NO</span>
                <span className="text-[0.22rem]">2</span>
              </div>
              <img
                className="absolute h-[39.59%] w-[11.33%] top-[60.41%] right-[61.85%] bottom-[0%] left-[26.82%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector74.svg"
              />
              <img
                className="absolute h-[29.28%] w-[12.94%] top-[57.93%] right-[44.45%] bottom-[12.78%] left-[42.6%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector75.svg"
              />
              <img
                className="absolute h-[31.99%] w-[11.33%] top-[66.26%] right-[29.51%] bottom-[1.76%] left-[59.17%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector76.svg"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[11.56rem] left-[44.75rem] w-[16.38rem] h-[3.56rem] text-[0.81rem] text-slategray-200">
          <div className="absolute top-[0rem] left-[0rem] rounded-[8.94px] bg-ghostwhite w-[16.38rem] h-[3.56rem]" />
          <div className="absolute top-[1.03rem] left-[16.14rem] rounded-[8.94px] bg-limegreen w-[0.22rem] h-[1.51rem]" />
          <div className="absolute top-[1.24rem] left-[4.24rem] font-semibold flex items-end w-[4.79rem]">
            SO2
          </div>
          <div className="absolute top-[1.14rem] left-[9.94rem] w-[3.85rem] h-[1.38rem] text-[1rem] text-darkslategray">
            <b className="absolute top-[0rem] left-[0rem] flex items-center w-[1.89rem]">
              {data[0]?.airComponents.find(sensor => sensor.sensorName === 'so2')?.sensorData}
            </b>
            <div className="absolute top-[0.28rem] left-[2.01rem] text-[0.67rem] flex items-center w-[1.84rem]">
              ppb
            </div>
          </div>
          <div className="absolute top-[0.63rem] left-[1.25rem] w-[2.11rem] h-[2.06rem] text-[0.48rem]">
            <div className="absolute top-[0rem] left-[0rem] w-[2.11rem] h-[2.06rem] overflow-hidden">
              <img
                className="absolute h-[57.87%] w-full top-[14.18%] right-[0%] bottom-[27.95%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector77.svg"
              />
              <img
                className="absolute h-[15.09%] w-[14.72%] top-[0%] right-[60.99%] bottom-[84.91%] left-[24.29%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector78.svg"
              />
              <img
                className="absolute h-[12.43%] w-[12.12%] top-[14.39%] right-[77.73%] bottom-[73.18%] left-[10.15%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector79.svg"
              />
              <div className="absolute top-[31.03%] left-[27.7%] font-semibold">
                <span>SO</span>
                <span className="text-[0.23rem]">2</span>
              </div>
              <img
                className="absolute h-[39.59%] w-[11.33%] top-[60.41%] right-[61.83%] bottom-[0%] left-[26.84%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector80.svg"
              />
              <img
                className="absolute h-[29.28%] w-[12.94%] top-[57.94%] right-[44.46%] bottom-[12.78%] left-[42.6%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector81.svg"
              />
              <img
                className="absolute h-[31.99%] w-[11.33%] top-[66.26%] right-[29.51%] bottom-[1.76%] left-[59.16%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector82.svg"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[6.81rem] left-[44.75rem] w-[16.38rem] h-[3.56rem] text-[0.81rem] text-slategray-200">
          <div className="absolute top-[0rem] left-[0rem] rounded-[8.94px] bg-ghostwhite w-[16.38rem] h-[3.56rem]" />
          <div className="absolute top-[1.03rem] left-[16.14rem] rounded-[8.94px] bg-tomato w-[0.22rem] h-[1.51rem]" />
          <div className="absolute top-[1.24rem] left-[4.24rem] font-semibold flex items-end w-[4.79rem]">
            O3
          </div>
          <div className="absolute top-[1.14rem] left-[9.94rem] w-[3.85rem] h-[1.38rem] text-[1rem] text-darkslategray">
            <b className="absolute top-[0rem] left-[0rem] flex items-center w-[1.89rem]">
              {data[0]?.airComponents.find(sensor => sensor.sensorName === 'o3')?.sensorData}
            </b>
            <div className="absolute top-[0.28rem] left-[2.01rem] text-[0.67rem] flex items-center w-[1.84rem]">
              ppb
            </div>
          </div>
          <div className="absolute top-[0.6rem] left-[1.13rem] w-[2.16rem] h-[2.21rem] text-[0.48rem]">
            <div className="absolute top-[0rem] left-[0rem] w-[2.16rem] h-[2.21rem] overflow-hidden">
              <img
                className="absolute h-[81.92%] w-full top-[18.08%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector83.svg"
              />
              <img
                className="absolute h-[12%] w-[12.29%] top-[15.94%] right-[68.24%] bottom-[72.06%] left-[19.47%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector84.svg"
              />
              <img
                className="absolute h-[15.97%] w-[16.36%] top-[0%] right-[41.82%] bottom-[84.03%] left-[41.82%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector85.svg"
              />
              <img
                className="absolute h-[15.97%] w-[16.36%] top-[80.59%] right-[8.8%] bottom-[3.44%] left-[74.84%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector86.svg"
              />
              <div className="absolute top-[49.7%] left-[30.89%] font-semibold">
                O₃
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[24.13rem] left-[11.5rem] w-[66.94rem] h-[25.75rem] text-[0.75rem] text-slategray-100">
        <div className="absolute top-[0.80rem] left-[0rem] rounded-smi bg-white shadow-[2px_6px_41px_rgba(0,_0,_0,_0.05)] w-[66.94rem] h-[25.75rem]" />
        <div className="absolute top-[21.19rem] left-[4.88rem] w-[31.69rem] h-[2.19rem] text-[0.63rem]">
          <b className="absolute top-[0.88rem] left-[1.69rem]">Good</b>
          <b className="absolute top-[0.88rem] left-[6.63rem]">Moderate</b>
          <b className="absolute top-[0.88rem] left-[12.5rem]">Poor</b>
          <b className="absolute top-[0.88rem] left-[22.94rem]">Severe</b>
          <b className="absolute top-[0.88rem] left-[16.94rem]">Unhealthy</b>
          <b className="absolute top-[0.88rem] left-[27.56rem]">Hazardous</b>
          <div className="absolute top-[1.94rem] left-[0rem] rounded-tl-[4.02px] rounded-tr-none rounded-br-none rounded-bl-[4.02px] bg-limegreen w-[5.19rem] h-[0.25rem]" />
          <div className="absolute top-[1.94rem] left-[5.31rem] bg-gold-100 w-[5.25rem] h-[0.25rem]" />
          <div className="absolute top-[1.94rem] left-[10.63rem] bg-tomato w-[5.13rem] h-[0.25rem]" />
          <div className="absolute top-[1.94rem] left-[15.88rem] bg-hotpink w-[5.19rem] h-[0.25rem]" />
          <div className="absolute top-[1.94rem] left-[21.13rem] bg-mediumorchid w-[5.25rem] h-[0.25rem]" />
          <div className="absolute top-[1.94rem] left-[26.5rem] rounded-tl-none rounded-tr-[4.02px] rounded-br-[4.02px] rounded-bl-none bg-crimson w-[5.19rem] h-[0.25rem]" />
          <img
            className="absolute top-[0.14rem] left-[2.25rem] w-[0.76rem] h-[0.42rem]"
            alt=""
            src="/polygon-1.svg"
          />
        </div>
        <div className="absolute top-[14rem] left-[43.69rem] w-[20.1rem] h-[5.88rem] text-[0.81rem] text-darkslategray">
          <div className="absolute top-[0.31rem] left-[0rem] w-[2rem] h-[1.94rem]">
            <img
              className="absolute top-[0rem] left-[0rem] w-[2rem] h-[1.94rem] object-cover"
              alt=""
              src={data[0]?.weatherdata.condition.icon}
            />
            <img
              className="absolute top-[0rem] left-[0rem] w-[2rem] h-[1.94rem] object-cover opacity-[0.62] mix-blend-soft-light"
              alt=""
              src={data[0]?.weatherdata.condition.icon}
            />
          </div>
          <div className="absolute top-[0rem] left-[2.63rem] w-[3.87rem] h-[2.5rem] text-[1.82rem]">
            <div className="absolute top-[0rem] left-[0rem] font-extrabold">
              {data[0]?.weatherdata.temp_c}
            </div>
            <div className="absolute top-[0.4rem] left-[2.52rem] text-[0.62rem] font-semibold">
              O
            </div>
            <div className="absolute top-[0.84rem] left-[3.18rem] text-[0.97rem] font-semibold">
              C
            </div>
          </div>
          <div className="absolute top-[2.56rem] left-[2.63rem] font-semibold text-slategray-100">
            {data[0]?.forecast.forecastday[0]?.day.condition.text}
          </div>
          <div className="absolute top-[0.63rem] left-[11.56rem] w-[3.13rem] h-[2.44rem] text-[0.86rem]">
            <div className="absolute top-[0rem] left-[0.69rem] w-[2.44rem] h-[2.44rem]">
              <img
                className="absolute top-[1.48rem] left-[-0.91rem] w-[0.2rem] h-[0.71rem]"
                alt=""
                src="/vector-718.svg"
              />
              <div className="absolute top-[1.25rem] left-[0.52rem] w-[1.92rem] h-[1.19rem]">
                <b className="absolute top-[0rem] left-[-0.75rem]">{data[0]?.forecast.forecastday[0].day.mintemp_c}</b>
                <div className="absolute top-[0rem] left-[1.09rem] text-[0.37rem] font-semibold">
                  O
                </div>
                <div className="absolute top-[0.26rem] left-[1.48rem] text-[0.57rem] font-semibold">
                  C
                </div>
              </div>
              <div className="absolute top-[0rem] left-[0rem] font-semibold text-slategray-100">
                Min
              </div>

            </div>
            <div className="absolute top-[0.44rem] left-[0rem] rounded-[50%] bg-limegreen w-[0.38rem] h-[0.38rem]" />
          </div>
          <div className="absolute top-[0.56rem] left-[16.88rem] w-[3.22rem] h-[2.37rem] text-[0.86rem]">
            <div className="absolute top-[0rem] left-[0.78rem] w-[2.44rem] h-[2.37rem]">
              <img
                className="absolute top-[1.37rem] left-[0.17rem] w-[0.2rem] h-[0.71rem]"
                alt=""
                src="/vector-719.svg"
              />
              <div className="absolute top-[1.19rem] left-[0.53rem] w-[1.92rem] h-[1.19rem]">
                <b className="absolute top-[0rem] left-[0rem]">{data[0]?.forecast.forecastday[0].day.maxtemp_c}</b>
                <div className="absolute top-[0rem] left-[1.09rem] text-[0.37rem] font-semibold">
                  O
                </div>
                <div className="absolute top-[0.26rem] left-[1.48rem] text-[0.57rem] font-semibold">
                  C
                </div>
              </div>
              <div className="absolute top-[0rem] left-[0rem] font-semibold text-slategray-100">
                Max
              </div>
            </div>
            <div className="absolute top-[0.44rem] left-[0rem] rounded-[50%] bg-tomato w-[0.38rem] h-[0.38rem]" />
          </div>
          <div className="absolute top-[0.5rem] left-[9.5rem] [background:linear-gradient(-90deg,_rgba(190,_190,_190,_0.68),_#635e5e_46.15%,_rgba(190,_190,_190,_0.68))] w-[2.75rem] h-[0.13rem] [transform:_rotate(90deg)] [transform-origin:0_0] opacity-[0.1]" />
          <div className="absolute h-[19.15%] w-[86.76%] top-[80.85%] right-[0.18%] bottom-[0%] left-[13.06%]">
            <div className="absolute h-full w-[26.52%] top-[0%] right-[73.48%] bottom-[0%] left-[0%]">
              <img
                className="absolute h-[59.7%] w-[14.52%] top-[19.44%] right-[86.15%] bottom-[20.86%] left-[-0.68%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/directionsvgrepocom-1.svg"
              />
              <b className="absolute top-[0rem] left-[1.19rem]"> {data[0]?.weatherdata.wind_kph}</b>
            </div>
            <div className="absolute h-full w-[19%] top-[0%] right-[36.92%] bottom-[0%] left-[44.09%]">
              <img
                className="absolute h-[70.65%] w-[23.99%] top-[8.33%] right-[76.95%] bottom-[21.02%] left-[-0.94%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/droplets01svgrepocom-14.svg"
              />
              <b className="absolute top-[0rem] left-[1.31rem]">{data[0]?.weatherdata.humidity}%</b>
            </div>
            <div className="absolute h-full w-[19%] top-[0%] right-[0%] bottom-[0%] left-[81%]">
              <img
                className="absolute h-[70.65%] w-[23.99%] top-[8.33%] right-[76.95%] bottom-[21.02%] left-[-0.94%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/droplets01svgrepocom-14.svg"
              />
              <b className="absolute top-[0rem] left-[1.31rem]">{data[0]?.weatherdata.humidity}%</b>
            </div>
          </div>
        </div>
        <div className="absolute top-[12.94rem] left-[3rem] w-[37.06rem] h-[8.31rem]">
          <div className="absolute top-[1.13rem] left-[0rem] rounded-lg bg-ghostwhite w-[37.06rem] h-[7.19rem]" />
          <img
            className="absolute top-[-0.02rem] left-[31.95rem] w-[3.85rem] h-[6.89rem]"
            alt=""
            src={
              data[0]?.airComponents.find((sensor) => sensor.sensorName === 'aqi')?.sensorData <= 50
                ? '/group-427320193.svg'
                : data[0]?.airComponents.find((sensor) => sensor.sensorName === 'aqi')?.sensorData <= 100
                  ? '/Moderateboy.svg'
                  : '/poorboy.svg'
            }
          />
          <div className="absolute h-[39.1%] w-[10.46%] top-[25.56%] right-[63.07%] bottom-[35.34%] left-[26.48%] text-[1.38rem] text-limegreen">
            <div className={`absolute top-[42.31%] left-[9.68%] font-extrabold ${data[0]?.airComponents.find(sensor => sensor.sensorName === 'aqi')?.sensorData <= 50
              ? ' text-green-500'
              : data[0]?.airComponents.find(sensor => sensor.sensorName === 'aqi')?.sensorData <= 100
                ? ' text-yellow-500'
                : ' text-orange-500'
              }`}>
              {data[0]?.airComponents.find(sensor => sensor.sensorName === 'aqi')?.sensorData <= 50
                ? 'Good'
                : data[0]?.airComponents.find(sensor => sensor.sensorName === 'aqi')?.sensorData <= 100
                  ? 'Moderate'
                  : 'Unhealthy'
              }
            </div>
            <div className="absolute h-[30.77%] w-[93.55%] top-[0%] right-[6.45%] bottom-[69.23%] left-[0%] text-[0.75rem] text-slategray-200">
              <b className="absolute top-[0%] left-[17.24%]">Live AQI</b>
              <div className="absolute top-[0.31rem] left-[0rem] rounded-[50%] bg-tomato w-[0.38rem] h-[0.38rem]" />
            </div>
          </div>
          <div className="absolute h-[12.03%] w-[20.07%] top-[70.68%] right-[53.29%] bottom-[17.29%] left-[26.64%] text-lightslategray-100 font-nunito">
            <div className="absolute top-[0%] left-[0%] font-medium opacity-[0.8]" style={{ fontSize: "9px" }}>
              Last Update:
            </div>
            <b className="absolute top-[0%] left-[45%] font-nunito-sans text-lightslategray-300 text-center" style={{ fontSize: '9px' }}>
              {data[0]?.timeago}
            </b>
          </div>
          <div className="absolute top-[7.25rem] left-[18.56rem] [background:linear-gradient(-90deg,_rgba(190,_190,_190,_0.18),_#635e5e_46.15%,_rgba(190,_190,_190,_0.18))] w-[5.38rem] h-[0.06rem] [transform:_rotate(-90deg)] [transform-origin:0_0] opacity-[0.17]" />
          <div className="absolute top-[3.06rem] left-[20.19rem] leading-[1.26rem] font-semibold text-right">
            <p className="m-0">{
              data[0]?.airComponents.find((sensor) => sensor.sensorName === 'aqi')?.sensorData <= 50
                ? 'You can go outside without fear and enjoy the day'
                : data[0]?.airComponents.find((sensor) => sensor.sensorName === 'aqi')?.sensorData <= 100
                  ? 'Enjoy your day with caution'
                  : 'Consider staying indoors'
            }</p>
          </div>
          <div className="absolute h-[89.13%] w-[20.12%] top-[1.5%] right-[77.52%] bottom-[9.37%] left-[2.36%] text-[0.49rem]">
            <div className="absolute h-full w-[99.36%] top-[0%] right-[0.64%] bottom-[0%] left-[0%] rounded-[50%] bg-whitesmoke-200" />
            {data[0]?.airComponents.find(sensor => sensor.sensorName === 'aqi') && (
              <div
                className="absolute h-full w-[99.36%] top-[0%] right-[0.64%] bottom-[0%] left-[0%] rounded-[50%]"
                style={{
                  backgroundColor:
                    data[0]?.airComponents.find(sensor => sensor.sensorName === 'aqi')?.sensorData <= 50
                      ? 'limegreen'
                      : data[0]?.airComponents.find(sensor => sensor.sensorName === 'aqi')?.sensorData <= 100
                        ? 'yellow'
                        : data[0]?.airComponents.find(sensor => sensor.sensorName === 'aqi')?.sensorData <= 150
                          ? 'orange'
                          : data[0]?.airComponents.find(sensor => sensor.sensorName === 'aqi')?.sensorData <= 200
                            ? 'red'
                            : data[0]?.airComponents.find(sensor => sensor.sensorName === 'aqi')?.sensorData <= 300
                              ? 'pink'
                              : 'purple'
                }}
              />
            )}
            {data[0]?.airComponents.find(sensor => sensor.sensorName === 'aqi') && (
              <div
                className="absolute h-[7.69%] w-[7.64%] top-[10.44%] right-[79.8%] bottom-[81.87%] left-[12.56%] rounded-[50%]"
                style={{
                  backgroundColor:
                    data[0]?.airComponents.find(sensor => sensor.sensorName === 'aqi')?.sensorData <= 50
                      ? 'limegreen'
                      : data[0]?.airComponents.find(sensor => sensor.sensorName === 'aqi')?.sensorData <= 100
                        ? 'yellow'
                        : data[0]?.airComponents.find(sensor => sensor.sensorName === 'aqi')?.sensorData <= 150
                          ? 'orange'
                          : data[0]?.airComponents.find(sensor => sensor.sensorName === 'aqi')?.sensorData <= 200
                            ? 'red'
                            : data[0]?.airComponents.find(sensor => sensor.sensorName === 'aqi')?.sensorData <= 300
                              ? 'pink'
                              : 'purple'
                }}
              />
            )}
            <div className="absolute h-[4.4%] w-[4.37%] top-[12.09%] right-[81.44%] bottom-[83.52%] left-[14.19%] rounded-[50%] bg-honeydew" />
            <div className="absolute top-[81.32%] left-[7.1%]">0</div>
            <div className="absolute top-[79.67%] left-[84.07%]">500+</div>
            <img
              className="absolute h-[75.82%] w-[75.34%] top-[12.09%] right-[12.65%] bottom-[12.09%] left-[12.01%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/mask-group@2x.png"
            />
            <div
              className="absolute h-[80.96%] w-[80.45%] top-[9.52%] right-[10.1%] bottom-[9.52%] left-[9.46%] rounded-[50%] bg-white shadow-[3.0469350814819336px_5.33213472366333px_11.43px_rgba(15,_75,_12,_0.17)] box-border opacity-[0.81] border-[3px] border-solid border-white"
            />
            <div className="absolute h-[43.85%] w-[34.37%] top-[27.58%] right-[33.2%] bottom-[28.56%] left-[32.43%] text-center text-[2.09rem] text-black">
              <div className="absolute top-[0%] left-[0%] leading-[2.49rem] font-extrabold">
                {data[0]?.airComponents.find(sensor => sensor.sensorName === 'aqi')?.sensorData}
              </div>
              <div className="absolute top-[73.07%] left-[30.62%] text-[0.66rem] font-semibold text-black text-left">
                AQI
              </div>
            </div>
          </div>

        </div>
        <img
          className="absolute top-[7.86rem] left-[62.25rem] w-[1.56rem] h-[1.56rem]"
          alt=""
          src="/group-427320423.svg"
        />
        <div className="absolute top-[7.8rem] left-[57.19rem] w-[3.88rem] h-[1.57rem] text-darkslategray">
          <div className="absolute top-[0.38rem] left-[1.82rem] font-semibold">
            20.6K
          </div>
          <img
            className="absolute top-[0rem] left-[0rem] w-[1.57rem] h-[1.57rem]"
            alt=""
            src="/group-427319720.svg"
          />
        </div>
        <div className="absolute top-[6.38rem] left-[3rem] w-[11rem] h-[5.24rem]">
          <div className="absolute top-[3.93rem] left-[0.06rem] leading-[1.26rem] text-right opacity-[0.65]">
            <span className="font-semibold">{`Nearest monitor is `}</span>
            <b>{data[0]?.distance}</b>
            <span className="font-semibold"> km far</span>
          </div>
          <b className="absolute top-[1.68rem] left-[0rem] text-[1.23rem] text-darkslategray">
            {data[0]?.cityName}
          </b>
          <div className="absolute h-[27.44%] w-[76.28%] top-[0%] right-[23.72%] bottom-[72.56%] left-[0%] text-[1.01rem] text-slategray-200">
            <img
              className="absolute h-[49.51%] w-[16.09%] top-[29.57%] right-[83.71%] bottom-[20.92%] left-[0.2%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group-wind.svg"
            />
            <img
              className="absolute h-[26.15%] w-[3.31%] top-[50.34%] right-[96.69%] bottom-[23.51%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group-thunder.svg"
            />
            <div className="absolute top-[0rem] left-[1.57rem] leading-[1.44rem] font-semibold">
              Air Quality in
            </div>
          </div>
        </div>
        <div className="absolute top-[2rem] left-[56.88rem] w-[6.94rem] h-[2.13rem] text-[0.81rem] text-cornflowerblue">
          <div className="absolute top-[0rem] left-[0rem] rounded-[5.37px] box-border w-[6.94rem] h-[2.13rem] border-[1px] border-solid border-cornflowerblue" />
          <div className="absolute h-[44.12%] w-[70.58%] top-[26.47%] right-[15.01%] bottom-[29.41%] left-[14.41%]">
            <img
              className="absolute h-[88.96%] w-[17.03%] top-[9.55%] right-[82.97%] bottom-[1.49%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/currentlocationsvgrepocom-1.svg"
            />
            <div className="absolute top-[0rem] left-[1.08rem] w-[3.81rem] h-[0.94rem]">
              <div className="absolute top-[0rem] left-[0rem] w-[3.81rem] h-[0.94rem]">
                <div className="absolute top-[0rem] left-[0rem] leading-[0.91rem] font-semibold">
                  Locate me
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[2.25rem] left-[3rem] w-[14.23rem] h-[2.13rem] text-[0.97rem] text-white">
          <div className="absolute top-[0rem] left-[0rem] rounded-md bg-cornflowerblue w-[7.38rem] h-[2.13rem]" />
          <div className="absolute top-[0.38rem] left-[1.94rem] w-[12.29rem] h-[1.31rem]">
            <div className="absolute top-[0rem] left-[0rem] w-[3.31rem] h-[1.31rem]">
              <div className="absolute top-[0rem] left-[1.38rem] font-semibold inline-block w-[1.93rem]">
                AQI
              </div>
              <img
                className="absolute h-[40.66%] w-[31.5%] top-[28.4%] right-[68.5%] bottom-[30.94%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/weathericon--27.svg"
              />
            </div>
            <div className="absolute top-[0rem] left-[7.06rem] w-[5.23rem] h-[1.31rem] text-darkslategray">
              <div className="absolute top-[0rem] left-[1.35rem] font-semibold opacity-[0.73]">
                Weather
              </div>
              <img
                className="absolute top-[0.07rem] left-[0rem] w-[1.11rem] h-[1.08rem] object-cover"
                alt=""
                src="/26-382@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default App;
