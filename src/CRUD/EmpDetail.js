import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const EmpDetail = () => {
    const {empid} = useParams();

    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        
            fetch("http://localhost:8000/posts/" + empid).then((res) => {
            return res.json();

        }).then((resp) => {
            empdatachange(resp);

        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

               <div className="container">
                
            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2>Empregado </h2>
                </div>
                <div className="card-body"></div>

                {empdata &&
                    <div>
                        <h2>Seu nome é : <b>{empdata.name}</b>  ({empdata.id})</h2>
                        <h3>Detalhes de contato</h3>
                        <h5>e-mail e : {empdata.email}</h5>
                        <h5>seu número de telefone é : {empdata.phone}</h5>
                        <Link className="btn btn-danger" to="/">Back to Listing</Link>
                    </div>
                }
            </div>
            </div>
            {/* </div>
            </div> */}
        </div >
    );
}

export default EmpDetail;

