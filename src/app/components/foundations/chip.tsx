'use client'
import { useEffect } from 'react'
import './chip.css'


export const ChipSvg = () => {




    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('wire-anim')
                }
            })
        }, { threshold: 0.5 })
        let wires = document.querySelectorAll('.wire') as NodeListOf<SVGPathElement>;
        wires.forEach((wire, index) => {
            wire.style.strokeDasharray = wire.getTotalLength().toString();
            wire.style.strokeDashoffset = wire.getTotalLength().toString();
            // wire.classList.add('wire-anim')
            // observer.observe(wire);
            wire.style.animation = `wire-anim 5s ease forwards  ${index / 7 + 1}s`
        })


    })



    return <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 889.79 192.43">
        <defs>
            <style>
            </style>
        </defs>
        <g id="Layer_1-2" data-name="Layer 1">
            <rect className="cls-7" x="355.82" y="48.71" width="189.97" height="61.85" rx="12.75" ry="12.75" />
            <g>
                <rect className="cls-9" x="390.21" y="41.08" width="4.39" height="8.11" />
                <rect className="cls-9" x="409.68" y="41.08" width="4.39" height="8.11" />
                <rect className="cls-9" x="429.14" y="41.08" width="4.39" height="8.11" />
                <rect className="cls-9" x="448.61" y="41.08" width="4.39" height="8.11" />
                <rect className="cls-9" x="468.08" y="41.08" width="4.39" height="8.11" />
                <rect className="cls-9" x="487.54" y="41.08" width="4.39" height="8.11" />
                <rect className="cls-9" x="507.01" y="41.08" width="4.39" height="8.11" />
            </g>
            <g>
                <rect className="cls-9" x="388.02" y="109.77" width="4.39" height="8.11" />
                <rect className="cls-9" x="407.48" y="109.77" width="4.39" height="8.11" />
                <rect className="cls-9" x="426.95" y="109.77" width="4.39" height="8.11" />
                <rect className="cls-9" x="446.42" y="109.77" width="4.39" height="8.11" />
                <rect className="cls-9" x="465.88" y="109.77" width="4.39" height="8.11" />
                <rect className="cls-9" x="485.35" y="109.77" width="4.39" height="8.11" />
                <rect className="cls-9" x="504.82" y="109.77" width="4.39" height="8.11" />
            </g>
            <g>
                <rect className="cls-9" x="547.13" y="69.34" width="4.39" height="8.11" transform="translate(622.72 -475.93) rotate(90)" />
                <rect className="cls-9" x="547.13" y="81.61" width="4.39" height="8.11" transform="translate(634.99 -463.66) rotate(90)" />
            </g>
            <g>
                <rect className="cls-9" x="350.11" y="69.45" width="4.39" height="8.11" transform="translate(425.81 -278.8) rotate(90)" />
                <rect className="cls-9" x="350.11" y="81.72" width="4.39" height="8.11" transform="translate(438.08 -266.53) rotate(90)" />
            </g>
            <polyline className="cls-5 wire" points="392.4 41.08 392.4 3.09 327.47 3.09" />
            <line className="cls-5" x1="470.27" y1="40.98" x2="470.27" y2="3.18" />
            <polyline className="cls-2 wire" points="509.2 41.26 509.2 30.55 886.61 30.55 886.61 176.9" />
            <polyline className="cls-4 wire" points="553.06 73.39 831.76 73.39 831.76 176.24" />
            <polyline className="cls-3 wire" points="552.57 85.66 625.27 85.66 625.27 151.53 497.78 151.53 497.78 189.65" />
            <polyline className="cls-3 wire" points="348.25 73.5 3.18 73.5 3.18 176.9" />
            <polyline className="cls-3 wire" points="348.25 85.78 66.9 85.78 66.9 113.82" />
            <polyline className="cls-3 wire" points="390.21 117.88 390.21 135.31 70.05 135.31 70.05 176.9" />
            <circle className="cls-8" cx="3.18" cy="176.9" r="2.68" />
            <circle className="cls-8" cx="66.9" cy="113.82" r="2.68" />
            <circle className="cls-8" cx="70.05" cy="176.9" r="2.68" />
            <circle className="cls-8" cx="325.3" cy="3.18" r="2.68" />
            <circle className="cls-8" cx="470.27" cy="3.18" r="2.68" />
            <circle className="cls-8" cx="497.78" cy="189.25" r="2.68" />
            <circle className="cls-8" cx="831.76" cy="176.24" r="2.68" />
            <circle className="cls-8" cx="886.61" cy="178.12" r="2.68" />
            <g>
                <rect className="cls-1" x="386.79" y="69.66" width="129.03" height="24.96" />
                <path className="cls-6" d="M389.75,70.81c1.09-.18,2.52-.34,4.34-.34,2.24,0,3.87.52,4.91,1.46.96.83,1.53,2.11,1.53,3.67s-.47,2.83-1.35,3.74c-1.2,1.27-3.15,1.92-5.36,1.92-.68,0-1.3-.03-1.82-.16v7.02h-2.26v-17.32ZM392.01,79.26c.49.13,1.12.18,1.87.18,2.73,0,4.39-1.33,4.39-3.74s-1.64-3.43-4.13-3.43c-.99,0-1.74.08-2.13.18v6.81Z" />
                <path className="cls-6" d="M414.24,81.73c0,4.65-3.22,6.68-6.27,6.68-3.41,0-6.03-2.5-6.03-6.47,0-4.21,2.76-6.68,6.24-6.68s6.06,2.63,6.06,6.47ZM404.26,81.86c0,2.76,1.59,4.84,3.82,4.84s3.82-2.05,3.82-4.89c0-2.13-1.07-4.84-3.77-4.84s-3.87,2.5-3.87,4.89Z" />
                <path className="cls-6" d="M417.85,75.54l1.66,6.4c.36,1.4.7,2.7.94,4h.08c.29-1.27.7-2.63,1.12-3.98l2.05-6.42h1.92l1.95,6.29c.47,1.51.83,2.83,1.12,4.11h.08c.21-1.27.55-2.6.96-4.08l1.79-6.32h2.26l-4.06,12.58h-2.08l-1.92-6.01c-.44-1.4-.81-2.65-1.12-4.13h-.05c-.31,1.51-.7,2.81-1.14,4.16l-2.03,5.98h-2.08l-3.8-12.58h2.34Z" />
                <path className="cls-6" d="M437.09,82.25c.05,3.09,2.03,4.37,4.32,4.37,1.64,0,2.63-.29,3.48-.65l.39,1.64c-.81.36-2.18.78-4.19.78-3.87,0-6.19-2.55-6.19-6.34s2.24-6.79,5.9-6.79c4.11,0,5.2,3.61,5.2,5.93,0,.47-.05.83-.08,1.07h-8.84ZM443.8,80.61c.03-1.46-.6-3.72-3.17-3.72-2.31,0-3.33,2.13-3.51,3.72h6.68Z" />
                <path className="cls-6" d="M448.85,79.46c0-1.48-.03-2.76-.1-3.93h2l.08,2.47h.1c.57-1.69,1.95-2.76,3.48-2.76.26,0,.44.03.65.08v2.16c-.23-.05-.47-.08-.78-.08-1.61,0-2.76,1.22-3.07,2.94-.05.31-.1.68-.1,1.07v6.71h-2.26v-8.66Z" />
                <path className="cls-6" d="M458.36,82.25c.05,3.09,2.03,4.37,4.32,4.37,1.64,0,2.63-.29,3.48-.65l.39,1.64c-.81.36-2.18.78-4.19.78-3.87,0-6.19-2.55-6.19-6.34s2.24-6.79,5.9-6.79c4.11,0,5.2,3.61,5.2,5.93,0,.47-.05.83-.08,1.07h-8.84ZM465.07,80.61c.03-1.46-.6-3.72-3.17-3.72-2.31,0-3.33,2.13-3.51,3.72h6.68Z" />
                <path className="cls-6" d="M480.98,69.66v15.21c0,1.12.03,2.39.1,3.25h-2.05l-.1-2.18h-.05c-.7,1.4-2.24,2.47-4.29,2.47-3.04,0-5.38-2.57-5.38-6.4-.03-4.19,2.57-6.76,5.64-6.76,1.92,0,3.22.91,3.8,1.92h.05v-7.51h2.29ZM478.69,80.66c0-.29-.03-.68-.1-.96-.34-1.46-1.59-2.65-3.3-2.65-2.37,0-3.77,2.08-3.77,4.86,0,2.55,1.25,4.65,3.72,4.65,1.53,0,2.94-1.01,3.35-2.73.08-.31.1-.62.1-.99v-2.18Z" />
                <path className="cls-6" d="M490.37,70.83c.99-.21,2.55-.36,4.13-.36,2.26,0,3.72.39,4.81,1.27.91.68,1.46,1.72,1.46,3.09,0,1.69-1.12,3.17-2.96,3.85v.05c1.66.42,3.61,1.79,3.61,4.39,0,1.51-.6,2.65-1.48,3.51-1.22,1.12-3.2,1.64-6.06,1.64-1.56,0-2.76-.1-3.51-.21v-17.24ZM492.63,78.01h2.05c2.39,0,3.8-1.25,3.8-2.94,0-2.05-1.56-2.86-3.85-2.86-1.04,0-1.64.08-2,.16v5.64ZM492.63,86.41c.44.08,1.09.1,1.9.1,2.34,0,4.5-.86,4.5-3.41,0-2.39-2.05-3.38-4.52-3.38h-1.87v6.68Z" />
                <path className="cls-6" d="M505.32,75.54l2.76,7.44c.29.83.6,1.82.81,2.57h.05c.23-.75.49-1.72.81-2.63l2.5-7.38h2.42l-3.43,8.97c-1.64,4.32-2.76,6.53-4.32,7.88-1.12.99-2.24,1.38-2.81,1.48l-.57-1.92c.57-.18,1.33-.55,2-1.12.62-.49,1.4-1.38,1.92-2.55.1-.23.18-.42.18-.55s-.05-.31-.16-.6l-4.65-11.6h2.5Z" />
            </g>
        </g>
    </svg>


}
