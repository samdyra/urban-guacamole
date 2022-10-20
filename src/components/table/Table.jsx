import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = ({ data }) => {
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
            <TableCell className="tableCell">Nama Titik</TableCell>
            <TableCell className="tableCell">Koordinat Northing (m)</TableCell>
            <TableCell className="tableCell">Koordinat Easting (m)</TableCell>
            <TableCell className="tableCell">Elevasi (m)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coor
            ? coor.map((row) => (
                <TableRow key={row.titik}>
                  <TableCell className="tableCell">{row.titik}</TableCell>
                  <TableCell className="tableCell">
                    <div className="cellWrapper">{row.x}</div>
                  </TableCell>
                  <TableCell className="tableCell">{row.y}</TableCell>
                  <TableCell className="tableCell">{row.z}</TableCell>
                  <TableCell className="tableCell">
                    <span className={`status ${row.status}`}>{row.status}</span>
                  </TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
