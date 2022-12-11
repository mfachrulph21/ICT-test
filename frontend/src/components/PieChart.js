import React, { useEffect, useState } from "react";
// import {Chart as ChartJS, BarElement} from 'chart.js'
import { Pie } from 'react-chartjs-2'
import 'chart.js/auto';
import { useDispatch, useSelector } from "react-redux";
import { fetchDataCovid } from "../store/actions";


function PieChart() {
    const dispatch = useDispatch();
 
  
    const { dataCovid } = useSelector((state) => {
      return state
    })


    console.log(dataCovid, 'ini data covidnya masuk gak')

    const labels = dataCovid.map((el) => {
      return el.Country
    })

    const dataSets = dataCovid.map((el) => {
      return el.TotalDeaths
    })
    
    const data = {
        labels: labels,
        datasets: [{
          label: 'Total Deaths',
          data: dataSets,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }]
      };
    

    

    useEffect(() => {
        dispatch(fetchDataCovid())
    }, [])


    return (
        <div>
            <Pie
            data={data}
            />
        </div>
    )
}

export default PieChart;