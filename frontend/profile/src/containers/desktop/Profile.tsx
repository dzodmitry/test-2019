import React from "react";
import { Switch, Route } from "react-router-dom";
import Redact from "../../pages/redact/containers/desktop/Redact";
import Info from "../../pages/info/containers/desktop/Info";

const Profile = () => (
  <Switch>
      <Route path="/profile/edit" component={Redact} />
      <Route path="/profile" component={Info} />
  </Switch>
);

export default Profile;
