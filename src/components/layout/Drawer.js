/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState} from "react";
import { Button, Drawer as DRW } from "antd";
import "./Drawer.css";
// import { PlusOutlined } from "@ant-design/icons";
import NuevaTarea from "../nueva_tarea/NuevaTarea";
import { TaskContext } from "../../context/TaskContext";


const Drawer = ({ drawer, modorigen, campouno, campodos, campotres}) => {
  const {showDrawer, setShowDrawer, modOrigen, setModOrigen, idUser, setIdUser, campoUno, campoDos, campoTres} = useContext(TaskContext);

  setModOrigen(modorigen);

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
        {/* <Button
        className="btn_drawer"
        onClick={() => setShowDrawer(true)}
        >Tarea</Button> */}
        <DRW
          title="Nueva Tarea"
          placement="right"
          closable={true}
          onClose={onClose}
          visible={showDrawer}
          width={600}
          height="100%"
        >
          <NuevaTarea modorigen={modOrigen} campouno={campoUno} campodos={campoDos} campotres={campoTres}/>
        </DRW>
      </div>
    </>
  );
};

export default Drawer;
