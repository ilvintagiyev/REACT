import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

const AdminHeader = () => {
  return (
    <AppBar style={{ backgroundColor: "green" }} position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}

        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Admin
        </Typography>
        <Button color="inherit">
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to={"/admin"}
          >
            Dashboard
          </Link>
        </Button>

        <Button color="inherit">
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to={"/admin/countries"}
          >
            Countries
          </Link>
        </Button>

        <Button color="inherit">
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to={"/admin/add-country"}
          >
            Add Country
          </Link>
        </Button>

        <Button color="inherit">
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to={"/admin/login"}
          >
            Login
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default AdminHeader;
