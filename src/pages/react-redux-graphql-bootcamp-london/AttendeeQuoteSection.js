import React from 'react'
import AttendeeQuote from '../../components/training/AttendeeQuote'
import Section from '../../components/layout/Section'
import Grid from '../../components/layout/Grid'

const AttendeeQuoteLondon = () => (
    <Section color="lightGrey">
        <Grid>
            <AttendeeQuote
                quote="Best training ever!"
                fullname="Joe Foo2"
                job="CTO2"
                company="ASOS.com"
            />
        </Grid>
    </Section>
)

export default AttendeeQuoteLondon 