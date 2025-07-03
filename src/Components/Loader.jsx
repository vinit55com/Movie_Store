import React from 'react'

function Loader() {
    return (
        <div className='h-screen w-screen bg-black flex items-center justify-center'>
           <svg 
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      width="217"
      height="217"
      className="block bg-transparent h-[40vh] w-[50vh] "
      style={{ shapeRendering: 'auto' }}
    >
      <g>
        <g>
          <circle fill="#fff" r="4" cy="50" cx="60">
            <animate
              begin="-0.67s"
              keyTimes="0;1"
              values="95;35"
              dur="1s"
              repeatCount="indefinite"
              attributeName="cx"
            ></animate>
            <animate
              begin="-0.67s"
              keyTimes="0;0.2;1"
              values="0;1;1"
              dur="1s"
              repeatCount="indefinite"
              attributeName="fill-opacity"
            ></animate>
          </circle>
          <circle fill="#1f1e24" r="4" cy="50" cx="60">
            <animate
              begin="-0.33s"
              keyTimes="0;1"
              values="95;35"
              dur="1s"
              repeatCount="indefinite"
              attributeName="cx"
            ></animate>
            <animate
              begin="-0.33s"
              keyTimes="0;0.2;1"
              values="0;1;1"
              dur="1s"
              repeatCount="indefinite"
              attributeName="fill-opacity"
            ></animate>
          </circle>
          <circle fill="#1f1e24" r="4" cy="50" cx="60">
            <animate
              begin="0s"
              keyTimes="0;1"
              values="95;35"
              dur="1s"
              repeatCount="indefinite"
              attributeName="cx"
            ></animate>
            <animate
              begin="0s"
              keyTimes="0;0.2;1"
              values="0;1;1"
              dur="1s"
              repeatCount="indefinite"
              attributeName="fill-opacity"
            ></animate>
          </circle>
        </g>
        <g transform="translate(-15 0)">
          <path
            transform="rotate(90 50 50)"
            fill="#6556cd"
            d="M50 50L20 50A30 30 0 0 0 80 50Z"
          ></path>
          <path fill="#6556cd" d="M50 50L20 50A30 30 0 0 0 80 50Z">
            <animateTransform
              keyTimes="0;0.5;1"
              values="0 50 50;45 50 50;0 50 50"
              dur="1s"
              repeatCount="indefinite"
              type="rotate"
              attributeName="transform"
            ></animateTransform>
          </path>
          <path fill="#6556cd" d="M50 50L20 50A30 30 0 0 1 80 50Z">
            <animateTransform
              keyTimes="0;0.5;1"
              values="0 50 50;-45 50 50;0 50 50"
              dur="1s"
              repeatCount="indefinite"
              type="rotate"
              attributeName="transform"
            ></animateTransform>
          </path>
        </g>
      </g>
    </svg>

        </div>
    )
}

export default Loader

