import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/routing/Navigation";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./store/store";
import { Toaster } from "react-hot-toast";
import { withCookies } from "react-cookie";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Toaster
          toastOptions={{
            position: "top-center",
          }}
        />
        <Navigation />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default withCookies(App);
