import axios from 'axios';
import { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';

function Home() {
  const [postValue, setPostvalue] = useState('');
  const [todos, setTodos] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [itemToUpdate, setItemToUpdate] = useState('');
  const [updateValue, setUpdateValue] = useState('');
  const [updateItem, setUpdateItem] = useState('');

  // Function to fetch todos from the server
  const fetchTodos = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/todos');
      setTodos(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle the submission of a new todo
  const handleSubmits = async () => {
    try {
      const newTodo = {
        _id: new Date().toISOString(),
        item: postValue,
        createdAt: new Date().toISOString()
      };

      // Post the new todo to the server
      const res = await axios.post('http://localhost:8080/api/todos', newTodo);
      const data = res.data;

      // Check if the insertion was successful and update state
      if (data.changes > 0) {
        setTodos(prevTodos => [...prevTodos, { ...newTodo, id: data.id }]);
        setPostvalue(''); // Clear input field after submission
      }
      setIsSubmitting(false);
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  // Fetch todos initially on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  // Function to handle updates (e.g., opening modal or other logic)
  const handleUpdates = (id, item) => {
    setItemToUpdate(id);
    setUpdateItem(item)
    console.log(id, item);
  };

  

  return (
    <div className="container" style={{ marginTop: '30dvh' }}>
      <div className="row">
        <div className="col-5">
          <div className="card p-3">
            <div className="body">
              <div>New Todo</div>
              <input
                type="text"
                className="form-control"
                value={postValue}
                onChange={(e) => setPostvalue(e.target.value)}
              />
              <div className="d-flex justify-content-center my-3">
                <button
                  className="btn btn-primary"
                  style={{ paddingInline: '5rem' }}
                  onClick={handleSubmits}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-5">
          <div className="card">
            <div className="card-body">
              {todos.map((todo) => (
                <div key={todo.id}>
                  <div className='d-flex justify-content-between'>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id={`checkbox-${todo.id}`}
                        style={{ borderRadius: '50%' }}
                      />
                      <label className="form-check-label" htmlFor={`checkbox-${todo.id}`}>
                        {todo.item}
                      </label>
                    </div>
                    <div>
                      <IconButton onClick={() => handleUpdates(todo._id, todo.item)} data-toggle="modal" data-target="#exampleModal">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none">
                          <path d="M16.2141 4.98239L17.6158 3.58063C18.39 2.80646 19.6452 2.80646 20.4194 3.58063C21.1935 4.3548 21.1935 5.60998 20.4194 6.38415L19.0176 7.78591M16.2141 4.98239L10.9802 10.2163C9.93493 11.2616 9.41226 11.7842 9.05637 12.4211C8.70047 13.058 8.3424 14.5619 8 16C9.43809 15.6576 10.942 15.2995 11.5789 14.9436C12.2158 14.5877 12.7384 14.0651 13.7837 13.0198L19.0176 7.78591M16.2141 4.98239L19.0176 7.78591" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M21 12C21 16.2426 21 18.364 19.682 19.682C18.364 21 16.2426 21 12 21C7.75736 21 5.63604 21 4.31802 19.682C3 18.364 3 16.2426 3 12C3 7.75736 3 5.63604 4.31802 4.31802C5.63604 3 7.75736 3 12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </IconButton>
                      <IconButton onClick={ async () => {
                        try {
                          const res = await axios.delete(`http://localhost:8080/api/todos/${todo._id}`);
                          const data = res.data;
                      
                            setTodos(todos.filter(item => item._id !== todo._id));
                          
                        } catch (error) {
                          console.error(error);
                        }
                      }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16} fill="none">
                          <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          <path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          <path d="M9.5 16.5L9.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          <path d="M14.5 16.5L14.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </IconButton>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Modal for updates */}
          <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header d-flex justify-content-between">
                  <h5 className="modal-title" id="exampleModalLabel">{updateItem}</h5>
                  <button type="button" className="close btn" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div>
                    Update todo
                  </div>
                  <input type="text" name="" id="" className="form-control" onChange={e => setUpdateValue(e.target.value)} />
                  
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary" onClick={async () => {
                      const res = await axios.patch('http://localhost:8080/api/todos/' + itemToUpdate, {item : updateValue});
                      const data = await res.data;
                      window.location.reload();
                  }}>Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
