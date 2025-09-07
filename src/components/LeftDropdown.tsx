import { BiX } from "react-icons/bi";
import "../css/leftDropdown.css";
import { useState } from "react";

interface LeftDropdownProps {
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const LeftDropdown = ({ setShowDropdown }: LeftDropdownProps) => {
  const [putOverlay, setPutOverlay] = useState(true);
  const year = new Date().getFullYear();
  console.log(year);

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
        <div className="flex-grow-1">
          <p className="options">Libri preferiti</p>
          <p className="options">Pagina personale</p>
          <p className="options">Impostazioni</p>
        </div>
        <div>
          <p className="mb-0 small opacity-50 text-center">
            © Copyright {year}
          </p>
          <p className="mb-0 small opacity-50 text-center">
            Made by Cristina Mastellaro
          </p>
          <p className="mb-0 mt-2 lh-1 small opacity-50 text-center">
            Picture in the initial page taken online
          </p>
        </div>
      </aside>
    </>
  );
};

export default LeftDropdown;
