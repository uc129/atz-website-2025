'use client'
import Link from "next/link";
import { useEffect } from "react"



export const Sidebar = () => {

    useEffect(() => {
        let link = document.querySelectorAll('.sidebar-link');

        link.forEach((li, index) => {
            li.classList.add('hover:text-red-400')
            li.addEventListener('click', () => {
                link.forEach((li) => {
                    li.classList.remove('text-red-100')
                })
                li.classList.add('text-red-100')
                localStorage.setItem('index', index.toString())
            })
        })

        return () => {
            link.forEach((li) => {
                li.removeEventListener('click', () => {
                    link.forEach((li) => {
                        li.classList.remove('text-red-100')
                    })
                    li.classList.add('text-red-100')
                })
            })
        }
    })

    useEffect(() => {
        let index = localStorage.getItem('index');
        index = index ? index : '0';
        let key = parseInt(index);
        let link = document.querySelectorAll('li');
        link.forEach((li) => {
            li.classList.remove('text-red-100')
        })
        link[key].classList.add('text-red-100')
    })

    return (
        <div className="min-w-[320px] w-[320px] h-[90vh] ">

            <div className="p-4">
                <h1 className="text-2xl font-bold">ATZ</h1>
                <p className="text-sm">Engineering Services</p>
            </div>

            {/* // manual passenger elevator,
            // automatic passenger elevator,
            // freight elevator,
            // home elevator,
            // hospital elevator,
            // machine room less elevator,
            // gearless elevator,
            // capsule elevator,
            // hydraulic elevator,
            // dumbwaiter elevator */}

            <div className="text-gray">
                <div className="p-4">
                    <h5 className="">Elevators</h5>
                    <ul className="text-sm cursor-pointer">
                        <li className="sidebar-link"> <Link href='/elevators'>Elevators</Link></li>
                        <li className="sidebar-link"> <Link href='/elevators/manual-door-passenger-elevator'>Manual Door Passenger Elevator</Link></li>
                        <li className="sidebar-link"> <Link href='/elevators/automatic-door-passenger-elevator'>Automatic Door Passenger Elevator</Link></li>
                        <li className="sidebar-link"> <Link href='/elevators/freight-elevator'>Freight Elevator</Link></li>
                        <li className="sidebar-link"> <Link href='/elevators/home-elevator'>Home Elevator</Link></li>
                        <li className="sidebar-link"> <Link href='/elevators/hospital-elevator'>Hospital Elevator</Link></li>
                        <li className="sidebar-link"> <Link href='/elevators/machine-room-less-elevator'>Machine Room Less Elevator</Link></li>
                        <li className="sidebar-link"> <Link href='/elevators/gearless-elevator'>Gearless Elevator</Link></li>
                        <li className="sidebar-link"> <Link href='/elevators/capsule-elevator'>Capsule Elevator</Link></li>
                        <li className="sidebar-link"> <Link href='/elevators/hydraulic-elevator'>Hydraulic Elevator</Link></li>
                        <li className="sidebar-link"> <Link href='/elevators/dumbwaiter-elevator'>Dumbwaiter Elevator</Link></li>
                    </ul>
                </div>

                {/* //Elevator Installation
                //Escalator Installation
                //Elevator Maintenance
                //Escalator Maintenance
                //Elevator Repair
                //Escalator Repair
                //Elevator Modernization
                //Escalator Modernization */}

                <div className="p-4">
                    <h5 className=" ">Services</h5>
                    <ul className="text-sm cursor-pointer ">
                        <li className="sidebar-link"> <Link href='/services'>Services</Link></li>
                        <li className="sidebar-link"> <Link href='/services/elevator-installation'>Elevator Installation</Link></li>
                        <li className="sidebar-link"> <Link href='/services/elevator-maintenance'>Elevator Maintenance</Link> </li>
                        <li className="sidebar-link"> <Link href='/services/elevator-repair'>Elevator Repair</Link> </li>
                        <li className="sidebar-link"> <Link href='/services/elevator-modernization'>Elevator Modernization</Link> </li>
                        <li className="sidebar-link"> <Link href='/services/escalator-installation'>Escalator Installation</Link> </li>
                        <li className="sidebar-link"> <Link href='/services/escalator-maintenance'>Escalator Maintenance</Link> </li>
                        <li className="sidebar-link"> <Link href='/services/escalator-repair'>Escalator Repair</Link> </li>

                    </ul>
                </div>
            </div>
        </div>
    )

}