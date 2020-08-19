import React from 'react'
import { Slider, Typography, Input, Grid } from '@material-ui/core'
import ValueLabelComponent from './valueLabelComponent'

function EmployerMatchSlider(props) {

    const [value, setValue] = React.useState(25);

    const marks = [
        {
            value: 0,
            label: '0%',
        },
        {
            value: 25,
            label: '100%',
        },
        {
            value: 50,
            label: '200%',
        },
        {
            value: 75,
            label: '300%',
        },
        {
            value: 100,
            label: '400%',
        }
    ];

    const handleBlur = () => {
        if (value < 0) {
          setValue(0);
        } else if (value > 100) {
          setValue(100);
        }
    };

    const handleSliderChange = (event, newValue) => {
        props.slide(newValue * 4)
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value * 4));
    };

    return (
            <div>
                <Typography gutterBottom>
                    Employer match
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={3}>
                        <Input 
                            value={value * 4}
                            margin="dense"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            inputProps={{
                                step: 1,
                                min: 0,
                                max: 100,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                            }}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <Slider
                            defaultValue={50}
                            valueLabelFormat={(x) => x * 4}
                            onChange={handleSliderChange}
                            value={typeof value === 'number' ? value : 0}
                            step={1}
                            marks={marks}
                            ValueLabelComponent={ValueLabelComponent}
                        />
                    </Grid>
                </Grid>
            </div>
    )

}

export default EmployerMatchSlider