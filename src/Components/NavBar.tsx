import React, { useState } from "react";
import { Flex, useColorModeValue, Text } from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons";
import { useMediaQuery } from '@chakra-ui/react'

const NavBar = () => {

    const [navBarShrink] = useMediaQuery('(max-width: 480px)')


    return (
        <div className="NavBarMainDiv">
            {navBarShrink ? <HamburgerIcon className="navBarHamburger" boxSize={6} marginLeft="1rem"></HamburgerIcon> : null}
            {navBarShrink ? null : <Flex className="navBarContainer">
                <h4 className="navBarItem">Home</h4>
                <h4 className="navBarItem">Top Anime</h4>
                <h4 className="navBarItem">Seasonal Anime</h4>
                <h4 className="navBarItem">Genres</h4>
            </Flex>}

        </div>

    );
};

export default NavBar;
