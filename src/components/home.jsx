import { useEffect, useRef, useState } from "react";
import { formatDistanceToNow} from 'date-fns'
import { Fab, IconButton } from "@mui/material";
import { RiAddFill, RiDeleteBinFill } from "@remixicon/react";
import { Navigate, useNavigate } from "react-router-dom";
export default function Home() {
  const [localServer, setLocalServer] = useState([]);
  const [query, setQuery] = useState('');
  const search = useRef();
  const navigate = useNavigate();
  const alertContainer = useRef();

  useEffect(() => {
    function fetchData(){
      let res = JSON.parse(localStorage.getItem('user_todos')) || [];
      setLocalServer(res);
    };
    fetchData();
  },[])
  let items = localServer.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));

  const deleteTodos = (target) => {
    const delete_item = localServer.filter(item => item._id !== target);
    setLocalServer(delete_item);
    localStorage.setItem('user_todos', JSON.stringify(delete_item));
  }
  
  function Alert(query){
    if(formatDistanceToNow(query , {addSuffix : true}).includes('less than a minute ago')){
      setTimeout(() => alertContainer.current.classList.add('show'));
      setTimeout(() => alertContainer.current.classList.remove('show'), 3000);
    };
  }

  return (
    <div className="parent-element container">
      <div className="row">
        <div className="col-12 col-lg-4">
          <div className="my-3">
            <input
              type="text"
              className="form-control"
              placeholder="search..."
              ref={search}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="alert shadow col-lg-2 col-12 text-center bg-white my-3 border-secondary" ref={alertContainer}>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"green"} fill={"none"}>
              <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 12.5L10.5 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            </div>
            <div className="mx-lg-3 ">
                Uploaded Successfully
            </div>
        </div>
      </div>
      <div className="row d-flex gap-2">
        {items.length === 0 ? (
          <div className="text-center mt-5">No todos yet</div>
        ) : (
          items.map((list) => (
            <div className="col-12 col-lg-4" key={list._id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    {" "}
                    <div className="d-flex justify-content-between">
                      {" "}
                      <span>{list.title}</span>{" "}
                      <span
                        style={{
                          background:
                            list.priority === "high"
                              ? "red"
                              : list.priority === "medium"
                              ? "yellow"
                              : "green",
                          height: "10px",
                          width: "10px",
                          borderRadius: "50%",
                        }}
                        className="shadow"
                      ></span>{" "}
                    </div>{" "}
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {" "}
                    {formatDistanceToNow(list.createdAt, {
                      addSuffix: true,
                    })}{" "}
                    {Alert(list.createdAt)}
                  </h6>
                    
                  {list.items.map((item) => (
                    <div key={item._id} className="d-flex">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckIndeterminate"
                          style={{ borderRadius: "50%" }}
                        />
                        
                      </div>
                      <span>- {item.item}</span>
                    </div>
                  ))}
                  <div className="d-flex justify-content-between">
                    <IconButton onClick={() => deleteTodos(list._id)}>
                      
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        color={"#000000"}
                        fill={"none"}
                      >
                        <path
                          d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M9.5 16.5L9.5 10.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M14.5 16.5L14.5 10.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>{" "}
                    </IconButton>
                    <button
                      className="btn shadow-sm"
                      onClick={() => navigate(`/todo/${list._id}`)}
                      style={{
                        background:
                          "linear-gradient(to right, #667BC6, #667bc6cb)",
                        color: "white",
                      }}
                    >
                      {" "}
                      view{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        fill={"none"}
                      >
                        <path
                          d="M20.0001 11.9998L4.00012 11.9998"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

