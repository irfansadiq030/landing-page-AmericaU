import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";

export default function SeasonPassModal({ item, dismiss }) {
  console.log(item);
  return (
    <div className="modal">
      <div className="modal_container">
        <div className="modal-header">
          <span onClick={() => dismiss(false)} className="modal_close_span">
            <RiCloseCircleFill color="#000" className="modalClose" />
          </span>
        </div>
        <div className="p-3 min-h-full min-w-full mx-auto flex justify-center">
          <img
            className="object-contain"
            src={item.theme_img}
            alt={item.title}
          />
        </div>
      </div>
    </div>
  );
}
