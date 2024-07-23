import { useEffect, useRef, useState } from "react";
import { v4 as uuid } from 'uuid';
import { RiAddFill, RiDeleteBinLine } from '@remixicon/react';
import { useNavigate, useParams } from "react-router-dom";

export default function Todo() {

    const [fetchedTodo, setFetchedTodo] = useState('');
    const [subDocuments, setSubDocuments] = useState('');
    const [todoId, setToId] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = () => {
            const res = JSON.parse(localStorage.getItem('user_todos')) || [];
            const single_todo = res.filter(item => item._id === id)[0];
            const sub_items = single_todo.items;
            console.log(single_todo);
            console.log(sub_items)
            setFetchedTodo(single_todo);
            setSubDocuments(sub_items);
            setToId(single_todo._id)
        }
        fetchData()
    }, []);
    
    function delete_item(query) {
        setPushedLists(pushedLists.filter(item => item._id !== query));
    };

    return (
        <section>
            <div className="container" style={{ marginTop: '30vh' }}>
                <div className="row d-flex justify-content-center">
                    <div className="col-12 my-3 my-lg-0 col-lg-7">
                        <div className="card">
                            <div className="d-flex justify-content-between p-3" style={{
                                borderLeft : fetchedTodo.priority === 'high'
                                ? '2px solid red'
                                : fetchedTodo.priority === 'medium'
                                ? '3px solid yellow'
                                : '2px solid green',
                            }}>
                                <div className="h1" style={{textTransform : 'capitalize'}}>
                                    {fetchedTodo.title}
                                </div>
                               
                            </div>
                            <div className="card preview-container">
                                <div className="card-body">
                                    {subDocuments.length === 0 ? (
                                        <div>
                                            <p>Nothing yet</p>
                                        </div>) : (
                                        subDocuments.map(item => (
                                            <div key={item._id} className="bg-light p-3 my-2 rounded justify-content-between shadow-sm">
                                                <div className="py-2 h5 d-flex justify-content-between">
                                                    <div>
                                                        {item.item}
                                                    </div>
                                                    <div>
                                                    <div className="form-check">
                                                            <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="flexCheckIndeterminate"
                                                            style={{ borderRadius: "50%" }}
                                                            />
                                                            
                                                    </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button className="btn edit-btn px-5 shadow"  onClick={() => navigate(`/todo/${id}/${item._id}`)}>Edit</button>
        
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
