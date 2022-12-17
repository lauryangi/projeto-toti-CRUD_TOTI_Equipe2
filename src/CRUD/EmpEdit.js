import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EmpEdit = () => {
    const { empid } = useParams();

    //const [empdata, empdatachange] = useState({});


    useEffect(() => {

        fetch("http://localhost:8000/posts//" + empid).then((res) => {
            return res.json();

        }).then((resp) => {

            idchange(resp.id);
            nomechange(resp.nome);
            regiãochange(resp.região);
            idadechange(resp.idade);
            nacionalidadechange(resp.nacionalidade);
            emailchange(resp.email);
            historiachange(resp.historia);
            activechange(resp.isactive);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const[id,idchange]=useState("");
    const[nome,nomechange]=useState("");
    const[região,regiãochange]=useState("");
    const[idade,idadechange]=useState("");
    const[nacionalidade,nacionalidadechange]=useState("");
    const[email,emailchange]=useState("");
    const[historia, historiachange]=useState("");
    const[active,activechange]=useState(true);
    const[validation,valchange]=useState(false);


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const empdata={id,nome,região,idade,nacionalidade,email,historia};
      

      fetch("http://localhost:8000/posts/"+empid,{

        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)

      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/');

      }).catch((err)=>{
        console.log(err.message)
      })

    }
    return ( 
        <div>

        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>

                    <div className="card" style={{"textAlign":"left"}}>
                        <div className="card-title">
                            <h2> Empregado Edit</h2>
                        </div>
                        <div className="card-body">

                            <div className="row">

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>ID</label>
                                        <input value={id} disabled="disabled" className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Nome</label>
                                        <input required value={nome} onMouseDown={e=>valchange(true)} onChange={e=>nomechange(e.target.value)} className="form-control"></input>
                                    {nome.length==0 && validation && <span className="text-danger">Digite o nome</span>}
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Região</label>
                                        <input value={região} onChange={e=>regiãochange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Idade</label>
                                        <input value={idade} onChange={e=>idadechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Nacionalidade</label>
                                        <input value={nacionalidade} onChange={e=>nacionalidadechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input value={email} onChange={e=>emailchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Historia</label>
                                        <input value={historia} onChange={e=>historiachange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>


                                <div className="col-lg-12">
                                    <div className="form-check">
                                    <input checked={active} onChange={e=>activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                        <label  className="form-check-label">É Ativo</label>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                       <button className="btn btn-success" type="submit">Salvar</button>
                                       <Link to="/" className="btn btn-danger">Back</Link>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </form>

            </div>
        </div>
    </div>
     );
}
 
export default EmpEdit;
