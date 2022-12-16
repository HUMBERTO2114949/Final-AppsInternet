import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { BD } from "./firebase/config";

const TablaSuper = (props) =>{
    const [heroes, setHeroes] = useState([]);
    
    const heroesCollection = collection(BD, 'superheroe')
    const getHeroes = async () =>{
        const dataHeroes = await getDocs(heroesCollection)
        setHeroes(
            dataHeroes.docs.map((doc)=>({...doc.data(),id:doc.id}))
        )
    }

    const deleteHero = async(id) =>{
        const HeroDoc = doc(BD, 'superheroe', id)
        await deleteDoc(HeroDoc)
        getHeroes()
    } 

    useEffect(()=>{
        getHeroes()
    })
    
    return(
        <table className="tablasupers">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>N. Super</th>
                    <th>Edad</th>
                    <th>Sexo</th>
                    <th>Origen</th>
                    <th>Habilidades</th>
                    <th>Acciones</th>
                </tr>
            </thead>

            <tbody>
                {heroes.map((heroe)=>(
                    <tr className="dividir" key={heroe.id}>
                        <td>{heroe.nombreReal}</td>
                        <td>{heroe.nombreSuper}</td>
                        <td>{heroe.edad}</td>
                        <td>{heroe.sexo}</td>
                        <td>{heroe.origen}</td>
                        <td>{heroe.habilidades.toString()}</td>
                        <td>
                            <button onClick={()=>{props.editRow(heroe)}}>Editar</button>
                            <button onClick={()=>{deleteHero(heroe.id)}}>Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TablaSuper;