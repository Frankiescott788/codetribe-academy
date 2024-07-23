import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateForm() {
    const [pushedLists, setPushedLists] = useState([]);
    const redirect = useNavigate();
    const { id, doc } = useParams();
    const [item, setItem] = useState('');
    const [title, setTitle] = useState('');
   

    const add_todo = () => {
        const res = JSON.parse(localStorage.getItem('user_todos')) || [];
        let single_todo = res.filter(todo => todo._id === id)[0];
        let sub_doc = single_todo.items.find(item => item._id = doc);
        sub_doc.item = item
        localStorage.setItem('user_todos', JSON.stringify(res));
        setTitle(sub_doc.item);
        redirect('/')
    };

    return (
        <section>
            <div className="container" style={{ marginTop: '30vh' }}>
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-lg-4">
                        <div className="card add-form">
                            <div className="card-body">
                                <div className="my-2">
                                    <label> Item to update </label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        onChange={e => setItem(e.target.value)}
                                        placeholder="e.g. Grocery"
                                    />
                                </div>
                                
                                <div className="d-flex justify-content-center mt-3 mb-2">
                                    <button className="btn btn-primary submit-btn" onClick={add_todo}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"white"} fill={"none"}>
    <path d="M21.0477 3.05293C18.8697 0.707363 2.48648 6.4532 2.50001 8.551C2.51535 10.9299 8.89809 11.6617 10.6672 12.1581C11.7311 12.4565 12.016 12.7625 12.2613 13.8781C13.3723 18.9305 13.9301 21.4435 15.2014 21.4996C17.2278 21.5892 23.1733 5.342 21.0477 3.05293Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M11.5 12.5L15 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg> update </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
