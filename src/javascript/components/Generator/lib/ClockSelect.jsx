import React from 'react';

function ClockSelect(props) {
    document.getElementById('root').classList = 'dark-mode';
    return (
        <div>
            {props.clockList.map((item, index) => (
                <label className="lbl-clock" key={index}>
                    {item.substring(0, 1).toUpperCase() + item.slice(1)}
                    <input
                        type="checkbox"
                        className="checkbox-clock"
                        id={props.clockList[index] + '-clock-checkbox'}
                        onClick={() => {
                            for (
                                let i = 0;
                                i <
                                document.getElementsByClassName(
                                    'checkbox-clock'
                                ).length;
                                i++
                            ) {
                                if (index !== i) {
                                    document.getElementsByClassName(
                                        'checkbox-clock'
                                    )[i].checked = false;
                                }
                            }
                        }}
                    ></input>
                </label>
            ))}
        </div>
    );
}

export { ClockSelect };
