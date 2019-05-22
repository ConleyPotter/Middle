import React from "react";
import SignupForm from "../signup_form_container";

class MembershipPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Membership</h1>
        <br />
        <SignupForm />
        <h1>SPLASH INFO</h1>
      </div>
    );
  }
}

export default MembershipPage;
