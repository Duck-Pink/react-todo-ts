import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoList from "./components/Row/TodoList";
import Profile from "./components/Profile/Profile";
import SignIn from "./components/SignIn/SignIn";
import Layout from "./components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const BrowserRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <SignIn />,
        },
        {
          path: "/home",
          element: <TodoList />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
  ]);
  return (
    // <div className="app">
    //    <Router>
    //     <Routes>
    //       <Route path="/" element={<Layout />}>
    //         <Route path="/home" element={<TodoList />} />
    //         <Route path="/profile" element={<Profile />} />
    //         <Route path="/" element={<SignIn />} />
    //       </Route>
    //     </Routes>
    //   </Router>
    // </div>

    <RouterProvider router={BrowserRoutes} />
  );
}

export default App;
