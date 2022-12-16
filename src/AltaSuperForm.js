import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { BD } from "./firebase/config";

const AltaSuperForm = () =>{
    const InitialForm = '';
    const [nombreReal, setNombreReal] = useState('');
    const [nombreSuper, setNombreSuper] = useState('');
    const [edad, setEdad] = useState(0);
    const [sexo, setSexo] = useState('');
    const [origen, setOrigen] = useState('');
    const [SuperHabilidades, setSuperHabilidades] = useState({
        habilidades: [],
        response: [],
    })

    const heroesCollection = collection(BD, 'superheroe')
    const AgregaHeroes = async(e)=>{
        e.preventDefault()
        await addDoc(heroesCollection, {nombreReal: nombreReal, nombreSuper: nombreSuper, edad: edad, sexo: sexo, origen: origen, habilidades: SuperHabilidades.habilidades})
        limpiar()
    }

    const uncheckAll = () =>{
        document.querySelectorAll('#formElement input[type=checkbox]').forEach(function(checkElement){
            checkElement.checked = false;
        })
        document.querySelectorAll('#formElement input[type=radio]').forEach(function(checkElement){
            checkElement.checked = false;
        })
    }
    
    const limpiar = () =>{
        setNombreReal(InitialForm)
        setNombreSuper(InitialForm)
        setEdad(0)
        uncheckAll()
    }

    const SexoChange = (e)=>{
        setSexo(e.target.value);
    }

    const OrigenChange = (e)=>{
        setOrigen(e.target.value)
    }

    const handleChange = (e)=>{
        const {value, checked} = e.target
        const {habilidades} = SuperHabilidades;

        if(checked){
            setSuperHabilidades({
                habilidades: [...habilidades, value],
                response: [...habilidades, value]
            })
        }
        else{
            setSuperHabilidades({
                habilidades: habilidades.filter((e)=>e!==value),
                response: habilidades.filter((e)=>e!==value),
            })
        }
    }
    return(
        <>
            <div className="alta">
            <form onSubmit={AgregaHeroes} id='formElement'>
                <label>Nombre Real</label>
                <input type='text' name="nombreReal" placeholder="Coloque su nombre" value={nombreReal} onChange={(e)=>setNombreReal(e.target.value)} required/>
                <label>Nombre de Super</label>
                <input type='text' name="nombreSuper" placeholder="Coloque su nombre de super" value={nombreSuper} onChange={(e)=>setNombreSuper(e.target.value)} required/>
                <label>Edad</label>
                <input type='number' name="edad" placeholder="Edad" value={edad} onChange={(e)=>setEdad(e.target.value)} required/>
                <label>Sexo</label>
                <table>
                    <tr>
                        <td><input type='radio' name="sexo" value='Masculino' checked={sexo==='Masculino'} onChange={SexoChange}/></td>
                        <td>Masculino</td>
                    </tr>
                    <tr>
                        <td><input type='radio' name="sexo" value='Femenino' checked={sexo==='Femenino'} onChange={SexoChange}/></td>
                        <td>Femenino</td>
                    </tr>
                    <tr>
                        <td><input type='radio' name="sexo" value='No especificado' checked={sexo==='No especificado'} onChange={SexoChange}/></td>
                        <td>No especificado</td>
                    </tr>
                </table>
                <label>Origen</label>
                <table>
                    <tr>
                        <td><input type='radio' name="origen" value='Humano' checked={origen==='Humano'} onChange={OrigenChange}/></td>
                        <td>Humano</td>
                    </tr>
                    <tr>
                        <td><input type='radio' name="origen" value='Experimento' checked={origen==='Experimento'} onChange={OrigenChange}/></td>
                        <td>Experimento</td>
                    </tr>
                    <tr>
                        <td><input type='radio' name="origen" value='Mutante' checked={origen==='Mutante'} onChange={OrigenChange}/></td>
                        <td>Mutante</td>
                    </tr>
                    <tr>
                        <td><input type='radio' name="origen" value='Extraterrestre' checked={origen==='Extraterrestre'} onChange={OrigenChange}/></td>
                        <td>Extraterrestre</td>
                    </tr>
                </table>

                <label>Características</label>
                 
                <table class="default">
                    <tr>
                        <td><input type='checkbox' name="habilidades" value='Volar' onChange={handleChange}/>&nbsp; </td>
                        <td>Volar</td>
                    </tr>
                    <tr>
                        <td><input type='checkbox' name="habilidades" value='Super Velocidad' onChange={handleChange}/>&nbsp;</td>
                        <td>Super Velocidad</td>
                    </tr>
                    <tr>
                        <td><input type='checkbox' name="habilidades" value='Super Fuerza' onChange={handleChange}/>&nbsp;</td>
                        <td>Super Fuerza</td>
                    </tr>
                    <tr>
                        <td><input type='checkbox' name="habilidades" value='Mutante' onChange={handleChange}/>&nbsp;</td>
                        <td>Mutante</td>
                    </tr>
                    <tr>
                        <td><input type='checkbox' name="habilidades" value='Super Visión' onChange={handleChange}/>&nbsp;</td>
                        <td>Super Visión</td>
                    </tr>
                    <tr>
                        <td><input type='checkbox' name="habilidades" value='Invisibilidad' onChange={handleChange}/>&nbsp;</td>
                        <td>Invisibilidad</td>
                    </tr>
                    <tr>
                        <td><input type='checkbox' name="habilidades" value='Invulneravilidad' onChange={handleChange}/>&nbsp;&nbsp;</td>
                        <td>Invulneravilidad</td>
                    </tr>
                    <tr>
                        <td><input type='checkbox' name="habilidades" value='Telepatia' onChange={handleChange}/>&nbsp;</td>
                        <td>Telepatia</td>
                    </tr>
                    <tr>
                        <td><input type='checkbox' name="habilidades" value='Rayos' onChange={handleChange}/>&nbsp;</td>
                        <td>Rayos</td>
                    </tr>
                    <tr>
                        <td><input type='checkbox' name="habilidades" value='Super Oído' onChange={handleChange}/>&nbsp;</td>
                        <td>Super Oído</td>
                    </tr>
                    <tr>
                        <td><input type='checkbox' name="habilidades" value='Artes Marciales' onChange={handleChange}/>&nbsp;</td>
                        <td>Artes Marciales</td>
                    </tr>
                    <tr>
                        <td><input type='checkbox' name="habilidades" value='Inteligencia' onChange={handleChange}/>&nbsp;</td>
                        <td>Inteligencia</td>
                    </tr>
                    <tr>
                        <td><input type='checkbox' name="habilidades" value='Acrobacia' onChange={handleChange}/>&nbsp;</td>
                        <td>Acrobacia</td>
                    </tr>
                    <tr>
                        <td><input type='checkbox' name="habilidades" value='Armadura' onChange={handleChange}/>&nbsp;</td>
                        <td>Armadura</td>
                    </tr>
                    <tr>
                        <td><input type='checkbox' name="habilidades" value='Tecnologia' onChange={handleChange}/></td>
                        <td>Tecnologia</td>
                    </tr>
                </table>
                <br></br>               
                <button>Enviar</button>
            </form>
            <button onClick={limpiar}>Limpiar</button>
            </div>
            <br></br>
        </>
    )
}

export default AltaSuperForm;