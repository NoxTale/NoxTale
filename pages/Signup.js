import React from "react";
import Row from "../components/Row";
import firebase from "../lib/Firebaseapi";

function SignInScreen() {
  return (
    <div>
      <Row getcollection="Pop" title="Pop" />
      <Row getcollection="Pop" title="Drift Phonk" />
    </div>
  );
}

export default SignInScreen;
