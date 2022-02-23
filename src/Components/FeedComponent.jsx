import React from 'react';
import { LikeComponent } from './LikeComponent';
import { RetweetComponent } from './RetweetComponent';
import { TweetComponent } from './TweetComponent';

export const FeedComponent = () => {
    return (
        <div  className="component">
            <div>
            <p>
                Feed
            </p>
            </div>
            <div className='divComp'>
            <TweetComponent/>
            <RetweetComponent/>
            <LikeComponent/>
            </div>
        </div>
    );
}
