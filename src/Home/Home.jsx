import { useState, useRef, useCallback } from "react";

import { Row, Spinner } from "react-bootstrap";

import "./home.css"

import Header from "../Header/Header";
import ContactCard from "../ContactCard/ContactCard";
import ModalContact from "../ModalContact/ModalContact";

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
      <div className="gridContainer">
        <Row className="gx-0">
          {error ?
            <div className="statusMessage">Something went wrong</div>
            :
            isInfinite ?
              users.map((user, index) => {
                if (index + 1 === users.length) return <ContactCard handleShow={handleShow} index={index} contact={user} refLast={lastUserFetched} />
                return <ContactCard handleShow={handleShow} index={index} contact={user} />
              })
              :
              <>
                <div className="statusMessage">Filtered Results:</div>
                {filteredRes.length === 0 ?
                  <div className="statusMessage">No users </div>
                  :
                  filteredRes.map((user, index) => {
                    return <ContactCard handleShow={handleShow} index={index} contact={user} />
                  })
                }
              </>
          }
        </Row>
        <Row className="gx-0">
          {isInfinite &&
            <>
              {loading &&
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>}
              {!hasMore &&
                <div className="statusMessage">end of users catalog.</div>}</>
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