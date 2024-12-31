'use client'
import { useEffect } from 'react'
import './grid.css'
import { useWindowSize } from '@/app/lib/windowSizeContext'


const ATZLandingGrid = () => {

    const { isDesktop, isLargeDesktop, isExtraLargeDesktop, isTablet, isMobile } = useWindowSize()
    console.log(isDesktop, isLargeDesktop, isExtraLargeDesktop, isTablet, isMobile);


    useEffect(() => {

        let paths = document.querySelectorAll('.cls-1') as NodeListOf<SVGPathElement>
        paths.forEach((path, index) => {
            path.style.strokeDasharray = path.getTotalLength().toString();
            path.style.strokeDashoffset = path.getTotalLength().toString();
            path.style.animation = `line-anim 2s ease forwards ${index / 7 + 1}s`
        })

    })

    return (
        <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg"
            viewBox={` ${isDesktop ? ' 60 0 1180 680' : '0 0 0 0'} `}>
            <g id="Layer_1-2" data-name="Layer 1" className='relative'>
                {/* <path className="cls-1" d="M496.54,615.11c.02,18.17.06,36.35.11,54.52" /> */}
                <path className="cls-1" d="M496.72,0c-.16,19.08-.17,38.17-.04,57.25" />
                <path className="cls-1" d="M779.13,0c.08,18.83.14,37.66.19,56.5" />
                <path className="cls-1" d="M.23,57.8C.23,26,26,.23,57.8.23s57.56,25.77,57.56,57.56" />
                <path className="cls-1 " d="M.23,157.8C.23,26,26,.23,57.8.23s57.56,25.77,57.56,57.56" />


                <line className="cls-1" y1="346.4" x2="1302.93" y2="346.4" />
                <line className="cls-1" y1="56.12" x2="1302.93" y2="56.12" />
                <line className="cls-1" y1="464.34" x2="1302.93" y2="464.34" />
                <line className="cls-1" x1="71.94" y1="0" x2="71.94" y2="669.63" />
                <line className="cls-1" x1="1228.52" y1="0" x2="1228.52" y2="669.63" />
                {/* <line className="cls-1" y1="616" x2="1302.93" y2="616" /> */}
                {/* <path className="cls-1" d="M778.99,616c.39,17.6.39,34.6,0,52.74" /> */}


            </g>
        </svg>
    )
}

export default ATZLandingGrid