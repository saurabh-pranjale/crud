import axios from 'axios'
import './App.css'
import Cardex from './components/Cardex'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import Modal from 'react-bootstrap/Modal';
import Cake_Form from './components/cake-form'
import Cake_Form_Edit from './components/cake-form-edit'

function App() {

  // ADD_Cake
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   // ADD_Cake

  //  edit
 const [id,setId] = useState(null)
 const [showEdit, setShowEdit] = useState(false);

  const handleCloseEdit = () => setShowEdit(false);

  const handleShowEdit = (id) =>{ 
  
    console.log(id,"!@#")

     setId(id)
    setShowEdit(true);
  
  }

   //  edit


  const [state, setState] = useState([])

  async function getData() {

    const res = await axios.get("https://65199e52818c4e98ac6093fd.mockapi.io/flower_shop")

    setState(res.data)

  }

  useEffect(() => {
    getData()
  }, [])

  //delete function

  async function deleteCake(id) {


    await axios.delete(`https://65199e52818c4e98ac6093fd.mockapi.io/flower_shop/${id}`)



    toast.error("Cake has been deleted successfully...")

    getData()


  }





  return (
    <>

      <h2 className='heading'>Welcome to Cake Shop 🍰🎂</h2>

      <button onClick={handleShow}>Add</button>

      <section id='wrapper'>
        {
          state.map((c) => {
            return (
              <Cardex key={c.id} {...c} deleteCake={deleteCake} handleShowEdit={handleShowEdit} />
            )
          })
        }

      </section>

      <ToastContainer />


{/* Add Modal */}

  

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Cake</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Cake_Form getData={getData} handleClose={handleClose} />
        </Modal.Body>
        
      </Modal>



      {/* Edit Modal */}


        <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Cake</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <Cake_Form_Edit id={id} getData={getData} handleCloseEdit={handleCloseEdit} />
        </Modal.Body>
        
      </Modal>


    </>
  )
}

export default App
