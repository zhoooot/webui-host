import exp from 'constants';
import React from 'react';

interface PlayerProps
{
    index: number;
}

const PlayerBar: React.FC<PlayerProps>=({index})=>{
    return (
        <div className='w-screen flex flex-row absolute bottom-0 left-0 p-2 '>
            <div className="avatar">
                <div className=" w-16 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <div className='ml-4 self-center font-bold'>Shut the fuck up</div>
            <div className='rounded-md bg-gray-600 p-2 absolute right-2 text-white text-1xl font-bold self-center'>
                {index}
                </div>
        </div>
    );
};



export default PlayerBar;