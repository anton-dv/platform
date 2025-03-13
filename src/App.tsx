import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./app/router/AppRouter";
import { useUser } from "./api/controllers/useUser";

function App() {
  useUser();
  return <RouterProvider router={AppRouter} />;
}

export default App;
