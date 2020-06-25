import React from 'react';
import Loading from './Loading';
import ErrorModal from './ErrorModal';
import SeasonsDisplay from './SeasonsDisplay';
import '../Css/Seasons.css';

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

    renderContent = () => {
        if(this.state.errorMessage && !this.state.lat) {
            return (
                    <ErrorModal
                        errorMessage={this.state.errorMessage}
                    />
            );
        };

        if(!this.state.errorMessage && this.state.lat) {
            return (
                <SeasonsDisplay
                    lat={this.state.lat}
                    long={this.state.long}
                />
            );
        };
        return (
            <div>
                <Loading
                    message={'Please accept the location request'}
                />
            </div>
        );
    }

    // React will always require that you define a render method!
    render() {
        return this.renderContent();
    };
}

export default SeasonsApp;
