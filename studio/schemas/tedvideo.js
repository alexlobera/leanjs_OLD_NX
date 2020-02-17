import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import TedVideo from "../../www/src/components/elements/TedVideo";

export default {
  name: "tedvideo",
  type: "object",
  title: "Ted Video",
  // icon: () => <FontAwesomeIcon icon={faYoutube} />,
  fields: [
    {
      name: "embedUrl",
      type: "string",
      title: "Embed Url"
    },
    {
      name: "description",
      type: "string",
      title: "Description"
    }
  ],
  preview: {
    select: {
      embedUrl: "embedUrl"
    },
    component: ({ value: { embedUrl } }) => <TedVideo embedUrl={embedUrl} />
  }
};
