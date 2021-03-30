import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PlayIcon(props) {
  return (
    <Svg
      viewBox="0 0 61 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M30.5 55.917c14.037 0 25.417-11.38 25.417-25.417S44.537 5.083 30.5 5.083 5.083 16.463 5.083 30.5 16.463 55.917 30.5 55.917z"
        fill="#000"
        fillOpacity={0.4}
        stroke="#fff"
        strokeOpacity={0.9}
        strokeWidth={1.548}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M25.417 20.333L40.667 30.5l-15.25 10.167V20.333z"
        stroke="#fff"
        strokeOpacity={0.9}
        strokeWidth={1.548}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default PlayIcon
