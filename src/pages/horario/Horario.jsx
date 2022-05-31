import "./horario.scss";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Cita from '../../components/cita/Cita';

function Horario () {
    return (
      <div className="list">
        <Sidebar/>
         <div className="listContainer">
         <Navbar/>
          <Cita/>
        </div>
      </div>
  );
}

export default Horario;



  /*const [citas,setCitas]=useState([]);
  const [input, setInput]=useState('');
  const [input2, setInput2]=useState('');
  const [input3, setInput3]=useState('');
  useEffect(() => {
          onSnapshot(q,(snapshot)=>{
              setCitas(snapshot.docs.map(doc=>({
                id: doc.id,
                item: doc.data()
              })))
         })
    },[input.nombre, input.email, input.fecha]);


  const addCita=(e)=>{
    e.preventDefault();
       addDoc(collection(db,'citas'),{
         nombre:input.nombre,
         email:input.email,
         fecha:input.fecha,
         timestamp: serverTimestamp()
       })
       console.log('click')
      setInput('')
  };
  console.log(citas);*/



  /*const [citas,setCitas]=useState([]);
  const [input, setInput]=useState('');
  const [input2, setInput2]=useState('');
  const [input3, setInput3]=useState('');

  useEffect(() => {
          onSnapshot(q,(snapshot)=>{
              setCitas(snapshot.docs.map(doc=>({
                id: doc.id,
                item: doc.data(),
                nombre: doc.nombre,
                email: doc.email,
                fecha: doc.fecha
              })))
         })
    },[input]);

  const addCita=(e)=>{
    e.preventDefault();
       addDoc(collection(db,'citas'),{
         nombre:input,
         email:input2,
         fecha:input3,
         timestamp: serverTimestamp()
       })
       console.log('click')
      setInput('')
      setInput2('')
      setInput3('')
  };
  console.log(citas);*/

  
  /*return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />

        <h4>LISTA DE CITAS</h4>

      <form>
        <TextField className="texto_citas" id="outlined-basic" label="Nombre" variant="outlined" style={{margin:"10px 5px 20px"}} size="small" value={input}
          onChange={e=>setInput(e.target.value)} />

        <TextField className="texto_citas" id="outlined-basic" label="Email" variant="outlined" style={{margin:"10px 5px 20px"}} size="small" value={input2}
          onChange={e=>setInput2(e.target.value)} />

        <TextField className="texto_citas" id="outlined-basic" label="Fecha y Hora" variant="outlined" style={{margin:"10px 5px 20px"}} size="small" value={input3}
          onChange={e=>setInput3(e.target.value)} />
          
        <Button variant="contained"  onClick={addCita}  >Añadir Cita</Button>
      </form>
      
      <ul>
          {citas.map(item=> <Cita key={item.id} arr={item} />)}
      </ul>

      </div>
    </div>
  );
}
export default Horario;*/

/*
<form>
          <TextField id="outlined-basic" label="Nombre" variant="outlined" style={{margin:"0px 5px"}} size="small" value={input.nombre}
          onChange={e=>setInput(e.target.value)} />

          <TextField id="outlined-basic" label="Email" variant="outlined" style={{margin:"0px 5px"}} size="small" value={input.email}
          onChange={e=>setInput(e.target.value)} />

          <TextField id="outlined-basic" label="Fecha y Hora" variant="outlined" style={{margin:"0px 5px"}} size="small" value={input.fecha}
          onChange={e=>setInput(e.target.value)} />

          <Button variant="contained" color="primary" onClick={addCita}  >Añadir Cita</Button>
        </form>
        <ul>
            {citas.map(item=> <Cita key={item.id} arr={item} />)}
        </ul>

*/