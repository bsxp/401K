import React from 'react'
import { compose } from 'redux'
import { Paper, Slider, Grid, Typography, Divider } from '@material-ui/core'
import { Line } from 'react-chartjs-2'
import ContribSlider from './sliderComponents/contribPercentSlider'
import SalarySlider from './sliderComponents/annualSalarySlider'
import AnnualSalaryIncreaseSlider from './sliderComponents/annualSalaryIncreaseSlider'
import CurrentAgeSlider from './sliderComponents/startAgeSlider'
import RetirementAgeSlider from './sliderComponents/retirementAgeSlider'
import CurrentBalanceSlider from './sliderComponents/currentBalanceSlider'
import RateOfReturnSlider from './sliderComponents/rateOfReturnSlider'
import EmployerMatchSlider from './sliderComponents/employerMatchSlider'
import EmployerMatchCapSlider from './sliderComponents/employerMatchCapSlider'
import BarChart from './chart'
import createNoMatchDatapoints from './createNoMatchDatapoints'
import createMatchDatapoints from './createMatchDatapoints'
import createLabels from './createLabels'


class Display extends React.Component {

    constructor(props) {
        super(props)
        this.classes = props.classes
        this.state = {
            contribPercent: 20,
            annualSalary: 70000,
            annualRaise: 5,
            currentAge: 27,
            retirementAge: 62,
            currentBalance: 50000,
            annualRateOfReturn: 7,
            riskTolerance: 1,
            employerMatch: 100,
            employerMatchCap: 6
        }

        this.handleContribSliderChange = this.handleContribSliderChange.bind(this)
        this.handleAnnualSalarySliderChange = this.handleAnnualSalarySliderChange.bind(this)
        this.handleAnnualRaiseSliderChange = this.handleAnnualRaiseSliderChange.bind(this)
        this.handleCurrentAgeSlider = this.handleCurrentAgeSlider.bind(this)
        this.handleRetirementAgeSlider = this.handleRetirementAgeSlider.bind(this)
        this.handleCurrentBalanceSlider = this.handleCurrentBalanceSlider.bind(this)
        this.handleRateOfReturnSlider = this.handleRateOfReturnSlider.bind(this)
        this.handleEmployerMatchSlider = this.handleEmployerMatchSlider.bind(this)
        this.handleEmployerMatchCapSlider = this.handleEmployerMatchCapSlider.bind(this)
    }

    handleContribSliderChange(val) {
        this.setState({...this.state, contribPercent: val})
    }

    handleAnnualSalarySliderChange(val) {
        this.setState({...this.state, annualSalary: val})
    }

    handleAnnualRaiseSliderChange(val) {
        this.setState({...this.state, annualRaise: val})
    }

    handleCurrentAgeSlider(val) {
        this.setState({...this.state, currentAge: val})
    }

    handleCurrentAgeSlider(val) {
        this.setState({...this.state, currentAge: val})
    }

    handleRetirementAgeSlider(val) {
        this.setState({...this.state, retirementAge: val})
    }

    handleCurrentBalanceSlider(val) {
        this.setState({...this.state, currentBalance: val})
    }

    handleRateOfReturnSlider(val) {
        this.setState({...this.state, annualRateOfReturn: val})
    }

    handleEmployerMatchSlider(val) {
        this.setState({...this.state, employerMatch: val})
    }

    handleEmployerMatchCapSlider(val) {
        console.log(this.state)
        this.setState({...this.state, employerMatchCap: val})
    }

    render() {

        createNoMatchDatapoints(this.state)

        return (
                <Paper style={{marginTop: '5%', marginBottom: '5%', marginLeft: '10%', marginRight: '10%'}}>
                    <Grid container>
                        <Grid item xs={5} style={{padding: '25px'}}>
                            <Typography variant="h5" gutterBottom>
                                401(k) Employee Savings Plan
                            </Typography>
                            <ContribSlider slide={this.handleContribSliderChange}/>
                            <SalarySlider slide={this.handleAnnualSalarySliderChange}/>
                            <AnnualSalaryIncreaseSlider slide={this.handleAnnualRaiseSliderChange}/>
                            <CurrentAgeSlider slide={this.handleCurrentAgeSlider}/>
                            <RetirementAgeSlider slide={this.handleRetirementAgeSlider}/>
                            <CurrentBalanceSlider slide={this.handleCurrentBalanceSlider}/>
                            <RateOfReturnSlider slide={this.handleRateOfReturnSlider}/>
                            <Divider style={{marginTop: '20px', marginBottom:'20px'}}/>
                            <Typography variant="h5" gutterBottom>
                                401(k) Employer Match
                            </Typography>
                            <EmployerMatchSlider slide={this.handleEmployerMatchSlider}/>
                            <EmployerMatchCapSlider slide={this.handleEmployerMatchCapSlider}/>
                        </Grid>
                        <Grid item xs={7}>
                            <BarChart matchData={createMatchDatapoints(this.state)} noMatchData={createNoMatchDatapoints(this.state)} labels={createLabels(this.state)}/>
                        </Grid>
                    </Grid>
                </Paper>
        )
    }


}

export default Display