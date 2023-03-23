import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function ProgressBar() {

    const [percentage, setPercentage] = useState(0);
    // const [percentage1, setPercentage1] = useState(0);


    useEffect(() => {
        setTimeout(() => {
            if (percentage < 50) {
                setPercentage(percentage + 1);
            }
        }, 300);
    }, [percentage])

    return (
        <div>
            <div style={{ color: "#fff", textAlign: "center", display: "flex", alignItems: "baseline", justifyContent: "center", columnGap: "250px", rowGap: "30px", flexWrap: "wrap" }}>
                <div style={{ width: 180, display: "flex", flexDirection: "column", alignItems: "center", rowGap: "25px", }}>
                    <CircularProgressbar value={percentage} text="2.5" styles={buildStyles({
                        textColor: '#fff',
                        pathColor: '#FFA409',
                    })} />
                    <i className='text-xl'>Game Pool &
                        Development</i>
                </div>


                <div style={{ width: 180, display: "flex", flexDirection: "column", alignItems: "center", rowGap: "25px", }}>
                    <CircularProgressbar value={percentage} text="2.5" styles={buildStyles({
                        textColor: '#fff',
                        pathColor: '#FFA409',
                    })} />
                    <i className='text-xl'>Marketing</i>
                </div>

            </div >
        </div>
    );
}

export default ProgressBar
