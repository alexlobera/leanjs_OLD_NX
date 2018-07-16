import React from 'react'
import Link from '../navigation/Link'
import Button from '../buttons/Button'
import P from '../layout/P'
import { Blockquote, H1, H2, H3 } from '../text'
import Input from './Input'

const ContactForm = () => (
    <div>
        <H2>
            More info and some pre-course learning resources
                </H2>
        <H3>
            Enter your email below and we'll email you with our latest training and free learning resources. We are very serious about your privacy and the safety of your information. Not convinced? Check out our <Link to="/privacy-policy">privacy policy</Link>.
                </H3>
        <P>
            <Input
                placeholder='Email'
            />
        </P><P>
            <Button children="Submit email" />
        </P>
    </div>
)

export default ContactForm