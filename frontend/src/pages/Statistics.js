import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";

function StatisticsPage() {
  return (
    <>
      <div style={{ padding: 10, width: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <h1 style={{ margin: "unset" }}>Statistics Covid</h1>
        </div>
        <div className='grid' style={{margin:'auto'}}>
          <div style={{margin:'auto', width:'80%', height:'300px'}}>
              <BarChart />
          </div>
          <div style={{ margin:'auto',  width:'80%', height:'300px'}}>
              <LineChart />
          </div>
   
        </div>
        <div style={{display: 'flex', justifyContent: 'center', width:'100%', height:'300px'}}>
              <PieChart />
          </div>
       
      </div>
    </>
  );
}

export default StatisticsPage;
