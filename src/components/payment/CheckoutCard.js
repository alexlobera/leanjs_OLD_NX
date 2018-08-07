import React from 'react'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, H2Ref, H3, P } from '../components/text'
import Ul, { Li } from '../components/layout/Ul'
import { CurriculumBootcamp } from '../components/curriculum'
import { Ribbon, Card, Video } from '../components/elements'
import Link from '../components/navigation/Link'
import { HideSingleComponentUsingCss } from '../components/utils'
import Header from '../components/layout/Header'
import { BOOTCAMP_COLLAB, CATALIN } from '../config/images'
import { TrustedByLogoList } from '../components/training/TrustedBySection'
import { UpcomingTrainingSection, AttendeeQuote } from '../components/training'
import {
    BulletIcon,
    NotBegginerIcon,
    CodeIcon,
    ReactIcon,
    CollabsIcon,
} from '../components/icons'
import { Image } from '../components/elements'
import BuyQuantityButton from '../components/old_checkout/containers/PurchaseQuantityContainer'
import header from '../components/layout/Header.json'

const CheckoutCard = ({ price, discountPercentage, discountEndsOn }) => (
    <Card small style={{ position: 'relative' }}>
        <Ribbon>Save 12%</Ribbon>
        <H3>
            <strong>Early bird ticket</strong>
        </H3>
        <P>Discount tickes available until 10th August 2018.</P>
        <BuyQuantityButton
            course={{
                price: 1590,
                trainingInstanceId: '5b3605d7b8340f47a4b8e420',
                title: 'Bootcamp London',
            }}
        />
        <P sm>
            By purchasing a training, you agree to our{' '}
            <Link target="_blank" to="terms-of-service">
                Terms of Service
      </Link>{' '}
            &{' '}
            <Link target="_blank" to="code-of-conduct">
                Code of conduct
      </Link>
        </P>
    </Card>
)

export default CheckoutCard