import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./style.css"
import { useEffect, useState } from 'react';
import {postObj} from '../../../utils/utils.ts'


export default function GenericForm({fields, entity, idControl}){
    const [body, setBody] = useState()
    useEffect(() => {setBody({...body, [idControl]: crypto.randomUUID() })},[])
    return(
        <Form className='Form'>
          <div className='container'>
            {fields?.map((item) => (
              <Form.Group className='form-group' key={item.label}>
                <Form.Label className='label'>{`${item.label}: `}</Form.Label>
                {item.type === 'select' && item.options ? (
                  <Form.Select onChange={(value) => {
                    console.log(value.target.value)
                    setBody({...body, [item.control]: value.target.value})}}>
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
                    onChange={(value) => setBody({...body, [item.control]: value.target.value})}
                  />
                )}
              </Form.Group>
            ))}
          </div>

          <Button variant='primary' className='btn-primary' onClick={() => postObj({...body}, entity)}>Criar</Button>
        </Form>
    )
}