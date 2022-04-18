import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, Flex, useColorMode, useColorModeValue } from "@chakra-ui/react";

import React from "react";
import Navbar from "./NavBar"

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const bgColor = useColorModeValue('purple.400', 'gray.700') // bg color of the container : light | dark
    
    const colorModeIcon = () => { // function used to toggle icons for DARK MODE
        if (colorMode=== "light") {
            return <MoonIcon className="colorModeIcon" boxSize={6} marginRight="1rem"  onClick={toggleColorMode}>{colorMode === 'light' ? 'Dark' : 'Light'}</MoonIcon>
        } else {
            return <SunIcon className="colorModeIcon" boxSize={6} marginRight="1rem"  onClick={toggleColorMode}>{colorMode === 'dark' ? 'Dark' : 'Light'}</SunIcon>
        }
        
    }

    return (
        <header>
            <Flex className="headerContainer" bg={bgColor} maxW='100%' color="white" height="60px" alignItems="center" justifyContent="space-between">
                <Navbar></Navbar>
                {colorModeIcon()}
            </Flex>
        </header>
    )
}

export default Header;