import React from "react";
import { action } from "@storybook/addon-actions";
import {
  text,
  boolean,
  object,
  number,
  color,
  array,
  select,
  date
} from "@storybook/addon-knobs";

import { optionalSelect } from "./optionalSelect";

//MOCK DATA
import {
  caseList,
  cases,
  locale,
  caseDetail,
  notification,
  user,
  notificationFil,
  titleArrayTable,
  contentArrayTable,
  sidebarNavigationOptions,
  sidebarNavigationConfig,
  userstuffnavigation,
  logoConfigSelect,
  logostuffOptions,
  content,
  modalButtonPrimaryConfig,
  modalButtonSecondaryConfig,
  modalButtonPrimaryOption,
  modalButtonSecondaryOption,
  headerSecondPartConfig,
  headerSecondPartOption,
  headerThirdPartConfig,
  headerThirdPartOption,
  rowActionConfig,
  rowActionOptions,
  inputtypes,
  optionsizes,
  optiontypes
} from "../mockDatas/index";

// import LoginForm from "../components/LoginForm";
// import LoginPage from "../components/LoginPage";
// import CreateCaseForm from "../components/CreateCaseForm";
// import CaseList from "../components/CaseList";
// import CaseDetail from "../components/CaseDetail";
// import Header from "../components/Header";
// import Notification from "../components/Notification";
// import RowSuccessIcon from "../components/RowSuccessIcon";
// import CardTime from "../components/CardTime";
// import CardTimeIcon from "../components/CardTimeIcon";
// import RowWithTime from "../components/RowWithTime";

//NOTIFICATION
//NAVIGATION
import NavigationSideBarWrapper from "../components/navigations/NavigationSideBarWrapper";
//BUTTON
import Button from "../components/buttons/Button";
//MODAL
import Modal from "../components/modals/Modal";
//HEADER
import HeaderWrapper from "../components/headers/HeaderWrapper";
//ROW
import Row from "../components/rows/Row";
//LOADING
import LoadingComponent from "../components/loadings/Loading";
//SEARCH
import Search from "../components/searches/Search";
//TABLE
import Table from "../components/tables/Table";
//INPUT
import Input from "../components/inputs/Input";

// export const component_loginform = () => (
//   <LoginForm onSubmit={action("submit - clicked")} />
// );

export const component_NavigationSideBarWrapper = () => {
  const selectedOptions = select("Logo", logoConfigSelect, "Empty");
  const selectedOptionsNavigation = select(
    "Icon",
    sidebarNavigationConfig,
    "Empty"
  );
  return (
    <NavigationSideBarWrapper
      datas={sidebarNavigationOptions[selectedOptionsNavigation]}
      userstuff={userstuffnavigation}
      logostuff={logostuffOptions[selectedOptions]}
      withLogo={boolean("With Logo", false)}
    />
  );
};

//BUTTON
export const component_ButtonDefault = () => (
  <Button
    onClick={action("Clicked!!!")}
    label={text("Lable", "button")}
    disable={boolean("Disable", false)}
    size={optionalSelect("Size", optionsizes, "")}
    type={optionalSelect("Type", optiontypes, "")}
  />
);

//MODAL
export const component_Modal_default = () => {
  const buttonPrimarySelection = select(
    "Add button 1",
    modalButtonPrimaryConfig,
    "Empty"
  );
  const buttonSecondarySelection = select(
    "Add button 2",
    modalButtonSecondaryConfig,
    "Empty"
  );
  return (
    <Modal
      modalIsOpen={boolean("Open Modal", false)}
      closeModal={action("Close Modal Detected!!!")}
      lableheader={text("Lable Header", "i am header")}
      optionlable={text("Lable Optional", "")}
      content={text("Content", content)}
      btnprimary={modalButtonPrimaryOption[buttonPrimarySelection]}
      btnsecondary={modalButtonSecondaryOption[buttonSecondarySelection]}
    />
  );
};

//HEADER
export const component_HeaderWrapper_Default = () => {
  const selectionSecondPart = select(
    "Add Second Part",
    headerSecondPartConfig,
    "Empty"
  );
  const selectionThirdPart = select(
    "Add Third Part",
    headerThirdPartConfig,
    "Empty"
  );
  return (
    <HeaderWrapper
      mainlable={text("Main Lable", "Main Lable")}
      count={text("Count", "0")}
      second={headerSecondPartOption[selectionSecondPart]}
      third={headerThirdPartOption[selectionThirdPart]}
    />
  );
};

//ROW
export const component_Row = () => {
  const selectedAction = select("Select Actions", rowActionConfig, "One");
  return (
    <Row
      time={text("Time", "06:04:18")}
      lable={text("Lable", "Feedback of case #1812 was received")}
      description={text(
        "Content",
        "Driver with phone number +1 837 73263 has reponsed answers in the pass"
      )}
      action={rowActionOptions[selectedAction]}
    />
  );
};

//LOADING
export const component_Loading = () => (
  <LoadingComponent
    type={select("Type", { default: "default", circle: "circle" }, "default")}
  />
);

//INPUT
export const component_Input = () => (
  <Input
    lable={text("Lable", "lable")}
    type={select("Input Type", inputtypes, "text")}
  />
);

//SEARCH
export const component_Search = () => (
  <Search placeholder={text("PlaceHolder", "Enter value...")} />
);

//TABLE
export const component_Table = () => (
  <Table
    titleArray={titleArrayTable}
    contentArray={contentArrayTable}
    buttonLabel="view"
    link="/example/id"
  />
);

// export const component_LoginPage_default = () => (
//   <LoginPage
//     user={user}
//     loading={false}
//     error=""
//     login={action("login button - click")}
//   />
// );

//export const component_LoginPage_loading = () => (
//   <LoginPage
//     user={user}
//     loading={true}
//     error=""
//     login={action("login button - click")}
//   />
// );

//export const component_LoginPage_error = () => (
//   <LoginPage
//     user={user}
//     loading={false}
//     error="ERROR Message"
//     login={action("login button - click")}
//   />
// );

//export const component_caselist_default = () => (
//   <CaseList orgParam="missmp" cases={cases} translate={getTranslate(locale)} />
// );

//export const component_casedetail_default = () => (
//   <CaseDetail
//     turnHold={action("turnHold - function")}
//     fetchCaseDetail={action("fetchCaseDetail - function")}
//     orgParam="missmp"
//     caseDetail={caseDetail}
//     translate={getTranslate(locale)}
//   />
// )

// export const component_header_default = () => (
//   <Header
//       orgParam="missmp"
//       pathname="/"
//       notification={notification}
//       currentLanguage={getActiveLanguage(locale).code}
//       languages={locale.languages}
//       translate={getTranslate(locale)}
//       setLogout={action("logout - clicked")}
//       showNotifications={action("showNotifications - clicked")}
//       submitNewCase={action("submit new case - function")}
//       clearForm={action("clear form - function")}
//       baseID="4"
//       fetchCaseListByBase={action("fetchCaseListByBase - function")}
//       email="danh.tran@missmp.eu"
//     />
// )

//export const component_header_backicon = () => (
//   <Header
//       orgParam="missmp"
//       pathname="/case/:id"
//       notification={notification}
//       currentLanguage={getActiveLanguage(locale).code}
//       languages={locale.languages}
//       translate={getTranslate(locale)}
//       setLogout={action("logout - clicked")}
//       showNotifications={action("showNotifications - clicked")}
//       submitNewCase={action("submit new case - function")}
//       clearForm={action("clear form - function")}
//       baseID="4"
//       fetchCaseListByBase={action("fetchCaseListByBase - function")}
//       email="danh.tran@missmp.eu"
//     />
// )

//export const component_notification_default = () => (
//   <Notification
//       notification={notificationFil}
//       translate={getTranslate(locale)}
//     />
// )

//export const component_notification_loading = () => (
//   <Notification
//       notification={notification}
//       translate={getTranslate(locale)}
//     />
// )

// export const component_RowSuccessIcon = () => (
//   <RowSuccessIcon
//     index={0}
//     createdAt="2018-08-02T09:55:41.569168Z"
//     detail="Test Case unregistering pass of case 1"
//   />
// );
// export const component_RowWithTime = () => (
//   <RowWithTime
//     index={0}
//     createdAt="2018-08-02T09:55:41.569168Z"
//     detail="Test Case unregistering pass of case 1"
//   />
// );

// export const component_CardTime = () => (
//   <CardTime createdAt="2018-08-02T09:55:41.569168Z" />
// );

// export const component_CardTimeIcon = () => (
//   <CardTimeIcon createdAt="2018-08-02T09:55:41.569168Z" />
// );
