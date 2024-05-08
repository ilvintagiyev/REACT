import EmployeeDetail from "../pages/Main/EmployeeDetail";
import Favorites from "../pages/Main/Favorites";
import Home from "../pages/Main/Home";
import MainRoot from "../pages/Main/MainRoot";
import AddEmployee from "../pages/Admin/AddEmployee";
import EditEmployee from "../pages/Admin/EditEmployee";
import AdminRoot from "../pages/Admin/AdminRoot";
import NotFound from "../pages/Main/NotFound";
import MainEmployees from "../pages/Main/Employees";
import AdminEmployees from "../pages/Admin/Employees";


export const Routes =[
    {
        path:'/',
        element:<MainRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"employees",
                element:<MainEmployees/>
            },
            {
                path:"favorites",
                element:<Favorites/>
            },
            {
                path:"employees/:id",
                element:<EmployeeDetail/>
            },
            {
                path:"*",
                element:<NotFound/>
            },
        ]
            
        
    },
    {
        path: '/admin',
        element: <AdminRoot/>,
        children: [
          {
              path: '',
              element: <AdminEmployees/>
          },
          {
              path: 'add-employee',
              element: <AddEmployee/>
          },
          {
              path: 'employees/edit:id',
              element: <EditEmployee/>
          }
        ]
      }
]