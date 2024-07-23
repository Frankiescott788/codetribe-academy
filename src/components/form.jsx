import { useEffect, useRef, useState } from "react";
import { v4 as uuid } from 'uuid';
import { RiAddFill, RiDeleteBinLine } from '@remixicon/react';
import { useNavigate } from "react-router-dom";

export default function Form() {

    const [title, setTitle] = useState("");
    const [list, setList] = useState("");
    const [priority, setPriority] = useState("");
    const [lists, setLists] = useState([]);
    const [items, setItems] = useState([]);
    const [pushedLists, setPushedLists] = useState([]);
    const options = useRef();
    const clearInput = useRef();
    const redirect = useNavigate();


    const pushLists = () => {
        if (list === "") {
            console.log('please enter value');
        } else {
            setPushedLists([...pushedLists, {
                _id: Math.floor(Math.random() * (0, 1000) + 1),
                item: list,
            }]);
            clearInput.current.value = "";
            setList("");
        }
    };

    const add_todo = () => {
        const new_todo = {
            _id: uuid(),
            title: title,
            items: pushedLists,
            priority: options.current.value,
            createdAt : new Date(),
            updatedAt : new Date(),
        };
        const updatedLists = [...lists, new_todo];
        setLists(updatedLists);
        const ls = JSON.parse(localStorage.getItem('user_todos')) || [];
        const todos = [...ls, new_todo]; 
        localStorage.setItem("user_todos", JSON.stringify(todos)); 
        redirect('/');
    };

    function delete_item(query) {
        setPushedLists(pushedLists.filter(item => item._id !== query));
    };

    return (
        <section>
            <div className="container" style={{ marginTop: '30vh' }}>
                <div className="row d-flex justify-content-between">
                    <div className="col-12 col-lg-4">
                        <div className="card add-form">
                            <div className="card-body">
                                <div className="my-2">
                                    <label>Title</label>
                                    <input type="text" name="" id="" className="form-control" onChange={e => setTitle(e.target.value)}
                                        placeholder="e.g. Grocery"
                                    />
                                </div>
                                <div className="my-2">
                                    <label>Add lists</label>
                                    <input type="text" name="" id="" className="form-control"
                                        onChange={e => setList(e.target.value)}
                                        ref={clearInput}
                                        placeholder="e.g. Tomatoes"
                                    />
                                    <div className="d-flex justify-content-between">
                                        <button className="btn btn-primary mt-2"
                                            onClick={pushLists}
                                        > Add to Item<RiAddFill /> </button>
                                        <div className="mt-3">
                                            {pushedLists.length} Items
                                        </div>
                                    </div>
                                </div>
                                <select className="form-select" aria-label="Default select example" ref={options}>
                                    <option value={"f"}> select priority </option>
                                    <option value="high"> High </option>
                                    <option value="medium"> Medium </option>
                                    <option value="low"> Low </option>
                                </select>
                                <div className="d-flex justify-content-center mt-3 mb-2">
                                    <button className="btn btn-primary submit-btn" onClick={add_todo}> submit </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 my-3 my-lg-0 col-lg-7">
                        <div className="card">
                            <div className="d-flex justify-content-between p-3">
                                <div>
                                    Preview
                                </div>
                                <div>
                                    <button className="btn delete-all-btn"
                                        onClick={() => setPushedLists([])}
                                    >Remove All</button>
                                </div>
                            </div>
                            <div className="card preview-container">
                                <div className="card-body">
                                    {pushedLists.length === 0 ? (
                                        <div>
                                            <p>Nothing yet</p>
                                        </div>) : (
                                        pushedLists.map(item => (
                                            <div key={item._id} className="bg-light p-3 my-2 rounded d-flex justify-content-between shadow-sm">
                                                <div className="py-2 h5">
                                                    {item.item}
                                                </div>
                                                <div>
                                                    <button className="btn" style={{
                                                        borderRadius: '50%',
                                                        height: '45px'
                                                    }}
                                                        onClick={() => delete_item(item._id)}
                                                    ><RiDeleteBinLine /></button>
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
