const CustomTooltip = ({ active, payload }) => {

  if (active && payload && payload.length) {
    const data = payload[0].payload;
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

    const backgroundColor = getLineColor(data.PM10);



    return (
      <div className="custom-tooltip" style={{ borderRadius: "10px", backgroundColor: "#F7F7FC" }}>
        <div className="p-2 flex-row justify-center text-center items-center">
          <p>{`Time   :   ${data.time}`}</p>
          <p><span className="rounded-full h-2 w-2 inline-block mx-1" style={{ backgroundColor }} ></span>{`Paschim Vihar : ${data.PM10}`}</p>
        </div>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;