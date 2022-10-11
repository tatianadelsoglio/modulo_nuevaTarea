import React, { useState } from "react";
import { Col, Row } from "antd";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
import Drawer from "./Drawer";
import { TaskContext } from "../../context/TaskContext";

const MainLayout = () => {
  const history = useHistory();
  const search = queryString.parse(history.location.search);

  // Variables que vienen por URL
  const modori_id = Number(search.modori_id) ? Number(search.modori_id) : null;
  console.log(modori);
  const usu_id = Number(search.usu_id) ? Number(search.usu_id) : 1;
  const origen = search.ordigen ? search.origen : "todos";
  const generico_id = Number(search.generico_id);
  const cli_id = Number(search.cli_id);
  // const filter_id = Number(search.filter_id);

  const [modori, setModori] = useState(modori_id);
  const [tagsSelectFilters, setTagsSelectFilters] = useState([]);
  const [expiredDate, setExpiredDate] = useState("no vencidos"); // vencidos o no vencidos
  const [searchFilter, setSearchFilter] = useState("");
  const [modoriFilter, setModoriFilter] = useState(1);
  const [cliIdFilter, setCliIdFilter] = useState(null);
  const [showDrawer, setShowDrawer ] = useState(false);
  const [idUser, setIdUser] = useState(usu_id);
  const [modOrigen, setModOrigen] = useState("");
  const drawer = search.drawer;
  const modorigen = search.modori_id;
  console.log(modorigen);
  return (
    <TaskContext.Provider
      value={{
        modori,
        usu_id,
        origen,
        tagsSelectFilters,
        expiredDate,
        searchFilter,
        modoriFilter,
        generico_id,
        cli_id,
        cliIdFilter,
        showDrawer,
        idUser,
        modOrigen, 
        setModOrigen, 
        setIdUser, 
        setShowDrawer,
        setCliIdFilter,
        setModoriFilter,
        setSearchFilter,
        setExpiredDate,
        setTagsSelectFilters,
        setModori,
      }}
    >
      <Row gutter={[8, 8]}>
        <Col xs={24}>
          <div className="drawer_wrapper">
            <Drawer drawer={drawer} modorigen={modorigen} usuId={idUser}/>
          </div>
        </Col>
      </Row>
    </TaskContext.Provider>
  );
};

export default MainLayout;
