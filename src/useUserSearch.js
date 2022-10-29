import { useEffect, useState } from "react";
import axios from "axios";

export default function useUserSearch(nat, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(false);

    let natString = "";
    for(let n in nat) {
      natString+=nat[n]+","
    }

    if (pageNumber === 20) {
      setHasMore(false);
      setLoading(false);
    } else {
      axios({
        method: "GET",
        url: "https://randomuser.me/api",
        params: { results: 50, page: pageNumber, nat: natString },
      }).then((res) => {
        console.log(res.data.results);
        setUsers((prevUsers) => {
          return [...prevUsers, ...res.data.results];
        });
        setLoading(false);
      }).catch((err)=> {
        console.log(err);
        setError(true);
      });
    }
  }, [pageNumber, setUsers, nat]);

  return { loading, error, users, setUsers, hasMore };
}
