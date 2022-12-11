import BarChart from "../components/BarChart";

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
          <h1 style={{ margin: "unset" }}>Statistics</h1>
        </div>
        <div style={{ display: "flex", width: "100%", height: "50%" }}>
          <div style={{ width: "50%", padding:5 }}>
            <div>
              <BarChart />
            </div>
          </div>
          <div style={{ width: "50%" }}>
            <div>
              <BarChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StatisticsPage;
