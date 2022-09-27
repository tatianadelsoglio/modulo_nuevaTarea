const { gql } = require("@apollo/client");

export const GET_TAREAS = gql`
  query getTareasIframe(
    $idUsuario: Int
    $filtroFecha: String
    $fecha: String
    $estado: Int
    $idUsuarioFiltro: String
  ) {
    getTareasIframeResolver(
      idUsuario: $idUsuario
      filtroFecha: $filtroFecha
      fecha: $fecha
      estado: $estado
      idUsuarioFiltro: $idUsuarioFiltro
    )
  }
`;