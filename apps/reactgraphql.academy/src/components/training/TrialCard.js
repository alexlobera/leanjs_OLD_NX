import React from 'react';
import { H3, H4, P } from '../text';
// import Segment from '../elements/Segment';
import LinkButton from '../buttons/LinkButton';
// import { Row, Col } from '../layout/Grid';
import formatPrice from '../utils/currency';
import { DEFAULT_VAT_RATE } from '../../config';

// const TrialCard = ({ trainingInstance, sx = {}, ...rest }) => {
//   const price = formatPrice(
//     trainingInstance.currency,
//     trainingInstance.standardPrice,
//     DEFAULT_VAT_RATE
//   );
//   return (
//     <Segment small variant="primary" sx={{ my: 5, ...sx }} {...rest}>
//       <Row>
//         <Col md={8}>
//           <H3>You can try this training first</H3>
//           <P>
//             We have scheduled a trial for this training, which corresponds to
//             the first session of this training curriculum.
//           </P>
//         </Col>
//         <Col md={4} sx={{ textAlign: 'center' }}>
//           <H3>{price}</H3>
//           <LinkButton
//             variant="primary"
//             className="instance-page-trial-card"
//             to={trainingInstance.toPath}
//           >
//             Trial? tell me more!
//           </LinkButton>{' '}
//         </Col>
//       </Row>
//     </Segment>
//   );
// };

const TrialCard = ({ trainingInstance, sx = {}, ...rest }) => {
  const price = formatPrice(
    trainingInstance.currency,
    trainingInstance.standardPrice,
    DEFAULT_VAT_RATE
  );
  return (
    <>
      <H3>You can try this training first</H3>
      <H4>Trial for only {price}</H4>
      <P>
        We have scheduled a trial for this training, which corresponds to the
        first session of this training curriculum.
      </P>
      <LinkButton
        variant="primary"
        className="instance-page-trial-card"
        to={trainingInstance.toPath}
      >
        Trial? tell me more!
      </LinkButton>
    </>
  );
};

export default TrialCard;
