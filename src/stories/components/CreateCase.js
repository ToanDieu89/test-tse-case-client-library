// import React from "react";
// import PropTypes from "prop-types";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
// import { push } from "react-router-redux";
// import closeIcon from "../../src/assets/icons/ic-close.svg";
// import CreateCaseForm from "./CreateCaseForm";
// import { CASE_CREATE } from "../../src/constants/actionTypes";
// import { getTranslate } from "react-localize-redux";

// class CreateCase extends React.Component {
//   // HACK force retrive baseID
//   componentWillUpdate = () => {
//     // this.baseID = localStorage.getItem("baseID");
//     this.baseID = this.props.baseID;
//     this.email = this.props.email;
//   };

//   submitNewCase = values => {
//     this.props.submitNewCase({ values }).then(res => {
//       if (res.type === CASE_CREATE.SUCCESS) {
//         this.props.toggleCaseForm();
//         this.props.fetchCaseListByBase({ baseID: this.props.baseID });
//       }
//     });
//   };

//   render() {
//     const {
//       showCaseForm,
//       toggleCaseForm,
//       error,
//       loading,
//       translate,
//       clearForm
//     } = this.props;
//     const FormModal = (
//       <div>
//         <div className="Modal Modal--full" />
//         <div className="card card--modal">
//           <div className="card__title card__title--form">
//             <div>{translate("createnewcase")}</div>
//             <div
//               className="card__title__close"
//               onClick={() => {
//                 toggleCaseForm();
//                 clearForm();
//               }}
//             >
//               <img src={closeIcon} />
//             </div>
//           </div>
//           <CreateCaseForm
//             onSubmit={value => this.submitNewCase(value)}
//             baseID={this.props.baseID}
//             createdBy={this.email}
//             error={error}
//             loading={loading}
//             translate={translate}
//           />
//         </div>
//       </div>
//     );
//     return showCaseForm ? FormModal : "";
//   }
// }

// export default CreateCase;
