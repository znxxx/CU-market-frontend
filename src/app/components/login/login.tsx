import React from "react";

interface user {
  id: number;
  email: string;
  password: string;
  studentId: string;
  firstName: string;
  lastName: string;
}

const Login = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const user = await res.json();
  return (
    <>
      <h1>CU Black Market</h1>
      <form>
        <div>
          <label htmlFor="username">Student ID/Email</label>
          <input type="text" id="username" value={user.email} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" id="password" value={user.password} />
        </div>
        <button type="submit">Login</button>
      </form>
      <button>Create account</button>
    </>
  );
};

export default Login;
