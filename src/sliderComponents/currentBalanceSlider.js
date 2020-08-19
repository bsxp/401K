import React from 'react'
import { Slider, Typography, Input, Grid, TextField} from '@material-ui/core'
import ValueLabelComponent from './valueLabelComponent'
import NumberFormat from 'react-number-format'

function CurrentBalanceSlider(props) {

    const [value, setValue] = React.useState(3);

    const marks = [
        {
              value: 3,
              label: '$10K',
        },
        {
             value: 4,
            label: '$100K'
        },
        {
            value: 5,
            label: '$1M',
        },
        {
            value: 6,
            label: '$10M',
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
        props.slide(Math.floor(10 ** newValue) * 10)
        setValue(newValue)
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
                    thousandSeparator
                    isNumericString
                    prefix="$"
                />
        )
    }

    return (
            <div>
                <Typography gutterBottom>
                    Current 401(k) balance
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={3}>
                        <TextField
                            value={Math.floor(10**value) * 10}
                            onChange={handleInputChange}
                            margin="dense"
                            fullWidth
                            name="numberformat"
                            id="formatted-numberformat-input"
                            InputProps={{
                                inputComponent: NumberFormatCustom,
                                step: 50000,
                                min: 0,
                                max: 10000000,
                            }}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <Slider
                            defaultValue={15}
                            min={3}
                            max={6}
                            getAriaValueText={valuetext}
                            aria-labelledby="discrete-slider-always"
                            onChange={handleSliderChange}
                            value={typeof value === 'number' ? value : 0}
                            scale={(x) => (10 ** x) * 10}
                            step={0.1}
                            marks={marks}
                            ValueLabelComponent={ValueLabelComponent}
                            valueLabelFormat={(x) => `$${Math.trunc(x/1000)}K`}
                        />
                    </Grid>
                </Grid>
            </div>
    )

}

export default CurrentBalanceSlider