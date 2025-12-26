import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Logo = () => (
  <StaticImage
    src="./main.png"
    alt="Going Prodo Logo"
    placeholder="none"
    layout="fixed"
    width={50}
    height={50}
    style={{ display: "block" }}
  />
)

export default Logo