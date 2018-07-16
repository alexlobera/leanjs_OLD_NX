import React from 'react'
import Card from '../layout/Card'
import P from '../layout/P'
import ImagePlaceholder from '../wireframes/ImagePlaceholder'
import { Blockquote, H1, H2, H3 } from '../text'
import { Col, Row } from '../layout/Grid'

const AttendeeQuote = ({ quote, fullname, company, job }) => (
    <Card width={256}>
        <Blockquote>
            {quote || 'This is a quote from a trainee.'}
        </Blockquote>
        <Row>
            <Col xs={5}>
                <ImagePlaceholder width="100%" />
            </Col>
            <Col xs={5}>
                <P>
                    <strong>{fullname || 'Joe Bloggs'}</strong>
                </P>
                <P>
                    {job || 'CTO'}
                </P>
                <P>
                    {company || 'ASOS.com'}
                </P>
            </Col>
        </Row>
    </Card>
)

export default AttendeeQuote
