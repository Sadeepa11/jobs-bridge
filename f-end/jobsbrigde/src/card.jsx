import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

export default function MultiActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }} className={props.className}>
      <CardActionArea>
        <CardMedia
          component="img"
          style={{height:"20vh"}}
          image={props.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {props.key1}:{props.value1}
            <br />
            {props.key2}:{props.value2}
            <br />
            {props.key2}:{props.value3}
            <br />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {props.buttonText}
        </Button>
      </CardActions>
    </Card>
  );
}
