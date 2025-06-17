import Header from "@/components/header";
import {Outlet} from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="px-10 min-h-screen">
        <Header />
        <Outlet />
      </main>

      <div className="p-10 text-center bg-gray-800 mt-10">
        Made with 💗 by Khushi
      </div>
    </div>
  );
};

export default AppLayout;