import {
  FaBook,
  FaFileLines,
  FaMoneyBillTransfer,
  FaRankingStar,
} from "react-icons/fa6";
import { MdKeyboardArrowRight, MdMobileScreenShare } from "react-icons/md";
import { useSelector } from "react-redux";
import { SidebarButton } from "../elements/SidebarButton";
import { SiReadthedocs } from "react-icons/si";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { GiTakeMyMoney } from "react-icons/gi";
import { LiaDiceD6Solid } from "react-icons/lia";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { GrChat } from "react-icons/gr";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router";
import $ from "jquery";
import { FaHome } from "react-icons/fa";
import { MdOutlineVerified, MdVerified } from "react-icons/md";
const Sidebar = () => {
  const { t } = useTranslation();
  const { profile, fullName, mobileNumber, kyc, _y } = useSelector(
    (store) => store.auth
  );
  const navigate = useNavigate();
  return (
    <>
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="sidebar"
        aria-labelledby="offcanvasExampleLabel"
        style={{ width: "90%" }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel"></h5>
          <button
            type="button"
            id="sidebar-close-btn"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div
            className="bg-primary rounded-2 mb-3"
            onClick={() => {
              navigate("/profile");
              $("#sidebar-close-btn").trigger("click");
            }}
          >
            <div className="border p-2 rounded-2 d-flex gap-2 align-items-center text-white shadow-sm bg-transparent bg-overlay">
              <img
                src={`assets/avatars/${profile}?v`}
                height="50px"
                className="rounded-circle border"
              />
              <div>
                <div className="fw-bold d-flex gap-1 align-items-center">
                  {fullName}{" "}
                  {kyc ? (
                    <MdVerified className="text-white" title="KYC Completed" />
                  ) : (
                    ""
                  )}
                </div>
                <div>{mobileNumber}</div>
              </div>
            </div>
          </div>

          {/* sidebar buttons */}

          <SidebarButton title={t("home_btn")} icon={<FaHome />} path="/" />
          <SidebarButton
            title={t("sidebar_transactions")}
            icon={<FaFileLines />}
            path="/transactions"
          />

          {_y == false && (
            <SidebarButton
              title={t("sidebar_add_money")}
              icon={<RiMoneyRupeeCircleFill />}
              path="/deposit"
            />
          )}
          {_y == false && (
            <SidebarButton
              title={t("sidebar_withdraw")}
              icon={<GiTakeMyMoney />}
              path="/withdraw"
            />
          )}

          <SidebarButton
            title={t("sidebar_leaderboard")}
            icon={<FaRankingStar />}
            path="/leaderboard"
          />

          <SidebarButton
            title={t("sidebar_refer")}
            icon={<MdMobileScreenShare />}
            path="/refer"
          />
          <SidebarButton
            title={t("sidebar_legal")}
            icon={<FaBook />}
            path="/terms"
          />
          <SidebarButton
            title={t("sidebar_chat_support")}
            icon={<GrChat />}
            path="/chat"
          />

          {/* sidebar buttons ends */}

          {/* //imporatnlinks */}
          <div className="d-flex gap-3 flex-wrap justify-content-center mt-3 small opacity-75">
            © 2025 Khelobro . All Rights Reserved
          </div>

          {/* imporatntlinks ends here */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
