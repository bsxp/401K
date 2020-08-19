import React from 'react'
import { Slider, Typography, Input, Grid } from '@material-ui/core'
import ValueLabelComponent from './valueLabelComponent'



function RateOfReturnSlider(props) {

    const [value, setValue] = React.useState(7);

    const marks = [
        {
            value: 0,
            label: '0%',
        },
        {
            value: 3,
            label: '3%',
        },
        {
            value: 6,
            label: '6%',
        },
        {
            value: 9,
            label: '9%',
        },
        {
            value: 12,
            label: '12%',
        }
    ];

    function valuetext(value) {
        return `${value}%`
    }

    const handleBlur = () => {
        if (value < 0) {
          setValue(0);
        } else if (value > 12) {
          setValue(12);
        }
    };

    const handleSliderChange = (event, newValue) => {
        props.slide(newValue)
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    return (
            <div>
                <Typography gutterBottom>
                    Annual rate of return
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={3}>
                        <Input 
                            value={value}
                            margin="dense"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            inputProps={{
                                step: 1,
                                min: 0,
                                max: 12,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                            }}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <Slider
                            min={0}
                            max={12}
                            defaultValue={7}
                            getAriaValueText={valuetext}
                            aria-labelledby="discrete-slider-always"
                            onChange={handleSliderChange}
                            value={typeof value === 'number' ? value : 0}
                            step={0.25}
                            marks={marks}
                            ValueLabelComponent={ValueLabelComponent}
                        />
                    </Grid>
                </Grid>
            </div>
    )

}

export default RateOfReturnSlider