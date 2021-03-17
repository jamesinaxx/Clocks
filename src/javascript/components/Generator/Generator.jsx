import React from 'react';
import { ClockSelect } from './lib/ClockSelect.jsx';
import { ColorInput } from './lib/ColorInput.jsx';

// TODO Fix generate button placement
class Generator extends React.Component {
    render() {
        return (
            <form id="ClockGenerator">
                <ClockSelect />
                <ColorInput />

                <button
                    className="btn-clock"
                    onClick={(e) => {
                        e.preventDefault();
                        const urlParams = [];
                        let finalUrl = window.location.href;
                        const tickedClocks = clockList
                            .slice()
                            .filter(
                                (_item, i) =>
                                    document.getElementsByClassName(
                                        'checkbox-clock'
                                    )[i].checked
                            );
                        console.log(tickedClocks.length);
                        if (
                            !(
                                tickedClocks.length === 0 ||
                                tickedClocks.length > 1
                            )
                        ) {
                            urlParams.push('clock=' + tickedClocks[0]);
                        }
                        if (
                            document.getElementById('clock-color-input').value
                        ) {
                            urlParams.push(
                                'color=' +
                                    document
                                        .getElementById('clock-color-input')
                                        .value.replace('#', '')
                            );
                        }
                        finalUrl = finalUrl + '?' + urlParams.join('&');
                        navigator.clipboard.writeText(finalUrl);
                        alert('Saved the url to clipboard!\n' + finalUrl);
                        window.open(finalUrl, '_blank');
                    }}
                >
                    Generate URL
                </button>
            </form>
        );
    }
}

export { Generator };
