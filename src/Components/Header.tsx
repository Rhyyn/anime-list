import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, Flex, useColorMode } from "@chakra-ui/react";

import React from "react";
import Navbar from "./NavBar"

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    
    const colorModeIcon = () => { // function used to toggle icons for DARK MODE
        if (colorMode=== "light") {
            return <MoonIcon className="colorModeIcon" boxSize={6} marginRight="1rem"  onClick={toggleColorMode}>{colorMode === 'light' ? 'Dark' : 'Light'}</MoonIcon>
        } else {
            return <SunIcon className="colorModeIcon" boxSize={6} marginRight="1rem"  onClick={toggleColorMode}>{colorMode === 'dark' ? 'Dark' : 'Light'}</SunIcon>
        }
        
    }

    return (
        <header>
            <Flex className="headerContainer" bg="purple.400" maxW='100%' color="white" height="60px" alignItems="center" justifyContent="space-between">
                <Navbar></Navbar>
                {colorModeIcon()}
            </Flex>
        </header>
    )
}

export default Header;