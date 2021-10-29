import React from 'react';
import ContentLoader from "react-content-loader";

const PizzaLoadingBlock = () => {
    return (
        <ContentLoader
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="140" cy="130" r="130" />
            <rect x="23" y="279" rx="0" ry="0" width="246" height="20" />
            <rect x="24" y="318" rx="0" ry="0" width="245" height="66" />
            <rect x="24" y="414" rx="0" ry="0" width="104" height="25" />
            <rect x="206" y="416" rx="0" ry="0" width="65" height="23" />
        </ContentLoader>
    );
};

export default PizzaLoadingBlock;
