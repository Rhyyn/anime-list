import React from 'react';
import Header from '../Components/Header';
import Card from '../Components/Card';

const TopAnime = ({data}:{ data:any }) => {

    
    return (
        <div className='topAnimePage'>
            <Header></Header>
            <Card data={data}></Card>
        </div>
    )
}

export default TopAnime;