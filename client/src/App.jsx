import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <div>Header</div>
      <Outlet />
      <div>Footer</div>
    </div>
  );
}

export default App;
