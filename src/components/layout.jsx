import React, { Fragment, useState } from "react";
import Sidebar from "react-sidebar";
import Header from "./header";
import SideMenu from "./sidemenu";

const mql = window.matchMedia(`(min-width: 800px)`);

export default ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarDocked, setSidebarDocked] = useState(mql.matches);

  mql.addListener(() => {
    setSidebarDocked(mql.matches);
  });

  return (
    <Fragment>
      <Sidebar
        sidebar={<SideMenu toggleMenu={() => setSidebarOpen(false)} />}
        open={sidebarOpen}
        onSetOpen={setSidebarOpen}
        docked={sidebarDocked}
      >
        <Header toggleMenu={() => setSidebarOpen(true)} />
        <div className="container-fluid">{children}</div>
      </Sidebar>
    </Fragment>
  );
};
