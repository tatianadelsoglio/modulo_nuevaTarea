const { gql } = require("@apollo/client");

export const NEW_TAREA = gql`
  mutation newTareaIframe(
    $inputTarea: tareaInput
    $inputNota: notaInput
    $inputAdjunto: uploadInput
    $usuAsig: Int
  ) {
    newTareaIframeResolver(
      inputTarea: $inputTarea
      inputNota: $inputNota
      inputAdjunto: $inputAdjunto
      usuAsig: $usuAsig
    )
  }
`;