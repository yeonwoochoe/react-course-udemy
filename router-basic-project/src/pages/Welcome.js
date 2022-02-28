import { Outlet } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>The welcome Page</h1>
      <Outlet />
    </section>
  );
};

export default Welcome;
