import React from 'react';
import ReactPlayer from 'react-player';

const Player = () => {
    return (
        <div class=" mx-auto flex items-center justify-center">
            <div class="container grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <ReactPlayer url="https://www.youtube.com/watch?v=F_oNAi5DcEU" controls />
                <ReactPlayer url="https://www.youtube.com/watch?v=8sLS2knUa6Y" controls />
                <ReactPlayer url="https://www.youtube.com/watch?v=VlzVXW65-jo" controls />
                <ReactPlayer url="https://www.youtube.com/watch?v=oC594Jq9QgA" controls />
                <ReactPlayer url="https://www.youtube.com/watch?v=qfdShSZZxlg" controls />
                <ReactPlayer url="https://www.youtube.com/watch?v=BddP6PYo2gs" controls />
                <ReactPlayer url="https://www.youtube.com/watch?v=w4ClQO0FFQg" controls />
                <ReactPlayer url="https://www.youtube.com/watch?v=8367ETnagHo" controls />
                <ReactPlayer url="https://www.youtube.com/watch?v=3U_ZmwFZ6eY" controls />
                <ReactPlayer url="https://www.youtube.com/watch?v=B6h-kQLQqec" controls />
            </div>
        </div>

    );
};

export default Player;