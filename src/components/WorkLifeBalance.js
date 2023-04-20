import React from "react";
import BarChart from "./chart/BarChart";
import item from "./assets/item";

class WorkLifeBalance extends React.Component {

  render() {
    const { entries, from, to } = item;
    const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]; // x-axis labels

    let wlbData = []; // hours coded during and outside of work per day
    let codingAtWorkMinutes = []; // minutes coded at work per day
    let codingOutsideWorkMinutes = []; // minutes coded outside work per day

    let codingAtWorkTotalMinutes; // minutes for the entire week
    let codingOutsideWorkTotalMinutes; // minutes for the entire week

    let codingAtWorkTotalHours;
    let codingOutsideWorkTotalHours;
    let codingTotalHours;

    // create the dataset
    const workLifeBalanceCalcs = (item) => {
      // map data to two new arrays
      entries.map(day => {
        codingAtWorkMinutes.push(day.workMinutes);
        codingOutsideWorkMinutes.push(day.nonWorkMinutes);
        return true;
      });

      // create data for the chart
      let i;
      for (i = 0; i < days.length; i++) {
        wlbData[i] = {
          "Day": days[i],
          "Coding at work": parseFloat((codingAtWorkMinutes[i] / 60).toFixed(2)),
          "Coding outside work": parseFloat((codingOutsideWorkMinutes[i] / 60).toFixed(2)),
          "Coding at workColor": "#00CEFC",
          "Coding outside workColor": "#C4F3FF"

        };
      }
    }
    workLifeBalanceCalcs(item);

    // calculate totals
    function total(total, num) {
      return total + num;
    }
    if (wlbData && codingAtWorkMinutes.length > 0 && codingOutsideWorkMinutes.length > 0) {
      codingAtWorkTotalMinutes = codingAtWorkMinutes.reduce(total);
      codingOutsideWorkTotalMinutes = codingOutsideWorkMinutes.reduce(total);
    }
    codingAtWorkTotalHours = (codingAtWorkTotalMinutes / 60).toFixed(1);
    codingOutsideWorkTotalHours = (codingOutsideWorkTotalMinutes / 60).toFixed(1);
    codingTotalHours = (parseFloat(codingAtWorkTotalHours) + parseFloat(codingOutsideWorkTotalHours)).toFixed(1);

    // create 5 evenly-spaced tick values
    const tickValues = () => {
      const t = wlbData.map(d => {
        return Math.ceil(d[keys[0]] + d[keys[1]]);
      });
      const max = Math.max(...t);
      return [0, max * 0.25, max * 0.5, max * 0.75, max];
    };

    // create the message
    let message;
    if (codingAtWorkTotalMinutes > codingOutsideWorkTotalMinutes) {
      message = `Most of your code time occured during work hours (${codingAtWorkTotalHours} out of ${codingTotalHours} total hours).`;
    } else {
      message = `Most of your code time occured during nights or on weekends (${codingOutsideWorkTotalHours} out of ${codingTotalHours} total hours).`;
    }

    // create legend
    const keys = ["Coding at work", "Coding outside work"];

    return (
      <React.Fragment>
        <div sx={{
          margin: '0 auto',
          height: 240,
        }}>
          <BarChart
            data={wlbData}
            keys={keys}
            tickValues={tickValues()}
            index={"Day"}
            groupMode={"stacked"}
            layout={"vertical"}
            colorBy={function (e) {
              var t = e.id;
              return e.data["".concat(t, "Color")];
            }}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default WorkLifeBalance;
