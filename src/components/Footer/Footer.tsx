import {
  House,
  List,
  CirclePlus,
  LayoutDashboard,
  CircleUserRound,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer id="rodape" className="invisible">
      <ul className="flex flex-row justify-around p-2.5 w-full left-0 right-0 bottom-0 fixed items-center bg-white">
        <li>
          <div className="flex flex-col justify-center items-center gap-1.25 hover:scale-[1.3] cursor-pointer">
            <div
              id="r_home"
              className="flex justify-center items-center text-center gap-1.25 max-w-17.5 text-xs"
            >
              <House aria-label="Inicio" width="30" />
            </div>
            <p>Início</p>
          </div>
        </li>
        <li>
          <div className="flex flex-col justify-center items-center gap-1.25 hover:scale-[1.3] cursor-pointer">
            <div
              id="r_lista"
              className="flex justify-center items-center text-center gap-1.25 max-w-17.5 text-xs"
              onClick={() => navigate("/lista")}
            >
              <List width="30" aria-label="lista" />
            </div>
            <p>Lista</p>
          </div>
        </li>
        <li>
          <div className="flex flex-col justify-center items-center gap-1.25 hover:scale-[1.3] cursor-pointer">
            <div
              id="r_cadastro"
              className="flex justify-center items-center text-center gap-1.25 max-w-17.5 text-xs"
              onClick={() => navigate("/")}
            >
              <CirclePlus width="30" aria-label="cadastrar produto" />
            </div>
            <p>Cadastrar</p>
          </div>
        </li>
        <li>
          <div className="flex flex-col justify-center items-center gap-1.25 hover:scale-[1.3] cursor-pointer">
            <div
              id="r_dashboard"
              className="flex justify-center items-center text-center gap-1.25 max-w-17.5 text-xs"
            >
              <LayoutDashboard width="30" aria-label="dasboard" />
            </div>
            <p>Dashboard</p>
          </div>
        </li>
        <li>
          <div className="flex flex-col justify-center items-center gap-1.25 hover:scale-[1.3] cursor-pointer">
            <div
              id="r_user"
              className="flex justify-center items-center text-center gap-1.25 max-w-17.5 text-xs"
            >
              <CircleUserRound width="30" aria-label="perfil" />
            </div>
            <p>Perfil</p>
          </div>
        </li>
      </ul>
    </footer>
  );
}
