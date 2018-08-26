// import React from "react";
// import PropTypes from "prop-types";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
// import format from "date-fns/format";
// import distanceInWordsToNow from "date-fns/distance_in_words_to_now";
// import Loading from "./Loading";
// import successIcon from "../../src/assets/icons/ic-circle-success.svg";
// import holdingIcon from "../../src/assets/icons/ic-pending.svg";
// import timeIcon from "../../src/assets/icons/ic-circle-time.svg";
// import { CASE_HOLD } from "../../src/constants/actionTypes";
// import configs from "../../src/constants/orgConfigs.js";
// import Modal from "react-modal";
// import ShowMore from "react-show-more";
// import Path from "ramda/src/path";
// import { getTranslate } from "react-localize-redux";
// const customStyles = {
//   content: {
//     top: "30%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)"
//   }
// };

// const showcomment = activity => {
//   const checkReson = Path(["meta", "detail", "reason"]);
//   if (checkReson(activity)) {
//     return (
//       <div className="u-text-align--left u-margin-bottom--6">
//         <ShowMore
//           lines={2}
//           more={<div className={`memo__content`}>Show more</div>}
//           less={<div className={`memo__content`}>Show less</div>}
//           anchorClass=""
//         >
//           {"Reason: "} {activity.meta.detail.reason};
//         </ShowMore>
//       </div>
//     );
//   }
//   return "";
// };
// const canHold = (steps, currentStep) => {
//   const checkReson = Path([currentStep - 1, "canHold"]);
//   if (checkReson(steps) && steps[currentStep - 1].canHold) {
//     return {};
//   } else {
//     return {
//       display: "none"
//     };
//   }
// };

// class CaseDetail extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       modalIsOpen: false,
//       showFeedback: false,
//       currentFeedback: []
//     };
//   }
//   state = {
//     showFeedback: false,
//     currentFeedback: []
//   };

//   componentDidMount() {
//     const caseID = this.props.caseDetail.data.id;
//     this.props.fetchCaseDetail({ caseID });
//   }
//   openModal = isHolding => {
//     if (isHolding) {
//       this.turnHoldFunc({ status: !isHolding });
//     } else {
//       this.setState({ modalIsOpen: true });
//     }
//   };

//   afterOpenModal = () => {
//     // references are now sync'd and can be accessed.
//     this.subtitle.style.color = "#f00";
//   };

//   closeModal = () => {
//     this.setState({ modalIsOpen: false });
//   };
//   updateInputValue = evt => {
//     this.setState({
//       inputComment: evt.target.value
//     });
//   };

//   turnHoldFunc = ({ status }) => {
//     const caseID = this.props.caseDetail.data.id;
//     const inputComment = this.state.inputComment;
//     this.props.turnHold({ caseID, status, inputComment }).then(res => {
//       if (res.type === CASE_HOLD.SUCCESS) {
//         this.props.fetchCaseDetail({ caseID });
//         this.setState({
//           modalIsOpen: false,
//           inputComment: ""
//         });
//       }
//     });
//   };

//   setCurrentFeedback(reports) {
//     this.setState({
//       currentFeedback: reports
//     });
//   }

//   toggleFeedbackModel() {
//     this.setState({
//       showFeedback: !this.state.showFeedback
//     });
//   }

//   render() {
//     const { caseDetail, translate, orgParam } = this.props;
//     const { currentFeedback } = this.state;
//     const {
//       alternativeId,
//       createdAt,
//       updatedAt,
//       currentStep,
//       issuerName,
//       location,
//       mobile,
//       steps,
//       activities = [],
//       isHolding,
//       extraParams,
//       reports = []
//     } =
//       caseDetail.data || {};
//     let isdelete = false;
//     if (
//       activities.length > 0 &&
//       activities[0].actiType != undefined &&
//       activities[0].actiType == "onUnregisteringPass"
//     ) {
//       isdelete = true;
//     }
//     const org = orgParam;
//     const fields = configs[org].display.caseDetailPage.sideBar;
//     const mapViewField = (item, key) => {
//       return {
//         licensePlate: (
//           <div key={key} className="list__item list__item--default">
//             <div className="sub-title u-margin-bottom--6">
//               {translate("licenseplate")}
//             </div>
//             <div className="u-color--dark-blue">
//               {item.LicensePlate ? item.LicensePlate : null}
//             </div>
//           </div>
//         ),
//         phone: (
//           <div key={key} className="list__item list__item--default">
//             <div className="sub-title u-margin-bottom--6">
//               {translate("mobilenumber")}
//             </div>
//             <div className="u-color--dark-blue">{item.mobile}</div>
//           </div>
//         ),
//         issuer: (
//           <div key={key} className="list__item list__item--default">
//             <div className="sub-title u-margin-bottom--6">
//               {translate("issuername")}
//             </div>
//             <div className="u-color--dark-blue">{item.issuerName}</div>
//           </div>
//         )
//       };
//     };

//     const FeedBack = (
//       <div>
//         <div
//           onClick={() => {
//             this.toggleFeedbackModel();
//           }}
//           className="Modal Modal--full"
//         />
//         <div className="card card--modal">
//           <div className="card__body card__body--feedback">
//             <div className="page-title u-margin-bottom--24">Feedback</div>
//             <ul>
//               {currentFeedback.map((f, i) => (
//                 <li key={i} className="u-margin-bottom--20">
//                   <div className="feedback-text">
//                     {f.display.split("\n").map((item, key) => (
//                       <span key={key}>
//                         {item}
//                         <br />
//                       </span>
//                     ))}
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     );

//     return (
//       <div className="container-lg u-padding-top--40">
//         {this.state.showFeedback ? FeedBack : null}
//         <div>
//           {caseDetail.loading ? (
//             <Loading />
//           ) : caseDetail.error ? (
//             <p>{caseDetail.error}</p>
//           ) : caseDetail.data && caseDetail.data.id ? (
//             <div>
//               <div className="u-margin-bottom--14">
//                 <div className="page-title">
//                   {translate("caseno")}
//                   {alternativeId}
//                 </div>
//                 <div className="page-title-info">
//                   Updated {distanceInWordsToNow(updatedAt, { addSuffix: true })}
//                 </div>
//               </div>
//               <div className="case-detail">
//                 <div className="case-detail__info">
//                   <div className="card-time u-margin-bottom--20">
//                     <img className="card-time__icon" src={timeIcon} />
//                     <div className="card-time__time">
//                       <div className="card-time__time__hour">
//                         {format(createdAt, "HH:mm:ss")}
//                       </div>
//                       <div className="card-time__time__day">
//                         {format(createdAt, "dddd, MMM DD, YYYY")}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="u-margin-bottom--20">
//                     {fields.map((field, index) => {
//                       return mapViewField(
//                         {
//                           mobile,
//                           issuerName,
//                           ...extraParams
//                         },
//                         index
//                       )[field];
//                     })}
//                   </div>
//                   <div className="u-margin-bottom--20">
//                     <div className="list__item list__item--default">
//                       <div className="sub-title u-margin-bottom--6">
//                         Location
//                       </div>
//                       <div className="u-color--dark-blue">{location}</div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="case-detail__activity">
//                   <table className="table table--large-row">
//                     <thead className="table__head">
//                       <tr>
//                         <th>{translate("stepandreport")}</th>
//                         <th />
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {steps.map((s, index) => {
//                         const rs = reports.filter(r => r.onStep == index + 1);
//                         return (
//                           <tr key={index} className="table__row">
//                             <td>
//                               {currentStep === index + 1 &&
//                                 isHolding && (
//                                   <img
//                                     className="table-row__icon"
//                                     src={holdingIcon}
//                                   />
//                                 )}&nbsp;&nbsp;
                              
//                               <div className="memo">
//                                 <div
//                                   className={`memo__content ${
//                                     currentStep === index + 1
//                                       ? "u-color--negative"
//                                       : null
//                                   } u-margin-bottom--6`}
//                                 >
//                                   {s.memo}
//                                 </div>
//                                 <div className="u-text-transform--uppercase">
//                                   {format(
//                                     s.scheduledAt,
//                                     "MMM DD, YYYY, HH:mm:ss"
//                                   )}
//                                 </div>
//                               </div>
//                             </td>
//                             <td className="u-text-align--right">
//                               {currentStep === index + 1 && (
//                                 <button
//                                   disabled={isdelete}
//                                   style={canHold(steps, currentStep)}
//                                   className="table-row__button"
//                                   onClick={
//                                     () => this.openModal(isHolding)
//                                   }
//                                 >
//                                   {isHolding ? "Resume" : "Pause"}
//                                 </button>
//                               )}
//                               &nbsp;&nbsp;
//                               {rs && rs.length ? (
//                                 <a
//                                   className="view"
//                                   onClick={() => {
//                                     this.setCurrentFeedback(rs);
//                                     this.toggleFeedbackModel();
//                                   }}
//                                 >
//                                   {translate("view")}
//                                 </a>
//                               ) : null}
//                               <Modal
//                                 isOpen={this.state.modalIsOpen}
//                                 onAfterOpen={this.afterOpenModal}
//                                 onRequestClose={this.closeModal}
//                                 style={customStyles}
//                                 contentLabel="Example Modal"
//                               >
//                                 <h2
//                                   ref={subtitle => (this.subtitle = subtitle)}
//                                 >
//                                   Comment
//                                 </h2>
//                                 <div
//                                   style={{
//                                     marginBottom: "18px",
//                                     marginTop: "18px"
//                                   }}
//                                 >
//                                   Please comment reason to pause
//                                 </div>
//                                 <form className="field__item">
//                                   <textarea
//                                     value={this.state.inputComment}
//                                     onChange={this.updateInputValue}
//                                     name="message"
//                                     rows="3"
//                                     cols="70"
//                                   />
//                                 </form>

//                                 <button
//                                   className="table-row__button"
//                                   onClick={() =>
//                                     this.turnHoldFunc({ status: !isHolding })
//                                   }
//                                 >
//                                   OK
//                                 </button>
//                                 <button
//                                   className="table-row__button"
//                                   onClick={this.closeModal}
//                                 >
//                                   Close
//                                 </button>
//                               </Modal>
//                             </td>
//                           </tr>
//                         );
//                       })}
//                     </tbody>
//                   </table>
//                   <br />
//                   <table className="table table--large-row">
//                     <thead className="table__head">
//                       <tr>
//                         <th>{translate("activities")}</th>
//                         <th />
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {activities.map((s, index) => {
//                         return (
//                           <tr key={index} className="table__row">
//                             <td>
//                               <img
//                                 className="table-row__icon"
//                                 src={successIcon}
//                               />
//                               <div className="memo">
//                                 <div
//                                   className={`memo__content u-margin-bottom--6`}
//                                 >
//                                   {s.detail}
//                                 </div>
//                                 {index == 0 ? showcomment(s) : ""}
//                                 <div className="u-text-transform--uppercase">
//                                   {format(
//                                     s.createdAt,
//                                     "MMM DD, YYYY, HH:mm:ss"
//                                   )}
//                                 </div>
//                               </div>
//                             </td>
//                             <td className="u-text-align--right" />
//                           </tr>
//                         );
//                       })}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             "no data"
//           )}
//         </div>
//       </div>
//     );
//   }
// }

// export default CaseDetail;
