import AutosPage from "../pages/admin/autos/AutosPage";
import AutosListPage from "../pages/admin/autos/AutosListPage";
import AutoCreatePage from "../pages/admin/autos/AutosCreatePage";
import AdminPage from "../pages/admin/AdminPage";

// Rutas para administradores
export const AdminRouter = [
  {
    path: "admin",
    element: <AdminPage />,
    children: [
      {
        path: "autos",
        element: <AutosPage />,
        errorElement: <AutosPage />,
        children: [
          {
            path: "",
            element: <AutosListPage />,
            errorElement: <AutosListPage />,
          },
          {
            path: "crear",
            element: <AutoCreatePage />,
            errorElement: <AutoCreatePage />,
          },
          {
            path: "editar",
            element: <AutoCreatePage />,
            errorElement: <AutoCreatePage />,
          },
        ],
      },
    ],
  },
];