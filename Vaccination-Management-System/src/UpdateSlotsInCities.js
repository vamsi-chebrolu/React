import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import Button from "@mui/material/Button";
import axios from "axios";
import {getOneUser , editUser} from "./CrudCmps";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export function UpdateSlotsInCities() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    getData();
  });

  const theme = createTheme({
    palette: {
      primary: {
        main: red[500],
      },
      secondary: {
        main: "#11cb5f",
      },
    },
  });

  const style = {
    fontSize: "large",
    fontWeight: "500",
  };
  const style1 = {
    fontSize: "17px",
    fontWeight: "600",
  };

  const getData = async () => {
    await axios.get('http://localhost:8000/cities')
    .then(response=>setData(response.data));
  };

  const handleUpdate=async (id)=>
  {
    const response=await getOneUser('http://localhost:8000/cities?id='+id);
    console.log(response.data[0]);
    const data=response.data[0];
    if(data.vaccine_available=='true')
    {
      data.vaccine_available="false";
      await editUser( data, id, 'http://localhost:8000/cities');
    }
    else {
      data.vaccine_available="true";
      await editUser( data, id, 'http://localhost:8000/cities');}
    
  }


  return (
    <div
      style={{
        borderRadius: "5px",
        height: "340px",
        width: "70%",
        margin: "auto",
        marginTop: "1%",
        display: "auto",
        flexDirection: "column",
      }}
    >
      <TableContainer style={{ height: "100%" }} component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell style={style}>Id</StyledTableCell>
              <StyledTableCell style={style} align="left">
                CityName
              </StyledTableCell>
              <StyledTableCell style={style} align="left">
                Status
              </StyledTableCell>
              <StyledTableCell style={style} align="left">
                update status
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((data1) => (
              <StyledTableRow style={style1} key={data1.id}>
                <StyledTableCell style={style1} component="th" scope="row">
                  {data1.id}
                </StyledTableCell>
                <StyledTableCell style={style1} align="left">
                  {data1.name}
                </StyledTableCell>
                <StyledTableCell style={style1} align="left">
                  {data1.vaccine_available}
                </StyledTableCell>
                <StyledTableCell>
                  <ThemeProvider theme={theme}>
                    <Button
                      color="primary"
                      onClick={() => handleUpdate(data1.id)}>
                      Update
                    </Button>
                  </ThemeProvider>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}