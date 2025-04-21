import Products from "./pages/Products";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Login, { loginData } from "./pages/Login";
import Cart from "./pages/Cart";
import ProtectedRoute from "./components/ProtectedRoute";




const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} action={loginData} />

        <Route element={<ProtectedRoute />}>
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
