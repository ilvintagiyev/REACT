import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
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
            to={"/admin/categories"}
          >
            categories
          </Link>
        </Button>
        <Button color="inherit">
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to={"/admin/add-category"}
          >
            Add category
          </Link>
        </Button>
        <Button color="inherit">
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to={"/admin/products"}
          >
            products
          </Link>
        </Button>
        <Button color="inherit">
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to={"/admin/add-product"}
          >
            Add product
          </Link>
        </Button>
        <Button color="inherit">
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to={"/admin/messages"}
          >
            messages
          </Link>
        </Button>
        <Button color="inherit">
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to={"/admin/orders"}
          >
            orders
          </Link>
        </Button>
        <Button color="inherit">
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to={"/admin/users"}
          >
            users
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
