import { Box, Grid, IconButton, TextField, Tooltip } from '@mui/material';
import { Colors } from '../../Design/Colors/Colors';
import { getPxFromPercentOfWindowHeight, getPxFromPercentOfWindowWidth } from '../../Design/Sizing/getPxFromPercentOfWindow';
import { Remove } from '@mui/icons-material';

export const SubtractTimeModal = (parent) => {
    const width = getPxFromPercentOfWindowWidth(parent, 25);
    const height = getPxFromPercentOfWindowHeight(parent, 25);
    const smallButtonPadding = "5px";
    const smallWidth = getPxFromPercentOfWindowWidth(parent, 15);

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        overflow: 'auto',
        maxHeight:  height,
        minHeight: height, 
        minWidth: width, 
        maxWidth: width,
    };

    var timeToSubtract = {
        rounds: 0,
        minutes: 0,
        hours: 0,
        days: 0,
        years: 0,
    };

    return(
        <Box border="4px outset" borderRadius="5px" borderColor={Colors.black} sx={modalStyle} p="5px">
            <Box display="flex" justifyContent="center" style={{ fontSize: 20 }}>
                Subtract time:
            </Box>
            <br></br>
            <Box display="block" justifyContent="center" alignItems="center">
                <Grid container justifyContent="center" alignItems="center">
                    <Box display="flex" justifyContent="center">
                        <Box m={smallButtonPadding} sx={{ maxWidth: smallWidth}}>
                            <Tooltip title={`1 round = 6 seconds`}>
                                <TextField
                                    type="number"
                                    size="small"
                                    color={Colors.timeColor}
                                    defaultValue={0}
                                    label="Rounds"
                                    onChange={(rounds) => {
                                        const round = rounds.target.value;
                                        if (round.length > 0) {
                                            timeToSubtract.rounds = round;
                                        }
                                    }}
                                />
                            </Tooltip>
                        </Box>
                        <Box m={smallButtonPadding} sx={{ maxWidth: smallWidth}}>
                            <TextField
                                type="number"
                                size="small"
                                color={Colors.timeColor}
                                defaultValue={0}
                                label="Minutes"
                                onChange={(minutes) => {
                                    const minute = minutes.target.value;
                                    if (minute.length > 0) {
                                        timeToSubtract.minutes = minute;
                                    }
                                }}
                            />
                        </Box>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box m={smallButtonPadding} sx={{ maxWidth: smallWidth}}>
                            <TextField
                                type="number"
                                size="small"
                                color={Colors.timeColor}
                                defaultValue={0}
                                label="Hours"
                                onChange={(hours) => {
                                    const hour = hours.target.value;
                                    if (hour.length > 0) {
                                        timeToSubtract.hours = hour;
                                    }
                                }}
                            />
                        </Box>
                        <Box m={smallButtonPadding} sx={{ maxWidth: smallWidth}}>
                            <TextField
                                type="number"
                                size="small"
                                color={Colors.timeColor}
                                defaultValue={0}
                                label="Days"
                                onChange={(days) => {
                                    const day = days.target.value;
                                    if (day.length > 0) {
                                        timeToSubtract.days = day;
                                    }
                                }}
                            />
                        </Box>
                    </Box>
                    <Box m={smallButtonPadding} sx={{ maxWidth: smallWidth}}>
                        <TextField
                            type="number"
                            size="small"
                            color={Colors.timeColor}
                            defaultValue={0}
                            label="Years"
                            onChange={(years) => {
                                const year = years.target.value;
                                if (year.length > 0) {
                                    timeToSubtract.years = year;
                                }
                            }}
                        />
                    </Box>
                </Grid>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Tooltip title={`Subract time`}>
                        <IconButton 
                            onClick={() => { 
                                parent.subtractTime(timeToSubtract);
                            }}
                            sx={{ color: Colors.timeColor2 }}
                        >
                            <Remove/>
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>
        </Box>
    );
};