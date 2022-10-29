import { useState, useRef, useCallback } from "react";

import { Row, Spinner } from "react-bootstrap";

import Header from "./Header";
import ContactCard from "./ContactCard";
import ModalContact from "./ModalContact";

const Home = ({ loading, error, users, hasMore, setPageNumber }) => {
  const [query, setQuery] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);
  const [isInfinite, setIsInfinite] = useState(true);
  const [show, setShow] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const observer = useRef()
  const lastUserFetched = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore, setPageNumber])

  function filterResults(e) {
    e.preventDefault();
    setIsInfinite(false);
    let queryValues = query.split(" ");
    console.log(queryValues);
    if (queryValues[0] && queryValues[1]) {
      setFilteredRes(users.filter(user => user.name.first === queryValues[0] && user.name.last === queryValues[1]));
    }
    else if (queryValues[0]) {
      setFilteredRes(users.filter(user => user.name.first === queryValues[0]));
    }
    else setIsInfinite(true);
  }

  const handleClose = () => {
    setShow(false);
    setUserInfo(null);
  };
  const handleShow = (user) => {
    setUserInfo(user);
    console.log(user);
    setShow(true);
  };

  return (
    <>
      <Header query={query} setQuery={setQuery} filterResults={filterResults} />
      <div style={{ marginTop: "80px" }}>
        <Row style={{ justifyContent: "center" }}>
          {error ? <>Something went wrong</> :
            isInfinite ?
              <>
                {users.length !== 0 ?
                  users.map((user, index) => {
                    if (index + 1 === users.length) return <ContactCard handleShow={handleShow} index={index} contact={user} refLast={lastUserFetched} />
                    return <ContactCard handleShow={handleShow} index={index} contact={user} />
                  })
                  :
                  <>No users to be shown</>
                }
              </>
              :
              <>
                <div>
                  Filtered Results:
                </div>
                {filteredRes.length === 0 ? <>No users </> :
                  filteredRes.map((user, index) => {
                    return <ContactCard handleShow={handleShow} index={index} contact={user} />
                  })
                }
              </>
          }
        </Row>
        <Row style={{ justifyContent: "center" }}>
          {isInfinite &&
            <>
              {loading &&
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>}
              {!hasMore &&
                <>end of users catalog.</>}</>
          }
        </Row>
      </div>
      {userInfo &&
        <ModalContact show={show} handleClose={handleClose} contact={userInfo} />
      }
    </>
  );
}

export default Home;