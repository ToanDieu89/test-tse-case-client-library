// import React from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { push, goBack } from "react-router-redux";
// import { withRouter, Link, matchPath } from "react-router-dom";
// import PropTypes from "prop-types";
// import {
//   getTranslate,
//   setActiveLanguage,
//   getActiveLanguage
// } from "react-localize-redux";
// import CreateCase from "./CreateCase";

// import missmpLogo from "../../src/assets/img/missmp_logo.png";
// import audiLogo from "../../src/assets/img/audi_logo.png";
// import notificationIcon from "../../src/assets/icons/ic-notification.svg";
// import notificationActiveIcon from "../../src/assets/icons/ic-notification-active.svg";
// import addActiveIcon from "../../src/assets/icons/ic-circle-add-active.svg";
// import searchIcon from "../../src/assets/icons/ic-search.svg";
// import backIcon from "../../src/assets/icons/ic-back.svg";

// export default class Header extends React.Component {
//   state = {
//     showCaseForm: false,
//     org: this.props.orgParam
//   };
//   getLogo = () => {
//     switch (this.props.orgParam) {
//       case "missmp":
//         return missmpLogo;
//       case "audi":
//         return audiLogo;
//     }
//     return missmpLogo;
//   };

//   toggleCaseForm = () => {
//     this.setState({ showCaseForm: !this.state.showCaseForm });
//   };
//   switchLanguage = event => {
//     setActiveLanguage(event.target.value);
//     localStorage.setItem("language", event.target.value);
//   };
//   render() {
//     const { translate, languages, currentLanguage, pathname, setLogout, showNotifications, submitNewCase, clearForm, baseID, fetchCaseListByBase, email } = this.props;
//     const defaultInputValue =
//       pathname.split("/")[1] === "search" && pathname.split("/")[2]
//         ? pathname.split("/")[2]
//         : "";

//     const matchCase = matchPath(pathname, {
//       path: "/case/:id"
//     });

//     const HeaderIcon =
//       matchCase && matchCase.isExact ? (
//         <div className="header__icon header__icon--back">
//           <a onClick={() => goBack()}>
//             <img src={backIcon} />
//           </a>
//         </div>
//       ) : (
//         <div className="header__icon">
//           <Link to="/">
//             <img className="logo" src={`${this.getLogo()}`} />
//           </Link>
//         </div>
//       );
//     const Input = (
//       <div className="header__banner__search">
//         <img src={searchIcon} />
//         <input
//           className=""
//           placeholder="Search cases contain ..."
//           defaultValue={defaultInputValue}
//           ref={input => (this.input = input)}
//           required
//         />
//       </div>
//     );
//     return (
//       <header className="header">
//         {HeaderIcon}
//         <div className="header__banner">
//           {Input}
//           <div className="header__banner__item-group">
//             <div
//               className="header__banner__new-case"
//               onClick={() => this.toggleCaseForm()}
//             >
//               <a>
//                 <div>{translate("createnewcase")}</div>
//                 <img
//                   className="icon-img--24 u-margin-left--9"
//                   src={addActiveIcon}
//                 />
//               </a>
//             </div>
//             <div
//               className="header__banner__notification"
//               onClick={() => showNotifications()}
//             >
//               <a>
//                 <img
//                   className="icon-img-24"
//                   src={
//                     this.props.notification.isChanged
//                       ? notificationActiveIcon
//                       : notificationIcon
//                   }
//                 />
//               </a>
//             </div>
//             <div className="header__banner__lang">
//               <select
//                 className="rootLink"
//                 value={currentLanguage}
//                 onChange={this.switchLanguage}
//               >
//                 {languages
//                   ? languages.map(language => {
//                       return (
//                         <option key={language.code} value={language.code}>
//                           {language.code}
//                         </option>
//                       );
//                     })
//                   : ""}
//               </select>
//             </div>
//             <div className="header__banner__user" onClick={setLogout()}>
//               <a>{translate("logout")}</a>
//             </div>
//             <CreateCase
//               showCaseForm={this.state.showCaseForm}
//               toggleCaseForm={this.toggleCaseForm}
//               error=""
//               loading={false}
//               translate={translate}
//               submitNewCase={submitNewCase}
//               clearForm={clearForm}
//               baseID={baseID}
//               fetchCaseListByBase={fetchCaseListByBase}
//               email={email}
//             />
//           </div>
//         </div>
//       </header>
//     );
//   }
// }

// Header.propTypes = {
//   setLogout: PropTypes.func,
//   showNotifications: PropTypes.func,
//   notification: PropTypes.object,
//   submitNewCase: PropTypes.func,
//   push: PropTypes.func,
//   goBack: PropTypes.func,
//   location: PropTypes.shape({
//     pathname: PropTypes.string
//   }),
//   setActiveLanguage: PropTypes.func,
//   translate: PropTypes.func,
//   languages: PropTypes.array,
//   currentLanguage: PropTypes.string
// };
