import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./style.css"
import fetchData from '@/request';
import { useState } from 'react';

export default function GenericForm({fields, entity}){
    const [body, setBody] = useState()
    return(
        <Form className='Form'>
          <div className='container'>
            {fields?.map((item) => (
              <Form.Group className='form-group' key={item.label}>
                <Form.Label className='label'>{`${item.label}: `}</Form.Label>
                {item.type === 'select' && item.options ? (
                  <Form.Select>
                    {Array.isArray(item.options) ? item.options.map((option, index) => (
                      <option key={index} value={option.value}>{option.label}</option>
                    )) : null}
                  </Form.Select>
                ) : (
                  <Form.Control
                    className={item.style}
                    type={item.type}
                    prefix={item.prefix ? item.prefix : null}
                    placeholder={`insira o ${item.label}`}
                  />
                )}
              </Form.Group>
            ))}
          </div>
        
          <Button variant='primary' className='btn-primary' onClick={() => fetchData({method: "POST", entity: entity, data: body})}>Criar</Button>
        </Form>
    )
}