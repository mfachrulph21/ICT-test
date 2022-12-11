import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import router from "./route";
import store from "./store";

function App() {
  return (
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
    </ReduxProvider>
  );
}

export default App;
