import { useEffect, useRef, useState } from "react";
import { formatDistanceToNow} from 'date-fns'
import { Fab, IconButton } from "@mui/material";
import { RiAddFill, RiDeleteBinFill } from "@remixicon/react";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const [localServer, setLocalServer] = useState([]);
  const [query, setQuery] = useState('');
  const search = useRef();
  const navigate = useNavigate();

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
  

  return (
    <div className="parent-element container">
      <div className="row">
        <div className="col-12 col-lg-4">
          <div className="my-3">
            <input type="text" className="form-control" placeholder="search..."
              ref={search}
              onChange={e => setQuery(e.target.value)}
            />
          </div>
        </div>
        <Fab color="primary" aria-label="add" sx={{
          transform : 'translateX(55vw)',
          transform : 'translateY(55vh)'
          
        }}
          onClick={() => navigate('/new')}
        >
                <RiAddFill />
              </Fab>
      </div>
      <div className="row d-flex gap-2">
        {items.length === 0 ? (<div className="text-center mt-5">
          No todos yet
        </div>) :  items.map(list => (
          
            <div className="col-12 col-lg-4" key={list._id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title"> <div className="d-flex justify-content-between"> <span>{list.title}</span> <span style={{
                    background : list.priority === 'high'
                      ? 'red'
                      : list.priority === 'medium'
                      ? 'yellow'
                      : 'green',
                    height : '10px',
                    width : '10px',
                    borderRadius : '50%'
                  }}></span> </div> </h5>
                  <h6 className="card-subtitle mb-2 text-muted"> {formatDistanceToNow(list.createdAt, {
                    addSuffix : true
                  })} </h6>
                  {list.items.map(item => 
                    <div key={item._id} className="d-flex">
                      <div className="form-check">
                         <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" style={{borderRadius : '50%'}} />
                      </div>
                      <span>- {item.item}</span>
                    </div>
                  )}
                  <IconButton onClick={() => deleteTodos(list._id)}><RiDeleteBinFill /></IconButton>
                </div>
              </div>
            </div>
            
          
        ))}
      </div>
    </div>
  );
}

