import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState("dummy");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  return (
    <form className="container">
      <div class="form-group">
        <label for="exampleInputPassword1">User</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="User"
          name="user"
          onChange={(event) => {
            setUser(event.target.value);
          }}
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          name="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>

      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">
          Check me out
        </label>
      </div>
      <button
        type="submit"
        class="btn btn-primary"
        onClick={(e) => {
          e.preventDefault();
          navigate("/user", { state: { user: user, email: email } });
        console.log(user)
        }}
      >
        Submit
      </button>
    </form>
  );
}

export default Login;
