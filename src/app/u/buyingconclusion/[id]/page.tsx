"use client";
import axios from "axios";
import { useState } from "react";

export default function BuyingConclusionPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alreadyPaid, setAlreadyPaid] = useState(false);
  const [error, setError] = useState(false);

  async function handlePay(e) {
    e.preventDefault();
    console.log(email);
    console.log(password);

    const access_token = "";

    const res = await axios.post("url", {
      headers: { Authorization: `Bearer ${access_token}` },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (res.status === 200) {
      setAlreadyPaid(true);
      return;
    } else {
      setError(true);
    }
  }

  return (
    <div className="bg-[#353966] h-full flex text-stone-100">
      <div>Product</div>
      <div className="flex flex-col">
        <div>Pay with Paotung</div>
        <form className="flex flex-col">
          <label className="ml-7 mt-3">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="ml-7 mt-3">Password</label>
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={(e) => handlePay(e)}>Pay</button>
        </form>
      </div>
    </div>
  );
}
