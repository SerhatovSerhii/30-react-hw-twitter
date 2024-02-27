import React, { useContext } from 'react'
import Avatar from './Avatar'
import { TwitterContext } from '../utils/context'

const Stats = () => {

    const { user, stats, handleMouseClick } = useContext(TwitterContext)

    return (
        <div className='user-stats'>
            <div>
                <Avatar />
                {user.name}
            </div>
            <div className='stats'>
                <div>Followers: {stats.followers}</div>
                <div onMouseDown={handleMouseClick}></div>
                <div>Following: {stats.following}</div>
            </div>
        </div>
    )
}

export default Stats