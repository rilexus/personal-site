import * as React from "react"

const PlusIcon = ({ active }) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns={'xmlns="http://www.w3.org/2000/svg"'}
      xmlSpace={"preserve"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      x="0px"
      y="0px"
      viewBox="0 0 592 592"
      style={{
        fill: active ? "#757575" : "#cacaca",
      }}
    >
      <g>
        <path
          d="M465.064,207.566l0.028,0H284.436V27.25c0-14.84-12.016-27.248-26.856-27.248h-23.116
			c-14.836,0-26.904,12.408-26.904,27.248v180.316H26.908c-14.832,0-26.908,12-26.908,26.844v23.248
			c0,14.832,12.072,26.78,26.908,26.78h180.656v180.968c0,14.832,12.064,26.592,26.904,26.592h23.116
			c14.84,0,26.856-11.764,26.856-26.592V284.438h180.624c14.84,0,26.936-11.952,26.936-26.78V234.41
			C492,219.566,479.904,207.566,465.064,207.566z"
        />
      </g>
    </svg>
  )
}

export default PlusIcon
