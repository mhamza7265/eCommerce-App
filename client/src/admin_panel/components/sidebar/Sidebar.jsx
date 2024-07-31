import "./sidebar.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { images } from "../../constants";
import sidebarNav from "../../configs/sidebarNav";
import { successToast } from "../../../utility-functions/apiManager";
import { useDispatch } from "react-redux";
import { addCurrentUser } from "../../../redux/reducers/currentUserReducer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useRef, useState } from "react";
import { useEffect } from "react";

const Sidebar = ({ setRegistrationModalIsOpen }) => {
  // const [activeIndex, setActiveIndex] = useState(0);
  // const location = useLocation();
  const [displayLinks, setDisplayLinks] = useState(false);
  const [displaySubLinks, setDisplaySubLinks] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const CMSMainBtn = useRef();
  const CMSSubBtn = useRef();

  // useEffect(() => {
  //   const curPath = window.location.pathname.split("/")[1];
  //   const activeItem = sidebarNav.findIndex((item) => item.section === curPath);

  //   setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  // }, [location]);

  const closeSidebar = () => {
    document.querySelector(".main__content").style.transform =
      "scale(1) translateX(0)";
    setTimeout(() => {
      document.body.classList.remove("sidebar-open");
      document.querySelector(".main__content").style = "";
    }, 500);
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("current_user");
    localStorage.removeItem("admin_user");
    localStorage.removeItem("admin");
    dispatch(addCurrentUser(null));
    successToast("Logged out!");
    setTimeout(() => {
      navigate("/admin/login");
    }, 1000);
  };

  const handleRegisterModalClick = () => {
    setRegistrationModalIsOpen(true);
    closeSidebar();
  };

  const handleChildNavlinks = (e) => {
    console.log("target", e.target);
    if (e.target.classList.contains("cms-btn")) {
      setDisplayLinks(true);
    } else {
      setDisplayLinks(false);
    }

    if (e.target.classList.contains("site-setting-btn")) {
      console.log("yes");
      setDisplaySubLinks(true);
    } else {
      console.log("no");
      setDisplaySubLinks(false);
    }
  };

  useEffect(() => {
    if (CMSMainBtn.current.classList.contains("active")) {
      setDisplayLinks(true);
    }
    if (CMSSubBtn.current.classList.contains("active")) {
      setDisplaySubLinks(true);
    }
  }, []);

  const handleSiteSettingBtnClick = () => {
    closeSidebar();
    setDisplaySubLinks(true);
  };

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <LazyLoadImage src={images.logo} alt="" />
        <div className="sidebar-close" onClick={closeSidebar}>
          <i className="bx bx-x"></i>
        </div>
      </div>
      <div className="sidebar__menu" onClick={handleChildNavlinks}>
        <NavLink
          to={"/admin"}
          className={`sidebar__menu__item`}
          onClick={closeSidebar}
          end
        >
          <div className="sidebar__menu__item__icon">
            <i className="fa fa-dashboard"></i>
          </div>
          <div className="sidebar__menu__item__txt">Dashboard</div>
        </NavLink>
        {sidebarNav.map((nav, index) => (
          <NavLink
            to={nav.link}
            key={`nav-${index}`}
            className={`sidebar__menu__item`}
            onClick={closeSidebar}
          >
            <div className="sidebar__menu__item__icon">{nav.icon}</div>
            <div className="sidebar__menu__item__txt">{nav.text}</div>
          </NavLink>
        ))}
        <div
          className="sidebar__menu__item cursor-pointer"
          onClick={handleRegisterModalClick}
        >
          <div className="sidebar__menu__item__icon">
            <i className="fa-solid fa-user-plus"></i>
          </div>
          <div className="sidebar__menu__item__txt">Register</div>
        </div>
        <NavLink
          to={"cms"}
          className={`sidebar__menu__item cms-btn cms-main-btn`}
          ref={CMSMainBtn}
        >
          <div className="sidebar__menu__item__icon cms-btn">
            <i className="fa fa-wrench cms-btn"></i>
          </div>
          <div className="sidebar__menu__item__txt cms-btn">CMS</div>
        </NavLink>
        <NavLink
          to={"cms/homepage"}
          className={`sub-menu ${
            displayLinks
              ? "sidebar__menu__item cms-btn "
              : "sidebar__menu__item cms-btn d-none"
          }`}
          onClick={closeSidebar}
        >
          <div className="sidebar__menu__item__icon cms-btn">
            <i className="fa fa-dot-circle-o cms-btn"></i>
          </div>
          <div className="sidebar__menu__item__txt cms-btn">Home Page</div>
        </NavLink>
        <NavLink
          to={"cms/about"}
          className={`sub-menu ${
            displayLinks
              ? "sidebar__menu__item cms-btn"
              : "sidebar__menu__item cms-btn d-none"
          }`}
          onClick={closeSidebar}
        >
          <div className="sidebar__menu__item__icon cms-btn">
            <i className="fa fa-dot-circle-o cms-btn"></i>
          </div>
          <div className="sidebar__menu__item__txt cms-btn">About Page</div>
        </NavLink>
        <NavLink
          to={"cms/contact"}
          className={`sub-menu ${
            displayLinks
              ? "sidebar__menu__item cms-btn"
              : "sidebar__menu__item cms-btn d-none"
          }`}
          onClick={closeSidebar}
        >
          <div className="sidebar__menu__item__icon cms-btn">
            <i className="fa fa-dot-circle-o cms-btn"></i>
          </div>
          <div className="sidebar__menu__item__txt cms-btn">Contact Page</div>
        </NavLink>
        <NavLink
          to={"cms/settings"}
          className={`sub-menu site-setting-btn ${
            displayLinks
              ? "sidebar__menu__item cms-btn"
              : "sidebar__menu__item cms-btn d-none"
          }`}
          onClick={handleSiteSettingBtnClick}
          ref={CMSSubBtn}
        >
          <div className="sidebar__menu__item__icon cms-btn site-setting-btn">
            <i className="fa fa-gear cms-btn site-setting-btn"></i>
          </div>
          <div className="sidebar__menu__item__txt cms-btn site-setting-btn">
            Site settings
          </div>
        </NavLink>
        <NavLink
          to={"cms/settings/paymentSetting"}
          className={`sub-menu cms-btn site-setting-btn ${
            displaySubLinks
              ? "sidebar__menu__item sub-menu-btn"
              : "sidebar__menu__item sub-menu-btn d-none"
          }`}
          onClick={closeSidebar}
        >
          <div className="sidebar__menu__item__icon cms-btn site-setting-btn">
            <i className="fa fa-dot-circle-o cms-btn site-setting-btn"></i>
          </div>
          <div className="sidebar__menu__item__txt cms-btn site-setting-btn">
            Payment settings
          </div>
        </NavLink>
        <div className="sidebar__menu__item" onClick={handleLogoutClick}>
          <div className="sidebar__menu__item__icon">
            <i className="fa-solid fa-right-from-bracket"></i>
          </div>
          <div className="sidebar__menu__item__txt">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
