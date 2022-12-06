const { gql } = require("@apollo/client");

export const NEW_TAREA = gql`
  mutation newTareaIframe(
    $inputTarea: tareaInput
    $inputNota: notaInput
    $inputAdjunto: uploadInput
    $usuAsig: Int
    $idLote: Int
  ) {
    newTareaIframeResolver(
      inputTarea: $inputTarea
      inputNota: $inputNota
      inputAdjunto: $inputAdjunto
      usuAsig: $usuAsig
      idLote: $idLote
    )
  }
`;

export const UPDATE_ESTADO_TAREA = gql`
  mutation updateEstadoTareaIframeResolver($idTarea: Int) {
    updateEstadoTareaIframeResolver(idTarea: $idTarea)
  }
`;