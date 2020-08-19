import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Slider, Typography, Input, Grid, Tooltip, TextField } from '@material-ui/core'
import ValueLabelComponent from './valueLabelComponent'
import NumberFormat from 'react-number-format'


function SalarySlider(props) {

    const [value, setValue] = React.useState(5);

    const marks = [
        {
              value: 3,
              label: '$1K',
        },
        {
             value: 4,
            label: '$10K'
        },
        {
            value: 5,
            label: '$100K',
        },
        {
            value: 6,
            label: '$1M',
        }
    ];

    function valuetext(value) {

        return `$${Math.floor(value)}`
    }

    const handleBlur = () => {
        if (value < 3) {
          setValue(3);
        } else if (value > 6) {
          setValue(6);
        }
    };

    const handleSliderChange = (event, newValue) => {
        props.slide(Math.floor(10 ** newValue))
        setValue(newValue)
    };

    const handleInputChange = (event) => {
        setValue(event.value === '' ? '' : Number(event.value));
    };

    function NumberFormatCustom(props) {
        const { inputRef, onChange, ...other} = props

        return (
                <NumberFormat
                    {...other}
                    getInputRef={inputRef}
                    onValueChange={(values) => console.log(values)}
                    thousandSeparator
                    isNumericString
                    prefix="$"
                />
        )
    }

    return (
            <div>
                <Typography gutterBottom>
                    Annual salary
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={3}>
                        <TextField
                            value={Math.floor(10**value)}
                            onChange={handleInputChange}
                            margin="dense"
                            fullWidth
                            name="numberformat"
                            id="formatted-numberformat-input"
                            InputProps={{
                                inputComponent: NumberFormatCustom,
                                tep: 1000,
                                min: 1000,
                                max: 1000000
                            }}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <Slider
                            defaultValue={5}
                            min={3}
                            max={6}
                            valueLabelFormat={(x) => x * 4}
                            onChange={handleSliderChange}
                            value={typeof value === 'number' ? value : 0}
                            scale={(x) => 10 ** x}
                            step={0.01}
                            marks={marks}
                            ValueLabelComponent={ValueLabelComponent}
                            valueLabelFormat={(x) => `$${Math.trunc(x/1000)}K`}
                        />
                    </Grid>
                </Grid>
            </div>
    )

}

export default SalarySlider