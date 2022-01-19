import React, { Component } from 'react';
import GenericSection from '../components/sections/GenericSection';
import TeamView from '../components/sections/TeamView';

class About extends Component {
    render() {
        return (
            <div>
                <GenericSection className="illustration-section-03">
                    <TeamView></TeamView>
                </GenericSection>
            </div>
        )
    }
}

export default About;