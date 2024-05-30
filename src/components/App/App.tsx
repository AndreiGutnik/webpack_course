import React, {useState} from 'react';
import classes from './App.module.scss';
import {Link, Outlet} from "react-router-dom";
import About from "@/pages/about/About";
import avatarPng from '@/assets/avatar.png'
import avatarJpg from '@/assets/avatar.jpg'
import Image from '@/assets/app-image.svg'

// TREE SHAKING
function TODO() {
    TODO2()
}

function TODO2() {
    throw new Error();
}

export const App = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        // setCount(prev => prev + 1)
        TODO();
    }
    // TODO('51235');
    //
    // if(__PLATFORM__ === 'desktop') {
    //     return <div>ISDESKTOPPLATFORM</div>
    // }
    //
    // if(__PLATFORM__ === 'mobile') {
    //     return <div>ISMOBILEPLATFORM</div>
    // }
    //
    // if(__ENV__ === 'development') {
    //     // addDevtools()
    // }

    return (
        <div data-testid={'App.DataTestId'}>            
            <Link to={'/about'}>about</Link>
            <br/>
            <Link to={'/shop'}>shop</Link>            
            <Outlet />
        </div>
    );
};

