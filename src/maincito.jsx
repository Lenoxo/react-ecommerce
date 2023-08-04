import { Home } from "./pages/Home";
import { MyOrders } from "./pages/MyOrders";
import { NotFound } from "./pages/NotFound";
import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "./pages/Context";

export default function App({ children }) {
  function AppRoutes() {
    const routes = useRoutes([
      { path: "/", element: <Home /> },
      { path: "/products/:id", element: <MyOrders /> },
      { path: "/*", element: <NotFound /> },
    ]);
    return routes;
  }
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes>{children}</AppRoutes>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}
