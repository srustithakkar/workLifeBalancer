import React from "react";
import { styled, createTheme, ThemeProvider } from '@mui/system';

function Legend({ data }) {

  return (
    <ol sx={{padding: 0,width: "fit-content",margin: "0 2px",}}>
      {data.map(({ name, color }, i) => {
        return (
          <li key={i} sx={{display: "inline-flex",
          listStyle: "none",
          alignItems: "center",
          marginRight: "20px",
          lineHeight: 1,
          fontSize: 12,
          fontWeight: 500}}>
            <div  style={{ backgroundColor: color }} sx={{ flexShrink: 0,
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: "20px"}} />
            <div style={{ color: "#919EAB" }}>{name}</div>
          </li>
        );
      })}
    </ol>
  );
}

const styles = theme => ({
  legend: {
    padding: 0,
    width: "fit-content",
    margin: "0 2px",
    "& li": {
      display: "inline-flex",
      listStyle: "none",
      alignItems: "center",
      marginRight: theme.spacing.unit * 2,
      lineHeight: 1,
      fontSize: 12,
      fontWeight: 500
    }
  },
  marker: {
    flexShrink: 0,
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: theme.spacing.unit
  }
});

export default Legend;
