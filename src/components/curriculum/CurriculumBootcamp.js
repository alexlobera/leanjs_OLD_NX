import React from 'react'
import Link from '../navigation/Link'
import { H1, H2, H3 } from '../text'
import { CurriculumSection } from './'

const CurriculumBootcamp = () => (
    <div>
        <H1>
            The most complete curriculum
        </H1>
        <CurriculumSection>
            <H2>Day 1</H2>
            <H3>ES6 & ESNEXT, React Fundamentals, React Router</H3>
            <Link to="/">Click here for more detail</Link>
        </CurriculumSection>
        <CurriculumSection>
            <H2>Day 2</H2>
            <H3>Forms, Authentication, Styling in React</H3>
            <Link to="/">Click here for more detail</Link>
        </CurriculumSection>
        <CurriculumSection>
            <H2>Day 3</H2>
            <H3>Redux, and Testing Principles</H3>
            <Link to="/">Click here for more detail</Link>
        </CurriculumSection>
        <CurriculumSection>
            <H2>Day 4</H2>
            <H3>Functional Programming, Advanced Redux, GraphQL, and Performance Optimizations</H3>
            <Link to="/">Click here for more detail</Link>
        </CurriculumSection>
        <CurriculumSection>
            <H2>Day 5</H2>
            <H3>Testing in React, Functional Programming, Advanced React Patterns, Server-side Rendering</H3>
            <Link to="/">Click here for more detail</Link>
        </CurriculumSection>
        <CurriculumSection>
            <H2>Day 6</H2>
            <H3>Hackathon</H3>
            <Link to="/">Click here for more detail</Link>
        </CurriculumSection>
    </div>
)

export default CurriculumBootcamp