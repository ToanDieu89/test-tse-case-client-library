// import React, { Component } from "react";
// import Loading from "./Loading";

// class LoginPage extends Component {

//   render() {
//     const { user, login, loading, error } = this.props;
//     return (
//       <div className="container u-padding--60">
//         <div className="card card--material u-margin-both--60">
//           <div className="card__title">TSE Dashboard Login</div>
//           <div className="card__body u-padding-top--40 u-padding-bottom--60">
//             <div className="grid--6of12 u-margin--auto-horizontal">
//               {error ? (
//                 <div className="error u-margin-bottom--14">* {error}</div>
//               ) : null}
//               {loading ? <Loading /> : (
//                   <form className="form">
//                   <div className="u-text-align--center">
//                     <button
//                       onClick={login()}
//                       className="button button--primary button--centered u-margin-bottom--40"
//                       type="submit"
//                     >
//                       Login
//                     </button>
//                   </div>
//                 </form>
//               )}
//               <div className="u-color--vin-blue u-font-size--15 u-text-align--center">
//                 You will be redirected to authentication page
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default LoginPage;
