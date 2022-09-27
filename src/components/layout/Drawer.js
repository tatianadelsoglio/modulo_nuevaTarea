/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from "react";
import { Button, Drawer as DRW } from "antd";
import "./Drawer.css";

import { PlusOutlined } from "@ant-design/icons";
import NuevaTarea from "../nueva_tarea/NuevaTarea";

const Drawer = ({ drawer }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  useEffect(() => {
    let timer;
    if (drawer === "true") {
      timer = setTimeout(() => {
        setShowDrawer(true);
      }, 100);
    }

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const onClose = () => {
    window.localStorage.setItem("drawer", JSON.stringify(false));
    setShowDrawer(false);
    return true;
  };

  return (
    <>
      <div className="drawer_container">
        <Button
        className="btn_drawer"
        onClick={() => setShowDrawer(true)}
        icon={<PlusOutlined/>}
        >Tarea</Button>
        <DRW
          title="Nueva Tarea"
          placement="right"
          closable={true}
          onClose={onClose}
          visible={showDrawer}
          width={600}
          height="100%"
        >
          <NuevaTarea/>
        </DRW>
      </div>
    </>
  );
};

export default Drawer;
