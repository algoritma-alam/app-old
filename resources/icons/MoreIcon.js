import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MoreIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32.055 32.055"
      fill="currentColor"
      {...props}
    >
      <Path d="M3.968 12.061A3.965 3.965 0 000 16.027a3.965 3.965 0 003.968 3.967 3.966 3.966 0 100-7.933zm12.265 0a3.967 3.967 0 00-3.968 3.965c0 2.192 1.778 3.967 3.968 3.967s3.97-1.772 3.97-3.967a3.97 3.97 0 00-3.97-3.965zm11.857 0a3.967 3.967 0 10-.005 7.933 3.967 3.967 0 00.005-7.933z" />
    </Svg>
  )
}

export default MoreIcon
