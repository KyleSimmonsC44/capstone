import React, { useRef } from "react";
import { NavBar } from "../nav/NavBar";
import "./Login.css";

export const Register = (props) => {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();
  const verifyPassword = useRef();
  const passwordDialog = useRef();
  const conflictDialog = useRef();
  const admin = useRef(null);

  const existingUserCheck = () => {
    return fetch(`http://localhost:8088/users?email=${email.current.value}`)
      .then((_) => _.json())
      .then((user) => !!user.length);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (password.current.value === verifyPassword.current.value) {
      existingUserCheck().then((userExists) => {
        if (!userExists) {
          fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email.current.value,
              password: password.current.value,
              name: `${firstName.current.value} ${lastName.current.value}`,
              admin: admin.current.checked,
            }),
          })
            .then((_) => _.json())
            .then((createdUser) => {
              if (createdUser.hasOwnProperty("id")) {
                localStorage.setItem("app_login_id", createdUser.id);
                localStorage.setItem("admin", createdUser.admin);
                props.setAuthUser(true);
                props.history.push("/");
              }
            });
        } else {
          conflictDialog.current.showModal();
        }
      });
    } else {
      passwordDialog.current.showModal();
    }
  };

  return (
    <main style={{ textAlign: "center" }}>
      <div className="bg-image"></div>
      <dialog className="dialog dialog--password" ref={passwordDialog}>
        <div>Passwords do not match</div>
        <button
          className="button--close"
          onClick={(e) => passwordDialog.current.close()}
        >
          Close
        </button>
      </dialog>

      <dialog className="dialog dialog--password" ref={conflictDialog}>
        <div>Account with that email address already exists</div>
        <button
          className="button--close"
          onClick={(e) => conflictDialog.current.close()}
        >
          Close
        </button>
      </dialog>
      <section className="sectionDiv">
        <form className="form--login" onSubmit={handleRegister}>
          <h1 className="h3 mb-3 font-weight-normal">
            Please Register for Sue's Visions
          </h1>
          <fieldset>
            <label htmlFor="firstName"> First Name </label>
            <input
              ref={firstName}
              type="text"
              name="firstName"
              className="form-control"
              placeholder="First name"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <label htmlFor="lastName"> Last Name </label>
            <input
              ref={lastName}
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Last name"
              required
            />
          </fieldset>
          <fieldset>
            <label htmlFor="inputEmail"> Email address </label>
            <input
              ref={email}
              type="email"
              name="email"
              className="form-control"
              placeholder="Email address"
              required
            />
          </fieldset>
          <fieldset>
            <div className="checkBox">
              <input
                type="checkbox"
                name="admin"
                ref={admin}
                id="userAdmin"
                className="check"
              ></input>
              <label htmlFor="admin">Admin</label>
            </div>
          </fieldset>
          <fieldset>
            <label htmlFor="inputPassword"> Password </label>
            <input
              ref={password}
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              required
            />
          </fieldset>
          <fieldset>
            <label htmlFor="verifyPassword"> Verify Password </label>
            <input
              ref={verifyPassword}
              type="password"
              name="verifyPassword"
              className="form-control"
              placeholder="Verify password"
              required
            />
          </fieldset>
          <fieldset className="signInButton">
            <div className="submitButton">
            <button type="submit" onClick={NavBar}>
              {" "}
              Sign in{" "}
            </button>
            </div>
          </fieldset>
        </form>
      </section>
    </main>
  );
};
