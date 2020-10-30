import React from 'react';
import ContentLoader from "react-content-loader";

function PlaceholderBlock() {
    return (
        <ContentLoader
            className='pizza-block'
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <circle cx="130" cy="130" r="130" />
            <rect x="0" y="270" rx="0" ry="0" width="280" height="24" />
            <rect x="0" y="308" rx="0" ry="0" width="280" height="84" />
            <rect x="0" y="414" rx="0" ry="0" width="95" height="35" />
            <rect x="274" y="409" rx="0" ry="0" width="1" height="0" />
            <rect x="161" y="406" rx="23" ry="23" width="115" height="49" />
        </ContentLoader>
    )
}

export default PlaceholderBlock;
