import React from "react";
import TrainingInput from "../../components/TrainingInput";
import { VIDEO_TYPE_TRAINING } from "./video";
import TrainingPreview from "../../components/TrainingPreview";

export default {
  name: "training",
  title: "Training",
  type: "document",
  preview: {
    select: {
      title: "trainingId"
    },
    prepare: value => {
      return {
        title: value.title,
        extendedPreview: <TrainingPreview value={value} />
      };
    }
  },
  fields: [
    {
      name: "trainingId",
      title: "Training",
      type: "string",
      inputComponent: TrainingInput,
      validation: Rule => Rule.required()
    },
    {
      name: "videos",
      title: "Videos",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "video" },
          options: {
            filter: `type == $type`,
            filterParams: { type: VIDEO_TYPE_TRAINING }
          }
        }
      ]
    }
  ]
};
