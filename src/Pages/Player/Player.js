import React from 'react';
import ReactPlayer from 'react-player';

const Player = () => {
    const video = [
        {
            name: 'Rashiya',
            Url:
                'https://www.youtube.com/watch?v=F_oNAi5DcEU',
        },
        {
            name: 'Phir Aur Kya',
            Url:
                'https://www.youtube.com/watch?v=8sLS2knUa6Y',
        },
        {
            name: 'Heeriya',
            Url:
                'https://www.youtube.com/watch?v=VlzVXW65-jo',
        },
        {
            name: 'Apna bana le piya',
            Url:
                'https://www.youtube.com/watch?v=oC594Jq9QgA',
        },
        {
            name: 'tera fitoor',
            Url:
                'https://www.youtube.com/watch?v=qfdShSZZxlg',
        },
        {
            name: 'Kesariya',
            Url:
                'https://www.youtube.com/watch?v=BddP6PYo2gs',
        },
        {
            name: 'Param sundori',
            Url:
                'https://www.youtube.com/watch?v=w4ClQO0FFQg',
        },
        {
            name: 'Tera woh pyar',
            Url:
                'https://www.youtube.com/watch?v=8367ETnagHo',
        },
        {
            name: 'Sos',
            Url:
                'https://www.youtube.com/watch?v=Grr0FlC8SQA&ab_channel=ZeeMusicCompany',
        },
        {
            name: 'Sarainodu',
            Url:
                'https://www.youtube.com/watch?v=B6h-kQLQqec',
        },
    ]
    return (
        <div className="container mx-auto flex justify-center">
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
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