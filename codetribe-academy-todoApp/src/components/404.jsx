import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-6" style={{paddingTop : '30dvh'}}>
                    <div>
                        <h1 className='text-muted'>This requsted page is not found, please return to the home page</h1>
                        <div className="d-flex my-2 justify-content-center">
                            <button className="btn btn-primary px-5" onClick={() => navigate('/')}> Back to home page </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}