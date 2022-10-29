import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = ({ data, dbData }) => {
  const coor = data ? data : null;
  const rows = [
    {
      titik: 1143155,
      x: "Acer Nitro ",
      y: "John Smith",
      z: "1 March",
      status: "Teruji",
    },
    {
      titik: 2235235,
      x: "Playstation 5",
      y: "Michael Doe",
      z: "1 March",
      status: "Teruji",
    },
    {
      titik: 2342353,
      x: "Redragon S101",
      y: "John Smith",
      z: "1 March",
      status: "Teruji",
    },
    {
      titik: 2357741,
      x: "Razer Blade 15",
      y: "Jane Smith",
      z: "1 March",
      status: "Teruji",
    },
    {
      titik: 2342355,
      x: "ASUS ROG Strix",
      y: "Harold Carol",
      z: "1 March",
      status: "Teruji",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWtitikth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">id</TableCell>
            <TableCell className="tableCell">latitude</TableCell>
            <TableCell className="tableCell">longitude</TableCell>
            <TableCell className="tableCell">UHI (C)</TableCell>
            <TableCell className="tableCell">Place</TableCell>
            <TableCell className="tableCell">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dbData
            ? dbData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="tableCell">{row.id}</TableCell>
                  <TableCell className="tableCell">
                    <div className="cellWrapper">{row.latitude}</div>
                  </TableCell>
                  <TableCell className="tableCell">{row.longitude}</TableCell>
                  <TableCell className="tableCell">{row.temp}</TableCell>
                  <TableCell className="tableCell">
                    <span className={`status ${row.status}`}>{row.place}</span>
                  </TableCell>
                  <TableCell className="tableCell">{row.date}</TableCell>

                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
