"use client";

import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";

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
        setLoading(true);
        setError(false);
        const res = await axios.get(
          `http://localhost:4000/product/search?searchField=${query}`,
          {
            headers: { Authorization: `Bearer ${access_token}` },
          }
        );
        setList([...res.data]);
        setLoading(false);
      } catch (err) {
        setError(true);
      }
    },
    [query, page, access_token, status]
  );

  useEffect(() => {
    sendQuery(query);
  }, [query, sendQuery, page, access_token, status]);

  return { loading, error, list };
}

function ProductList() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const { loading, error, list } = useFetch(query, page);
  const loader = useRef(null);
  const debouncedInputTerm = useDebounce(query, 500);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleObserver = useCallback((entries) => {
    const lastProduct = entries[0];
    if (!lastProduct.isIntersecting) {
      console.log("running");
      // setPage((prev) => prev + 1);
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
    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [debouncedInputTerm]);

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

        <div className="flex flex-wrap gap-4 justify-around">
          {list.map((item, i) => (
            <ProductBox key={item.id} product={item} />
          ))}
        </div>
        {loading && <p>Loading...</p>}
        {error && <p>Error!</p>}

        <div ref={loader} />
      </div>
    </main>
  );
}

export default ProductList;
