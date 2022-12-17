import {useEffect, useState,UseNavigate } from 'react';
import { Link } from 'react-router-dom';

export default EmpListing
const EmpListing = () => {
    const [empdata, empdatachange] = useState(null);
    const navigate = UseNavigate();

    const LoadDetail = (id) => {
        navigate("/employee/detail/" + id);

        const LoadEdit = (id) => {
            navigate("/employee/edit/" + id);
    }

    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:8000/posts/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }

    useEffect(()=>{
        fetch ("http://localhost:8000/posts").then ((res) => {
        return  res.json ();
        }).then((resp) => {
            console.log (resp)
          }).catch ((err) => {
            console.log (err.menssage)
          })

        }, [])

    return (
        <div className='container'>
            <div className='card'>
            <div  className='card-title'>

                <h1>Listagens de Mulheres</h1>
        <div className='card body'>
        <div className="divbtn">
                        <Link to="employee/create" className="btn btn-success">Add New (+)</Link>
                    </div>
                    
            <table className='table table-bordered'>
            <thead className='bg-black text-white'>

        <tr>
            <td>ID</td>
            <td>Nome</td>
            <td>Região</td>
            <td>Idade</td>
            <td>Nacionalidade</td>
            <td>E-mail</td>
            <td>História</td>
         </tr>

            </thead>
            <tbody>
            
            {empdata &&
             empdata.map(item => (
            
            <tr key={item.id}>

<td>{item.id}</td>
<td>{item.nome}</td>
<td>{item.região}</td>
<td>{item.idade}</td>
<td>{item.nacionalidade}</td>
<td>{item.email}</td>
<td>{item.historia}</td>


<td><a  onClick={() => { LoadEdit(item.id) }} className='btn btn-success'>Edit</a></td>
<td><a  onClick={() => { Removefunction(item.id) }}className='btn btn-danger'>Remover</a></td>
<td><a  onClick={() => { LoadDetail(item.id) }}  className='btn btn-primary'>Details</a></td>

            </tr>
           ))

            }

</tbody>

</table>
</div>
</div>
</div>
</div>
);
}

}
