import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import InputMask from "react-input-mask";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import "./style.css";
import { gerarIdProdutoUnico, postObj } from "../../../utils/utils.ts";

export default function GenericForm({
    fields,
    entity,
    idControl,
    formatSaveEntity,
    ignoreList
}) {
    const [body, setBody] = useState({});
    const [rows, setRows] = useState([]);

    useEffect(() => {
        setBody({ ...body, [idControl]: gerarIdProdutoUnico() });
    }, [idControl]);

    function handleChange(value, control) {
        setBody({
            ...body,
            [control]: value,
        });
    }

    function lackingKeysError() {
        fields.forEach((element) => {
            if (!body[element.control] && ignoreList.includes(element.control) === false ) {
                alert(`Está faltando preencher ${element.label}`);
                return;
            }
        });
    }

    useEffect(() => {
      const newRows = [];
      let currentRow = [];
      let counter = 0;

      fields.forEach((item) => {
          const { label, type, control, mask, prefix, options, style, disabled, colSize } = item;

          let field;
          if (type === "select" && options) {
              field = (
                  <Form.Select
                      className={type}
                      onChange={(e) => handleChange(e.target.value, control)}
                  >
                      {options.map((option, index) => (
                          <option key={index} value={option.value}>
                              {option.label}
                          </option>
                      ))}
                  </Form.Select>
              );
          } else if (mask) {
              field = (
                  <InputMask
                      mask={mask}
                      // maskChar="_"
                      // value={body[control]}
                      onChange={(e) => {console.log(e.target.value); handleChange(e.target.value.replace(/[-.]/g, ""), control)}}
                  >
                      {(inputProps) => (
                          <Form.Control
                              type={type}
                              prefix={prefix || null}
                              placeholder={`Insira ${label}`}
                              {...inputProps}
                          />
                      )}
                  </InputMask>
              );
          } else {
              field = (
                  <Form.Control
                      className={type}
                      disabled={disabled}
                      type={type}
                      prefix={prefix || null}
                      placeholder={`Insira ${label}`}
                      onChange={(e) => handleChange(e.target.value, control)}
                  />
              );
          }

          currentRow.push(
              <Col {...colSize} key={control}>
                  <Form.Group controlId={`formGrid${label}`}>
                      <Form.Label>{label}: </Form.Label>
                      {field}
                  </Form.Group>
              </Col>
          );

          counter++;
          if (counter % 2 === 0 || fields.length === counter) {
              newRows.push(
                  <Row key={counter}>
                      {currentRow}
                  </Row>
              );
              currentRow = [];
          }
      });

      setRows(newRows);
  }, [body, fields]);

  return (
      <Form className="Form">
          <div className="container">
              {rows}
          </div>

              <Button
                  variant="primary"
                  className="btn-primary"
                  onClick={() => {
                      Object.keys(body).length === fields.length - ignoreList.length + 1
                          ? postObj({ ...formatSaveEntity(body) }, entity)
                          : lackingKeysError();
                  }}
              >
                  Criar
              </Button>
        </Form>
    );
}
