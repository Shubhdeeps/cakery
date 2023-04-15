import { Outlet } from "react-router-dom";
import Layout from "../layout/Layout";

export default function Routes() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
