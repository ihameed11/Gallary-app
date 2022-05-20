import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CustomizedCard(props) {
    
    console.log(props)
  return (
    <Card sx={{ maxWidth: 345,margin:'20px 10px' }}>
      <CardMedia
       component="img"
        height="200" 
        image={props.urls.small}
         alt={"green"}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {props.alt_description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.tags[0]?.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"onClick={()=>window.open(props.urls.full)}>full resolution </Button>
        <Button size="small" onClick={()=>window.open(`https://unsplash.com/@${props.user.username}`)}>Learn More</Button>
      </CardActions>
    </Card>
  );
}
