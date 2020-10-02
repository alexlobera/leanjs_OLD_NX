/* eslint-disable no-debugger, no-console */
/* eslint-disable no-irregular-whitespace */

import React from 'react';
import HeaderBgImage, { BackgroundImageProps } from './HeaderBgImage';

interface Props extends BackgroundImageProps {
  bgColor?: string;
  borderColor?: string;
  right?: number;
}

const GraphQLBgWithBorder = (props: Props) => {
  const GRAPHQL_BORDER_LOGO = `url("data:image/svg+xml,%3Csvg id='Lines' xmlns='http://www.w3.org/2000/svg' width='736' height='688' viewBox='${
    props.right || 0
  } 0 736 688'%3E%3Cmetadata%3E%3C%3Fxpacket begin='﻿' id='W5M0MpCehiHzreSzNTczkc9d'%3F%3E%3Cx:xmpmeta xmlns:x='adobe:ns:meta/' x:xmptk='Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21 '%3E%3Crdf:RDF xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23'%3E%3Crdf:Description rdf:about=''/%3E%3C/rdf:RDF%3E%3C/x:xmpmeta%3E%3C%3Fxpacket end='w'%3F%3E%3C/metadata%3E%3Cdefs%3E%3Cstyle%3E .cls-1 %7B fill: %23fff; %7D .cls-1, .cls-2 %7B fill-rule: evenodd; %7D .cls-2, .cls-3 %7B fill: %23e25cb6; %7D %3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M113,295S47.221,255.392,83,178c0,0,36.517-63.868,115-30l80-48s1.455-81.453,92-79c0,0,67.533,1.463,76,79l81,49s74.585-39.759,117,36c0,0,33.524,64.532-31,108v97s65.445,31.514,27,117c0,0-36.557,59.885-113,28l-80,46s-0.947,77.563-86,82c0,0-77.284-.364-83-82l-79-45s-83.854,37.825-121-43c0,0-24.165-70.457,35-103V295Z'/%3E%3Cpath class='cls-2' d='M351.962,99.255l19.094,10.928L171.291,459.224,152.2,448.3Z'/%3E%3Crect class='cls-3' x='146' y='248' width='23' height='177'/%3E%3Crect id='Rectangle_2_copy' data-name='Rectangle 2 copy' class='cls-3' x='557' y='248' width='23' height='177'/%3E%3Cpath class='cls-2' d='M172.387,200.435l153.364-90.352,11.906,20.21L184.294,220.645Z'/%3E%3Cpath id='Rectangle_3_copy' data-name='Rectangle 3 copy' class='cls-2' d='M552.613,200.435L399.249,110.083l-11.906,20.21,153.363,90.352Z'/%3E%3Cpath id='Rectangle_3_copy_2' data-name='Rectangle 3 copy 2' class='cls-2' d='M549.985,483.7L398.657,571.013,387,551.326,538.33,464.008Z'/%3E%3Cpath id='Rectangle_3_copy_3' data-name='Rectangle 3 copy 3' class='cls-2' d='M174.015,483.7l151.328,87.317L337,551.326,185.67,464.008Z'/%3E%3Crect class='cls-3' x='203' y='448' width='319' height='25'/%3E%3Cpath id='Rectangle_1_copy' data-name='Rectangle 1 copy' class='cls-2' d='M376.038,105.255l-19.094,10.928L556.709,465.224,575.8,454.3Z'/%3E%3Cpath class='cls-2' d='M158,170s-49.58-1.02-53,52c0,0,.087,50.028,52,51,0,0,46.739,2.527,52-50C209,223,210.707,174.466,158,170Z'/%3E%3Cpath id='Shape_2_copy_2' data-name='Shape 2 copy 2' class='cls-2' d='M158,410s-49.58-1.02-53,52c0,0,.087,50.028,52,51,0,0,46.739,2.527,52-50C209,463,210.707,414.466,158,410Z'/%3E%3Cpath id='Shape_2_copy_3' data-name='Shape 2 copy 3' class='cls-2' d='M569,409s-49.58-1.02-53,52c0,0,.087,50.028,52,51,0,0,46.739,2.527,52-50C620,462,621.707,413.466,569,409Z'/%3E%3Cpath id='Shape_2_copy_5' data-name='Shape 2 copy 5' class='cls-2' d='M363,527s-49.58-1.02-53,52c0,0,.087,50.028,52,51,0,0,46.739,2.527,52-50C414,580,415.707,531.466,363,527Z'/%3E%3Cpath id='Shape_2_copy_6' data-name='Shape 2 copy 6' class='cls-2' d='M363,53s-49.58-1.02-53,52c0,0,.087,50.028,52,51,0,0,46.739,2.527,52-50C414,106,415.707,57.466,363,53Z'/%3E%3Cpath id='Shape_2_copy_4' data-name='Shape 2 copy 4' class='cls-2' d='M569,170s-49.58-1.02-53,52c0,0,.087,50.028,52,51,0,0,46.739,2.527,52-50C620,223,621.707,174.466,569,170Z'/%3E%3C/svg%3E%0A")`;

  return (
    <HeaderBgImage
      srcImg={GRAPHQL_BORDER_LOGO}
      top={props.top || props.bottom ? undefined : '80px'}
      opacity={1}
      {...props}
    />
  );
};

export default GraphQLBgWithBorder;
