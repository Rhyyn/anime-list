import React, { useState } from "react";
import { Flex, useColorModeValue, Text, Button, ButtonGroup } from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons";
import { useMediaQuery, Link } from '@chakra-ui/react'
import { Link as ReachLink } from "react-router-dom";


const NavBar = () => {

    const [navBarShrink] = useMediaQuery('(max-width: 440px)')
    const buttonBg = useColorModeValue('gray.600', 'purple.700')
    const buttonBgHover = useColorModeValue('purple.500', 'blue.700')
    const color = useColorModeValue('white', 'white')


    return (
        <div className="NavBarMainDiv">
            {navBarShrink ? <HamburgerIcon className="navBarHamburger" boxSize={6} marginLeft="1rem"></HamburgerIcon> : null}
            {navBarShrink ? null : <Flex className="navBarContainer" marginLeft="1rem">
                <ButtonGroup spacing="0.5" alignItems="center" >
                    <Button padding="0.5rem" fontSize="1rem" bg="none" color={color} _hover={{ bg: buttonBgHover}}><Link as={ReachLink} to="/">Home</Link></Button>
                    <Button padding="0.5rem" fontSize="1rem" bg="none" color={color} _hover={{ bg: buttonBgHover}}><Link as={ReachLink} to="/top">Top Anime</Link></Button>
                    <Button padding="0.5rem" fontSize="1rem" bg="none" color={color} _hover={{ bg: buttonBgHover}}><Link as={ReachLink} to="/seasonal">Seasonal Anime</Link></Button>
                    <Button padding="0.5rem" fontSize="1rem" bg="none" color={color} _hover={{ bg: buttonBgHover}}><Link as={ReachLink} to="/genres">Genres</Link></Button>
                </ButtonGroup>
            </Flex>}

        </div>

    );
};

export default NavBar;
