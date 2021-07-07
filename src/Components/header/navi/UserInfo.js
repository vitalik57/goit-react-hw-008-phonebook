import React from "react";
import { connect, useDispatch } from "react-redux";
import { logOut } from "../../../redux/auth/authActions";

const UserInfo = ({ displayName, auth }) => {
  const dispatch = useDispatch();
  const signOut = () => dispatch(logOut());
  // с шопа содрал
  return auth ? (
    <>
      <div>
        <strong>{displayName}</strong>
        <button type="button" onClick={signOut}>
          Log Out
        </button>
      </div>
    </>
  ) : null;
};
const mapStateToProps = (state) => ({
  displayName: state.auth.tokens.displayName,
  auth: Boolean(state.auth.tokens.idToken),
});
export default connect(mapStateToProps)(UserInfo);
