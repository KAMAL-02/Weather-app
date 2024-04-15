import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


const InfoBox = ({info}) => {

    const INIT_IMG = "https://plus.unsplash.com/premium_photo-1710248799611-96aa6db855b9?q=80&w=1506&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const COLD_IMG = "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_IMG = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_IMG = "https://images.unsplash.com/photo-1620385019253-b051a26048ce?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


  return (
    <div className='infoBox'>
        <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 85 ? RAIN_IMG : info.temp > 15 ? HOT_IMG : COLD_IMG}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='cityName'>
            {info.city} {info.humidity > 85 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Max Temp = {info.maxTemp}&deg;C</p>
          <p>Min Temp = {info.minTemp}&deg;C</p>
          <p>Weather :  <i>{info.weather}</i></p>
        </Typography>
      </CardContent>
    </Card>
    </div>

    </div>
  )
}

export default InfoBox
