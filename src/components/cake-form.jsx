import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast, ToastContainer } from 'react-toastify';

function Cake_Form({getData,handleClose}) {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [price, setPrice] = useState("")


    async function add_Cake(e) {

        e.preventDefault()

        await axios.post("https://65199e52818c4e98ac6093fd.mockapi.io/flower_shop", { name: name, image: image, price: price })

        toast.success("Cake added successully..")

        getData()

        handleClose()

    }


    return (
        <>        <Form onSubmit={add_Cake}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter cake" onChange={(e) => { setName(e.target.value) }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" placeholder="image" onChange={(e) => { setImage(e.target.value) }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="price" onChange={(e) => { setPrice(e.target.value) }} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Add
            </Button>
        </Form>
<ToastContainer />
        </>

    );
}

export default Cake_Form;