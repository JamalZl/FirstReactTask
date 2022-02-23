import React from "react";
import {NavbarComponent} from "./NavbarComponent"
import { ProfileComponent } from "./ProfileComponent";
import {TrendingComponent} from "./TrendingComponent";
import {FeedComponent} from "./FeedComponent"
export const AppComponent = () => {
    return (
        <div className="CompApp" >
        <div className="appTextDiv">
            <p className="componentBlue">App</p>
        </div>
        <div className="APPC">
            <NavbarComponent/>
            <ProfileComponent/>
            <TrendingComponent/>
            <FeedComponent/>
        </div>
        
        </div>
    );
}