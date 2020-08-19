import React from 'react'
import { Slider, Typography, Input, Grid } from '@material-ui/core'
import ValueLabelComponent from './valueLabelComponent'


function RetirementAgeSlider(props) {

    const [value, setValue] = React.useState(30);

    const marks = [
        {
            value: 15,
            label: '15',
        },
        {
            value: 30,
            label: '30',
        },
        {
            value: 45,
            label: '45',
        },
        {
            value: 60,
            label: '60',
        },
        {
            value: 75,
            label: '75',
        },
        {
            value: 90,
            label: '90',
        },

    ];

    function valuetext(value) {
        return `${value}`
    }

    const handleBlur = () => {
        if (value < 15) {
          setValue(15);
        } else if (value > 90) {
          setValue(90);
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
                    Retirement age
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={3}>
                        <Input 
                            value={value}
                            margin="dense"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            inputProps={{
                                step: 3,
                                min: 15,
                                max: 90,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                            }}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <Slider
                            min={15}
                            max={90}
                            defaultValue={62}
                            getAriaValueText={valuetext}
                            aria-labelledby="discrete-slider-always"
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

export default RetirementAgeSlider