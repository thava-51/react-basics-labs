import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import AssignmentTurnedIn from '@mui/icons-material/AssignmentTurnedIn';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

function Task(props){
    return (
    //    <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
    //     <p className="title">{props.title}</p>
    //     <p>Due: {props.deadline}</p>
    //     <p>{props.description}</p>
    //     <p style={{backgroundColor: props.priority=="Low" ? 'green' : props.priority=="Medium" ? 'orange' : 'red'}}>Priority: {props.priority}</p>
    //     <button onClick={props.markDone} className='doneButton'>Done</button>
    //     <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
    //    </div>
    <Grid
        key={props.id}
        size={{ xs: 12, md:4 }}
    >
        <Card
            sx={{
                backgroundColor: props.done ? 'lightgray' : 'lightblue',
                padding: '20px'
            }}
        >
            <CardHeader
                title={props.title}
                sx={{
                    backgroundColor: 'white',
                    borderRadius: '3px',
                    padding: '20px',
                    textAlign: 'center'
                }}
            />
            <CardContent>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'baseline',
                        mb: 2,
                        padding: '20px'
                    }}
                >
                    <Typography
                        component="p"
                        variant="subtitle2"
                        color="text.primary"
                    >
                        Due: {props.deadline}
                    </Typography>
                </Box>
                <Typography
                    component="p"
                    variant="subtitle1"
                    align="center"
                    sx={{ fontStyle: 'italic' }}
                >
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions
                sx={{
                    justifyContent: 'space-between',
                    padding: '20px'
                }}
            >
                <Button
                    variant="contained"
                    size="small"
                    color="success"
                    onClick={props.markDone}
                >
                    <Tooltip title="Mark as done">
                        <IconButton>
                            <AssignmentTurnedIn
                                sx={{ color: 'white'}}
                            />
                        </IconButton>
                    </Tooltip>
                </Button>
                <Button
                    variant="contained"
                    size="small"
                    color="error"
                    onClick={props.deleteTask}
                >
                    <Tooltip title="Delete task">
                        <IconButton
                                sx={{ color: 'white'}}
                        >
                            <DeleteIcon/>
                        </IconButton>
                    </Tooltip>
                    
                </Button>
            </CardActions>
        </Card>
    </Grid>
    )
}

export default Task;