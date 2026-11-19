import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cardex({id,name,image,price,deleteCake}) {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img style={{ height: '100%', objectFit: 'cover' }} variant="top" src={image} />
            <Card.Body style={{position:'absolute',bottom:'0',left:'16px',right:'10px',background:'black',width:'90%',border:'1px solid black'}}>
                <Card.Title className='text-white'>{name}</Card.Title>
                <Card.Text className='text-success fs-5 fw-bolder'>
                    <span>₹</span> {
                    
                    price ? price : 200
                       
                    }
                </Card.Text>
                <section className='mx-auto w-75  d-flex justify-content-between'>
                    <Button variant="outline-info">Edit</Button>
                    <Button variant="outline-danger" onClick={()=>{deleteCake(id)}}>Delete</Button>
                </section>

            </Card.Body>
        </Card>
    );
}

export default Cardex;