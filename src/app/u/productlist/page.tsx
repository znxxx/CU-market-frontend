"use client";

import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";

import { getToken } from "next-auth/jwt";
import { useSession } from "next-auth/react";
import { ProductBox } from "../../../../components/ProductBox";
import Image from "next/image";

function useFetch(query, page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState<any[]>([]);

  const { data: session, status } = useSession();
  const access_token = session?.user.access_token;

  const sendQuery = useCallback(
    async (query: any) => {
      if (status === "loading") return;
      try {
        await setLoading(true);
        await setError(false);
        const res = await axios.get("http://localhost:4000/product/available", {
          headers: { Authorization: `Bearer ${access_token}` },
        });
        await setList((prev) => [...prev, ...res.data]);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    },
    [query, page, access_token, status]
  );

  useEffect(() => {
    sendQuery(query);
  }, [query, sendQuery, page, access_token, status]);

  return { loading, error, list };
}

function ProductList(props: any) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const { loading, error, list } = useFetch(query, page);
  const loader = useRef(null);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleObserver = useCallback((entries) => {
    const lastProduct = entries[0];
    if (!lastProduct.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  console.log(list);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <main className="bg-[#353966] min-h-screen">
      <div>
        <div className="relative p-5">
          <button className="absolute rounded-full bg-[#FF8BBC] w-[70px] h-[51px] flex place-content-center">
            <Image
              src="/images/Search.svg"
              alt="search"
              className="self-center"
              width={27}
              height={27}
            />
          </button>
          <input
            className="text-slate-50 w-full h-[51px] bg-[#40477B] text-xl rounded-full pl-[91px]"
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="What are you looking for...?"
          ></input>
        </div>
        <div className="flex flex-wrap">
          {list.map((item, i) => (
            <ProductBox key={item.id} product={item} />
          ))}
        </div>
        {loading && <p>Loading...</p>}
        {error && <p>Error!</p>}
        <div ref={loader} />
        <div ref={loader} />
      </div>
    </main>
  );
}

export default ProductList;
