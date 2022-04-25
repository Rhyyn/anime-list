import React from "react";
import { StarIcon } from '@chakra-ui/icons'
import { Flex, Grid } from "@chakra-ui/react";

const Card = ({ data }: { data: any }) => {

    // console.log(data[0]);
    return (
        <div className="animeCardContainer">
            {data && data.map((item: any, index: number) => {
                return <div className="animeCard" key={index}>
                    <Grid templateColumns='repeat(3, 1fr)' width="100%">
                        <h3 className="animeCardPopularity">{item.popularity}</h3>
                        <h3 className="animeCardTitle">{item.title}</h3>
                    </Grid>
                    <p className="animeCardScore"><StarIcon />{item.score}</p>
                    <img className="animeCardImg" src={item.images.webp.image_url}></img>

                </div>
            })}
        </div>
    )
};

export default Card;