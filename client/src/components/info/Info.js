import React from 'react';
import './Info.css'


function Info () {
    return (
        <div className="info">
            <div className="info__header">
                <h1>General Infomation</h1>
            </div>
            <div className="info__text">
                <h3>Political Parties in the US</h3>
                <div className="paragraph"> 
                    <text>
                    Conservative:
                    Republican Party 
                    Tea Party
                    Constitution Party
                    </text>
                </div>
                <div className="paragraph">
                    <text>
                    Liberal:
                    Green Party
                    Democratic Party
                    Peace and Freedom Party
                    </text>
                </div>
                <div className="paragraph">
                    <text>
                    Centrist:
                    Libertarian Party
                    Alliance Party
                    Reform Party
                    </text>
                </div>
                
            </div>
        </div>
    );
}

export default Info;