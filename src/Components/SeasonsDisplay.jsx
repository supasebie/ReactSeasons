import React from 'react'
import { Grid, GridColumn, Icon } from 'semantic-ui-react';

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'Summer' : 'Winter';
    } else {
        return lat > 0 ? 'Winter' : 'Summer';
    }
};
const SeasonsDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    return (
        <Grid container columns={3} centered>
            <Grid.Row>
                <GridColumn>
                    <Icon name='sun' color='orange' size='massive' />
                </GridColumn>
                <GridColumn>
                    <h1>{season === 'Winter' ? 'Burr' : 'Wheew hot'}</h1>
                </GridColumn>
                <GridColumn>
                    <Icon name='sun' color='orange' size='massive' />
                </GridColumn>
            </Grid.Row>
        </Grid>
    );
}

export default SeasonsDisplay;
