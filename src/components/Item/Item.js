
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item() {
  return (
    <div className='container'>
        <Card className='text-center' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://d28hi93gr697ol.cloudfront.net/9ef84dda-32dd-4016-7da3-1c0a824fffb4/img/Producto/3eab131d-b1a0-6cab-1350-e538fd9b2419/iphone14promax-637e89105ddd4.jpg" />
        <Card.Body>
            <Card.Title>Iphone 14 Pro Max</Card.Title>
            <Card.Text>
            Para mas informacion ingresar
            </Card.Text>
            <Button variant="primary">Ver producto</Button>
        </Card.Body>
        </Card>
        
    </div>
  );
}

export default Item;