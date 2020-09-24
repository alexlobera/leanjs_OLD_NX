import React from 'react';

import HappyFaceIcon from '../../../App/Components/Icons/HappyFaceIcon';
import NeutralFaceIcon from '../../../App/Components/Icons/NeutralFaceIcon';
import SadFaceIcon from '../../../App/Components/Icons/SadFaceIcon';

interface FeedbackRatingIconProps {
  rating: number;
}
const FeedbackRatingIcon = ({ rating }: FeedbackRatingIconProps) =>
  rating <= 2.5 ? (
    <SadFaceIcon />
  ) : rating >= 2.6 && rating < 3.6 ? (
    <NeutralFaceIcon />
  ) : rating > 3.6 ? (
    <HappyFaceIcon />
  ) : null;

export default FeedbackRatingIcon;
