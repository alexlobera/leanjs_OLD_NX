import React from 'react';
import Section from './CurriculumSection';
import { trainingDateTime, convertMinutesToHoursAndMinutes } from '../utils';

const renderPartTimeSection = ({
  sectionProps = {},
  training,
  trainingId,
  hours = 3,
} = {}) => (initialIndex) => ({ title, subTitle, Comp, group }, index) => {
  let dayOffset = index + initialIndex;
  const sectionNum = index + initialIndex + 1;

  if (
    training &&
    training.daysOfTheWeek &&
    training.daysOfTheWeek.length === 1
  ) {
    dayOffset = group - 1;
  }

  // TODO replace this by data from the API training instance unit in the training object
  const { coachName } = Comp || {};
  let gmt;
  if (training && training.isOnline) {
    const {
      hours: utcHours,
      minutes: utcMinutes,
    } = convertMinutesToHoursAndMinutes(training.utcOffset);
    gmt = `GMT${utcHours}:${utcMinutes}`;
  }

  return (
    <Section
      title={`Day ${sectionNum} - ${
        title ||
        (Comp && Comp.defaultProps && Comp.defaultProps.title) ||
        subTitle
      }`}
      name={`session${sectionNum}`}
      trainingId={trainingId}
      trainingDateTime={
        training ? (
          <React.Fragment>
            <br />
            {/* {comps && comps.length > 1 ? (
              <React.Fragment> <Tag>Full-day</Tag> </React.Fragment>
            ) : ( */}
            {trainingDateTime({ dayOffset, training })}
            {gmt && (
              <small>
                {` `}
                {gmt}
              </small>
            )}
            {coachName && ` by ${coachName}`}
          </React.Fragment>
        ) : (
          <React.Fragment>
            <br />
            {/* {comps && comps.length > 1 ? (
              <React.Fragment>{` `}4-hour training</React.Fragment>
            ) : ( */}
            {hours}-hour training
            {/* )} */}
          </React.Fragment>
        )
      }
      {...sectionProps}
    >
      {/* {Comp ? ( */}
      <Comp title="" />
      {/*//   ) : (
    //     comps &&
    //     comps.length &&
    //     comps.map((Comp, i) => <Comp key={`${title || subTitle}${i}`} />)
    //   )}*/}
    </Section>
  );
};

export default renderPartTimeSection;
