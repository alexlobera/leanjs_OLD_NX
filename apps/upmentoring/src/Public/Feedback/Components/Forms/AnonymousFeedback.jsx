import React, { useState } from "react";
import Markdown from "markdown-to-jsx";
import createDecorator from "final-form-focus";

import RatingField from "./RatingField";
import { Form, TextAreaField, Field } from "../../../../App/Components/Forms";
import { Button, Avatar, Flex } from "../../../../App";
import { P, Heading } from "../../../../App/Components/Text";
import { Link } from "../../../../App/Components/Navigation";

const focusOnError = createDecorator();

const AnonymousFeedback = ({ trainingInstance, onSubmit }) => {
  const [displayObjectives, setDisplayObjectives] = useState(false);
  if (!trainingInstance) {
    return null;
  } else {
    const { trainingUnit, coaches } = trainingInstance;
    const objectives =
      trainingUnit && trainingUnit.objectives
        ? trainingUnit.objectives
        : trainingInstance.training &&
        trainingInstance.training.description &&
        trainingInstance.training.description.objectives;

    return (
      <>
        <Heading variant="h1" center>
          {trainingInstance && trainingInstance.title}
        </Heading>
        {trainingUnit && trainingUnit.title && (
          <Heading variant="h2" center>
            Unit: {trainingUnit.title}
          </Heading>
        )}
        <Flex justifyContent="center">
          {coaches.map(coach => (
            <Avatar m={4} src={coach.profileImage.size400x400} />
          ))}
        </Flex>
        <P style={{ paddingTop: "40px", paddingBottom: "20px" }}>
          Thank you for participating in this session. We want to hear your
          feedback so we can keep improving. Please fill this quick{" "}
          <b>10 anonymous question</b> survey and let us know your thoughts.
        </P>
        <Form onSubmit={onSubmit} decorators={[focusOnError]}>
          {({ form, submitting, pristine, values }) => (
            <>
              <RatingField
                name="rating[objectivesMet]"
                label="The training objectives were met."
              >
                {displayObjectives ? (
                  <>
                    <Markdown>{objectives || ""}</Markdown>
                    <P>
                      <Link onClick={() => setDisplayObjectives(false)}>
                        Hide learning objectives
                      </Link>
                    </P>
                  </>
                ) : (
                    <P>
                      <Link onClick={() => setDisplayObjectives(true)}>
                        See learning objectives
                    </Link>
                    </P>
                  )}
              </RatingField>
              <RatingField
                name="rating[contentOrganized]"
                label="The content was organized and easy to follow."
              />
              <RatingField
                name="rating[materialHelpful]"
                label="The materials used were helpful (slides, repos, etc)"
              />
              <RatingField
                name="practiceRating[enoughInteractionPractice]"
                label="Participation and interaction were encouraged"
              />
              <RatingField
                name="practiceRating[enoughAttentionFeedback]"
                label="You received enough attention and feedback"
              />
              <RatingField
                name="rating[venueFacilities]"
                label="The classroom and facilities were adequate and comfortable"
              />
              {coaches.map((coach, index) => (
                <>
                  <RatingField
                    name={`coachesRating.${index}.[knowledgeable]`}
                    avatarSrc={coach.profileImage.size100x100}
                    label={`${coach.firstName} was knowledgeable about the training topics`}
                  />
                  <RatingField
                    name={`coachesRating.${index}.[explainedWell]`}
                    avatarSrc={coach.profileImage.size100x100}
                    label={`${coach.firstName} explained well the topics`}
                  />
                </>
              ))}
              <Field
                name="commentToImprove"
                component={TextAreaField}
                label="What aspects of the training could be improved?"
              />
              <Field
                name="commentLikeMost"
                component={TextAreaField}
                label="What did you like most about this training?"
              />
              <Button type="submit">Send feedback</Button>
            </>
          )}
        </Form>
      </>
    );
  }
};

export default AnonymousFeedback;
