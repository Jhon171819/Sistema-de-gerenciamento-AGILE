import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./style.css"

export default function GenericForm({fields}){
    return(
        <Form className='Form'>
            <div className='container'>
                {fields?.map((item) => (
                    <Form.Group className='form-group'>
                        <Form.Label className='label'>{`${item.label}: `}</Form.Label>
                        <Form.Control className={item.style} type={item.type} prefix={item.prefix? item.prefix : null} placeholder={`insira o ${item.label}`} />
                    </Form.Group>
                ))}
            </div>

            <Button variant='primary' className='btn-primary' type='submit' onClick={() => console.log(fields)}>Criar</Button>
        </Form>
    )
}