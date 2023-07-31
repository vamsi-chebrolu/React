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
import {getOneUser , editUser, deleteUser} from "./CrudCmps";
import Header from "./Header";
import Footer from "./Footer";
import { FooterEnd } from "./FooterEnd";
import { Navigate, useNavigate } from "react-router-dom";

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

export function GetAllUsers() {
  const [data, setData] = React.useState([]);
  const navigate=useNavigate();
 // const [searchQuery, setSearchQuery] = React.useState("");




  React.useEffect(() => {
    getData();
  },);

  const theme = createTheme({
    palette: {
      primary: {
        main: red[500],
      },
      secondary: {
        main: "#0000ff",
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
    await axios.get('http://localhost:8000/users')
    .then(response=>{setData(response.data);console.log(response.data)});
  };


  // setData(data.filter((user) =>
  //   user.username.toLowerCase().includes(searchQuery.toLowerCase())
  // ))

  const handleUpdateUser=async (id)=>
  {
    const response=await getOneUser('http://localhost:8000/users?id='+id);
    console.log(response.data[0]);
    const data=response.data[0];
    if(data.userVacStatus=='yes')
    {
      data.userVacStatus="no";
      await editUser( data, id, 'http://localhost:8000/users');
    }
    else {
      data.userVacStatus="yes";
      await editUser( data, id, 'http://localhost:8000/users');
      const response=await getOneUser('http://localhost:8000/vacDetails');
      response.data=parseInt(response.data.noOfVacComp)+1;
    }
    
  }

  const handleUpdateMother=async (id)=>
  {
    const response=await getOneUser('http://localhost:8000/users?id='+id);
    console.log(response.data[0]);
    const data=response.data[0];
    if(data.motherVacStatus=='yes')
    {
      data.motherVacStatus="no";
      await editUser( data, id, 'http://localhost:8000/users');
    }
    else {
      data.motherVacStatus="yes";
      await editUser( data, id, 'http://localhost:8000/users');}
    
  }


  const handleUpdateFather=async (id)=>
  {
    const response=await getOneUser('http://localhost:8000/users?id='+id);
    console.log(response.data[0]);
    const data=response.data[0];
    if(data.fatherVacStatus=='yes')
    {
      data.fatherVacStatus="no";
      await editUser( data, id, 'http://localhost:8000/users');
    }
    else {
      data.fatherVacStatus="yes";
      await editUser( data, id, 'http://localhost:8000/users');}
    
  }


  return (
    <div><Header></Header>
    <div
      style={{
        borderRadius: "5px",
        height: "600px",
        width: "100%",
        margin: "auto",
        display: "auto",
        flexDirection: "column",
        padding:"40px",
        backgroundSize:"cover",
        paddingTop:"100px", backgroundImage:"url('https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_724268_16623842477255214.jpg')"
      }}
    >
      <button style={{margin:"0px",float:'left',padding:"10px", fontSize:'large', borderRadius:"10px",backgroundColor:"aquamarine" }} onClick={()=>navigate('/addUserByAdmin')}>Add user</button>
      <TableContainer style={{ height: "90%" }} component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell style={style}>Id</StyledTableCell>
              <StyledTableCell style={style} align="left">
                Username
              </StyledTableCell>
              <StyledTableCell style={style} align="left">
                Status
              </StyledTableCell>
              <StyledTableCell style={style} align="left">
                updateVacstatus
              </StyledTableCell>
              <StyledTableCell style={style} align="left">
                MotherVacStatus
              </StyledTableCell>
              <StyledTableCell style={style} align="left">
                updatestatus
              </StyledTableCell>
              <StyledTableCell style={style} align="left">
                FatherVacStatus
              </StyledTableCell>
              <StyledTableCell style={style} align="left">
                updatestatus
              </StyledTableCell>
              <StyledTableCell style={style} align="left">
                DeleteUser
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
                  {data1.username}
                </StyledTableCell>
                <StyledTableCell style={style1} align="left">
                  {data1.userVacStatus}
                </StyledTableCell>
                <StyledTableCell>
                  <ThemeProvider theme={theme}>
                    <Button
                      color="secondary"
                      onClick={() => handleUpdateUser(data1.id)}>
                      Update
                    </Button>
                  </ThemeProvider>
                </StyledTableCell>
                <StyledTableCell style={style1} align="left">
                  {data1.motherVacStatus}
                </StyledTableCell>
                <StyledTableCell>
                  <ThemeProvider theme={theme}>
                    <Button
                      color="secondary"
                      onClick={() => handleUpdateMother(data1.id)}>
                      Update
                    </Button>
                  </ThemeProvider>
                </StyledTableCell>
                <StyledTableCell style={style1} align="left">
                  {data1.fatherVacStatus}
                </StyledTableCell>
                <StyledTableCell>
                  <ThemeProvider theme={theme}>
                    <Button
                      color="secondary"
                      onClick={() => handleUpdateFather(data1.id)}>
                      Update
                    </Button>
                  </ThemeProvider>
                </StyledTableCell>
                <StyledTableCell>
                  <ThemeProvider theme={theme}>
                    <Button
                      color="primary"
                      onClick={() => deleteUser('http://localhost:8000/users',data1.id)}>
                      Delete
                    </Button>
                  </ThemeProvider>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    <Footer></Footer>
    <FooterEnd></FooterEnd>
    </div>
  );
}






{/*

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
import { getOneUser, editUser, deleteUser } from "./CrudCmps";
import Header from "./Header";
import Footer from "./Footer";
import { FooterEnd } from "./FooterEnd";

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

export function GetAllUsers() {
  const [data, setData] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");

  React.useEffect(() => {
    getData();
  }, []);

  const theme = createTheme({
    palette: {
      primary: {
        main: red[500],
      },
      secondary: {
        main: "#0000ff",
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
    await axios
      .get("http://localhost:8000/users")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      });
  };

  const handleUpdateUser = async (id) => {
    const response = await getOneUser("http://localhost:8000/users?id=" + id);
    console.log(response.data[0]);
    const data = response.data[0];
    if (data.userVacStatus === "yes") {
      data.userVacStatus = "no";
      await editUser(data, id, "http://localhost:8000/users");
    } else {
      data.userVacStatus = "yes";
      await editUser(data, id, "http://localhost:8000/users");
    }
  };

  const handleUpdateMother = async (id) => {
    const response = await getOneUser("http://localhost:8000/users?id=" + id);
    console.log(response.data[0]);
    const data = response.data[0];
    if (data.motherVacStatus === "yes") {
      data.motherVacStatus = "no";
      await editUser(data, id, "http://localhost:8000/users");
    } else {
      data.motherVacStatus = "yes";
      await editUser(data, id, "http://localhost:8000/users");
    }
  };

  const handleUpdateFather = async (id) => {
    const response = await getOneUser("http://localhost:8000/users?id=" + id);
    console.log(response.data[0]);
    const data = response.data[0];
    if (data.fatherVacStatus === "yes") {
      data.fatherVacStatus = "no";
      await editUser(data, id, "http://localhost:8000/users");
    } else {
      data.fatherVacStatus = "yes";
      await editUser(data, id, "http://localhost:8000/users");
    }
  };

  // Update data state based on search term
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    // Filter the data based on the search term
    const filteredData = data.filter((item) =>
      item.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(filteredData);
  }, [searchTerm, data]);

  return (
    <div>
      <Header></Header>
      <div
        style={{
          borderRadius: "5px",
          height: "600px",
          width: "90%",
          margin: "auto",
          marginTop: "8%",
          display: "auto",
          flexDirection: "column",
        }}
      >
        <div style={{ marginTop: "1rem" }}>
          <input
            type="text"
            placeholder="Search by username"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <TableContainer style={{ height: "80%" }} component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell style={style}>Id</StyledTableCell>
                <StyledTableCell style={style} align="left">
                  Username
                </StyledTableCell>
                <StyledTableCell style={style} align="left">
                  Status
                </StyledTableCell>
                <StyledTableCell style={style} align="left">
                  updateVacstatus
                </StyledTableCell>
                <StyledTableCell style={style} align="left">
                  MotherVacStatus
                </StyledTableCell>
                <StyledTableCell style={style} align="left">
                  updatestatus
                </StyledTableCell>
                <StyledTableCell style={style} align="left">
                  FatherVacStatus
                </StyledTableCell>
                <StyledTableCell style={style} align="left">
                  updatestatus
                </StyledTableCell>
                <StyledTableCell style={style} align="left">
                  DeleteUser
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
                    {data1.username}
                  </StyledTableCell>
                  <StyledTableCell style={style1} align="left">
                    {data1.userVacStatus}
                  </StyledTableCell>
                  <StyledTableCell>
                    <ThemeProvider theme={theme}>
                      <Button
                        color="secondary"
                        onClick={() => handleUpdateUser(data1.id)}
                      >
                        Update
                      </Button>
                    </ThemeProvider>
                  </StyledTableCell>
                  <StyledTableCell style={style1} align="left">
                    {data1.motherVacStatus}
                  </StyledTableCell>
                  <StyledTableCell>
                    <ThemeProvider theme={theme}>
                      <Button
                        color="secondary"
                        onClick={() => handleUpdateMother(data1.id)}
                      >
                        Update
                      </Button>
                    </ThemeProvider>
                  </StyledTableCell>
                  <StyledTableCell style={style1} align="left">
                    {data1.fatherVacStatus}
                  </StyledTableCell>
                  <StyledTableCell>
                    <ThemeProvider theme={theme}>
                      <Button
                        color="secondary"
                        onClick={() => handleUpdateFather(data1.id)}
                      >
                        Update
                      </Button>
                    </ThemeProvider>
                  </StyledTableCell>
                  <StyledTableCell>
                    <ThemeProvider theme={theme}>
                      <Button
                        color="primary"
                        onClick={() =>
                          deleteUser("http://localhost:8000/users", data1.id)
                        }
                      >
                        Delete
                      </Button>
                    </ThemeProvider>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Footer></Footer>
      <FooterEnd></FooterEnd>
    </div>
  );
}

*/}