import { BiX } from "react-icons/bi";
import "../css/leftDropdown.css";
import { useState } from "react";

interface LeftDropdownProps {
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const LeftDropdown = ({ setShowDropdown }: LeftDropdownProps) => {
  const [putOverlay, setPutOverlay] = useState(true);

  return (
    <>
      {putOverlay && <div className="overlay"></div>}
      <aside className="d-flex flex-column aside-sidebar">
        <BiX
          className="align-self-end mb-3"
          onClick={() => {
            setPutOverlay(false);
            setShowDropdown(false);
          }}
        />
        <p className="options">Libri preferiti</p>
        <p className="options">Pagina personale</p>
        <p className="options">Impostazioni</p>
      </aside>
    </>
  );
};

export default LeftDropdown;
