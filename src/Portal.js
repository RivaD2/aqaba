import { useEffect } from "react";
import { createPortal } from "react-dom";

// const Portal = ({children}) => {
//   let rootModal = document.getElementById("modal");

//   if(!rootModal) {
//     rootModal = document.createElement("div");
//     rootModal.setAttribute("id", "modal");
//     document.body.appendChild(rootModal);
//   }

//   const modalElement = document.createElement("div");
//   useEffect(() => {
//     rootModal.appendChild(modalElement);
//     return () => rootModal.removeChild(modalElement);
//   })

//   return createPortal(children, modalElement);
// }

// export default Portal;