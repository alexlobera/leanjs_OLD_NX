import React from "react"
import Bullet from "./Bullet"

import { LIGHTGREY, EXTRADARKGREY } from "../../config/styles"
import { LEARNING, CARING, PEOPLE_2 } from "../../resources/icons"

export const validImages = {
  learning: LEARNING,
  caring: CARING,
  people: PEOPLE_2,
}

const ValueBullet = ({ image }) => (
  <Bullet
    color={LIGHTGREY}
    bg={EXTRADARKGREY}
    size={60 / 18}
    hasBorder={true}
    images={validImages}
    image={image}
  />
)

export default ValueBullet
