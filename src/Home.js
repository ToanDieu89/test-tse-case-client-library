import React, { Component } from "react";

import icChart from "./assets/icons/ic-chart.svg";
import icChatActive from "./assets/icons/ic-chart-active.svg";
import icNotification from "./assets/icons/ic-notification.svg";
import icNotificationActive from "./assets/icons/ic-notification-active.svg";
import icCalendar from "./assets/icons/ic-calendar.svg";
import icCalendarActive from "./assets/icons/ic-calendar-active.svg";
import icFolder from "./assets/icons/ic-folder.svg";
import icFolderActive from "./assets/icons/ic-folder-active.svg";
import userPic from "./assets/img/user.png";
import icExit from "./assets/icons/ic-exit.svg";
import icExitActive from "./assets/icons/ic-exit-active.svg";
import icKey from "./assets/icons/ic-key.svg";
import icKeyActive from "./assets/icons/ic-key-active.svg";
import missmp_logo from "./assets/img/missmp_logo.png";
import audi_logo from "./assets/img/audi_logo.png";
import "../src/assets/style/main.scss";

import { NavigationSideBarWrapper } from "./stories/components/navigations/bundle";
import HeaderWrapper from "./stories/components/headers/HeaderWrapper";

class Home extends Component {
  render() {
    const sidebarNavigation = [
      {
        icon: icChart,
        iconActive: icChatActive,
        url: "/chat"
      },
      {
        icon: icNotification,
        iconActive: icNotificationActive,
        url: "/notification"
      },
      {
        icon: icCalendar,
        iconActive: icCalendarActive,
        url: "/calendar"
      },
      {
        icon: icFolder,
        iconActive: icFolderActive,
        url: "/folder"
      }
    ];
    const userstuffnavigation = {
      pic: userPic,
      email: "user@missmp.eu",
      changepass: {
        text: "Change Password",
        icon: icKey,
        iconActive: icKeyActive,
        handleChangePassword: () => alert("You have changed your password!!!")
      },
      logout: {
        text: "Logout",
        icon: icExit,
        iconActive: icExitActive,
        handleLogout: () => alert("You have logged out!!!")
      }
    };
    const logoStuffPass = {
      pic: audi_logo,
      path: "/"
    };
    const second = { text: "mark all as read", iscolorblue: false };
    const third = {
      text: "last 7 days",
      iscolorblue: true,
      icon: icCalendar
    };
    return (
      <div className="home-wrapper">
        <NavigationSideBarWrapper
          withLogo={true}
          datas={sidebarNavigation}
          userstuff={userstuffnavigation}
          logostuff={logoStuffPass}
        />
        <HeaderWrapper mainlable="main lable" count="19" second={second} third={third}/>
      </div>
    );
  }
}

export default Home;
