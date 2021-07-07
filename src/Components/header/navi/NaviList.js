import React from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { mainRoutes } from "../../../routes/mainRoutes";
import NavListItem from "./NaviListItem";
import { NavListStyled } from "./NavListStyled";
import UserInfo from "./UserInfo";

const NavList = ({ location, auth }) => {
  return (
    <NavListStyled>
      <div>
        <NavLink
          exact
          className="classNeActiv"
          activeClassName="classActive"
          to="/"
        >
          Home
        </NavLink>
      </div>
      <ul>
        {mainRoutes.map((item) => (
          <NavListItem
            item={item}
            location={location}
            key={item.path}
            auth={auth}
          />
        ))}
        <UserInfo />
      </ul>
    </NavListStyled>
  );
};
const mapState = (state) => ({
  auth: Boolean(state.auth.tokens.idToken),
});

export default connect(mapState)(withRouter(NavList));
