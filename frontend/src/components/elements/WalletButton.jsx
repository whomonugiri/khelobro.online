import { FaWallet } from "react-icons/fa6";
import { RiCopperCoinFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router";

export const WalletButton = (props) => {
   const { _y } = useSelector(
    (store) => store.auth
  );
  return (
    <>
      <Link to={_y==true ?'':'/wallet'} className="text-decoration-none text-dark">
        <div className="d-flex border rounded rounded-3 border-dark p-1 px-2 align-items-center gap-2">
          
          <RiCopperCoinFill className="text-warning" />


          <div className="small fw-bold">{props.balance || 0} </div>
        </div>
      </Link>
    </>
  );
};
