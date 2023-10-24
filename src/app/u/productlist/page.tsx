"use client";

// import axios from "axios";
// import { useCallback, useEffect, useRef, useState } from "react";

// import { getToken } from "next-auth/jwt";

// const secret = process.env.NEXTAUTH_SECRET;

// const access_token = async (req, res) => {
//   await getToken({ req, secret });
//   console.log("JSON Web Token", access_token);
//   res.end();
// };

// const token = function useFetch(query, page) {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [list, setList] = useState([]);

//   const sendQuery = useCallback(async () => {
//     try {
//       await setLoading(true);
//       await setError(false);
//       const res = await axios.get("http://localhost:4000/product/available");
//       await setList((prev) => [...prev, ...res.data]);
//       setLoading(false);
//     } catch (err) {
//       setError(err);
//     }
//   }, [query, page]);

//   useEffect(() => {
//     sendQuery(query);
//   }, [query, sendQuery, page]);

//   return { loading, error, list };
// };

function ProductList(props: any) {
  //   const [query, setQuery] = useState("");
  //   const [page, setPage] = useState(1);
  //   const { loading, error, list } = useFetch(query, page);
  //   const loader = useRef(null);

  //   const handleChange = (e) => {
  //     setQuery(e.target.value);
  //   };

  //   const handleObserver = useCallback((entries) => {
  //     const target = entries[0];
  //     if (target.isIntersecting) {
  //       setPage((prev) => prev + 1);
  //     }
  //   }, []);

  //   console.log(list);

  //   useEffect(() => {
  //     const option = {
  //       root: null,
  //       rootMargin: "20px",
  //       threshold: 0,
  //     };
  //     const observer = new IntersectionObserver(handleObserver, option);
  //     if (loader.current) observer.observe(loader.current);
  //   }, [handleObserver]);

  return (
    <main className="bg-[#353966] min-h-screen">
      <div>
        <button>Search</button>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="What are you looking for...?"
        ></input>

        <div ref={loader} />
      </div>
    </main>
  );
}

export default ProductList;
