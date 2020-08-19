import React from 'react'
import { Slider, Typography, Input, Grid, InputAdornment, TextField } from '@material-ui/core'
import ValueLabelComponent from './valueLabelComponent'
import NumberFormat from 'react-number-format'


function AnnualSalaryIncreaseSlider(props) {

    const [value, setValue] = React.useState(5);

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

    function NumberFormatCustom(props) {
        const { inputRef, onChange, ...other} = props

        return (
                <NumberFormat
                    {...other}
                    getInputRef ={inputRef}
                    onValueChange={(values) => {
                        onChange({
                            target: {
                                name: props.name,
                                value: values.value
                            },
                        })
                    }}
                    isNumericString
                    prefix="%"
                />
        )
    }

    return (
            <div>
                <Typography gutterBottom>
                    Annual Salary Increase 
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={3}>
                        <TextField
                            value={value}
                            onChange={handleInputChange}
                            margin="dense"
                            fullWidth
                            onBlur={handleBlur}
                            name="numberformat"
                            id="formatted-numberformat-input"
                            InputProps={{
                                inputComponent: NumberFormatCustom,
                                step: 10,
                                min: 0,
                                max: 100,
                            }}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <Slider
                            min={0}
                            max={12}
                            defaultValue={5}
                            getAriaValueText={valuetext}
                            aria-labelledby="discrete-slider-always"
                            onChange={handleSliderChange}
                            value={typeof value === 'number' ? value : 0}
                            step={0.1}
                            marks={marks}
                            ValueLabelComponent={ValueLabelComponent}
                        />
                    </Grid>
                </Grid>
            </div>
    )

}

export default AnnualSalaryIncreaseSlider