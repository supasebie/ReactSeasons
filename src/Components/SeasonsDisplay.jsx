import React from 'react'
import { Icon } from 'semantic-ui-react';
import '../Css/Seasons.css';

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const seasonConfig = {
    summer: {
        text: 'Let\'s hit the beach',
        iconName: 'sun',
        iconColor: 'orange',
    },
    winter: {
        text: 'Let\'s hit the snow',
        iconName: 'snowflake',
        iconColor: 'blue',
    }
};

const SeasonsDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName, iconColor } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <Icon className={'icon-right'} name={iconName} color={iconColor} size='massive' />
            <h1>{text}</h1>
            <Icon className={'icon-left'} name={iconName} color={iconColor} size='massive' />
        </div>
    );
}

export default SeasonsDisplay;
