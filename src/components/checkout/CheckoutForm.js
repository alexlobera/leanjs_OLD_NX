import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Span, P } from '../text'
import { Button } from '../buttons'
import Input from '../form/Input'

const QuantityActions = styled.div`
  justify-content: space-between;
  text-align: center;
  margin: 8px 0;
`
const QuantityButton = styled.button`
  border: 0;
  font-size: 40px;
  margin: 0;
  border: none;
  padding: 0 25px;
  background-color: transparent;
`

const Quantity = styled(Span)`
  align-self: center;
  font-size: 24px !important;
  text-align: center;
`

const RowNumTickets = styled.div`
    display: flex;

`

const CheckoutForm = ({ quantity, removeCourse, addCourse }) => (
    <Fragment>
        <Span>Number of tickets:</Span>
        <RowNumTickets>
            <QuantityActions>
                <Button onClick={removeCourse} children="-" />
                <Quantity>{quantity || 2}</Quantity>
                <Button onClick={addCourse} children="+" />
            </QuantityActions>
            <Span>
                Total price: 123 p
            </Span>
        </RowNumTickets>
    </Fragment>
)

export default CheckoutForm