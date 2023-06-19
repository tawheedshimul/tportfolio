import React from 'react';
import ReactPlayer from 'react-player';

const Player = () => {
    const video = [
        {
            name: 'Md Tawheed Shimul',
            Url:
                'https://www.youtube.com/watch?v=F_oNAi5DcEU',
        },
        {
            name: 'Md Tawheed Shimul',
            Url:
                'https://www.youtube.com/watch?v=8sLS2knUa6Y',
        },
        {
            name: 'Md Tawheed Shimul',
            Url:
                'https://www.youtube.com/watch?v=VlzVXW65-jo',
        },
        {
            name: 'Md Tawheed Shimul',
            Url:
                'https://www.youtube.com/watch?v=oC594Jq9QgA',
        },
        {
            name: 'Md Tawheed Shimul',
            Url:
                'https://www.youtube.com/watch?v=qfdShSZZxlg',
        },
        {
            name: 'Md Tawheed Shimul',
            Url:
                'https://www.youtube.com/watch?v=BddP6PYo2gs',
        },
        {
            name: 'Md Tawheed Shimul',
            Url:
                'https://www.youtube.com/watch?v=w4ClQO0FFQg',
        },
        {
            name: 'Md Tawheed Shimul',
            Url:
                'https://www.youtube.com/watch?v=8367ETnagHo',
        },
        {
            name: 'Md Tawheed Shimul',
            Url:
                'https://www.youtube.com/watch?v=3U_ZmwFZ6eY',
        },
        {
            name: 'Md Tawheed Shimul',
            Url:
                'https://www.youtube.com/watch?v=B6h-kQLQqec',
        },
    ]
    return (
        <div className="container mx-auto flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
                {video.map((videos) => (
                    <div key={videos.name} className="rounded overflow-hidden shadow-md">
                        <ReactPlayer url={videos.Url} controls width="100%" height='200px' />
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Player;