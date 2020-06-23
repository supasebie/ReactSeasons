import React from 'react';
import { Grid } from 'semantic-ui-react';
import Loading from './Loading';
import ErrorModal from './ErrorModal';
import SeasonsDisplay from './SeasonsDisplay';

class SeasonsApp extends React.Component {
    // Babel sugar defines state variables without constructor and super
    state = { lat: null, long: null, errorMessage: ''};

    // Fires when component mounts, good time to introduce code that will set variables on your components
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude, long: position.coords.longitude }),
            err => this.setState({ errorMessage: err.message })
        );
    };

    componentDidUpdate() {
        console.log('Component was just updated');
    };

    // React will always require that you define a render method!
    render() {
        if(this.state.errorMessage && !this.state.lat) {
            return (
                <Grid container columns={1} divided>
                <Grid.Row>
                    <ErrorModal
                        errorMessage={this.state.errorMessage}
                    />
                </Grid.Row>
            </Grid>
            );
        };

        if(!this.state.errorMessage && this.state.lat) {
            return (
                <Grid container columns={1} divided>
                <Grid.Row>
                    <SeasonsDisplay
                        lat={this.state.lat}
                        long={this.state.long}
                    />
                </Grid.Row>
            </Grid>
            );
        };
        return (
            <Grid container columns={1} divided>
                <Grid.Row>
                    <Loading />
                </Grid.Row>
            </Grid>
        );
    };
}

export default SeasonsApp;