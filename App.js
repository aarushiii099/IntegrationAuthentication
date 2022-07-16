//this file is example of functional component i.e doing react by sending props to functional component(App() is functional component)index.js is sending props
// import { useState } from "react"
import TextField from "@mui/material/TextField"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function App(props){

  // //return is render basically,i.e something responsible for dispalying html continously
  // const[role,setRole]=useState("admin")//creates Role state and sets Role to "admin"
  // const updateRole=(e)=>{
  //   e.preventDefault();
  //   setRole("trainee");
  // }//when state changes,react automatically renders again

  return(
    
    <div>
    <TextField id="filled-basic" label="Filled" variant="filled" />
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          some content
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    { props.studentdata.map((item)=>
    (
      <div>
        <h2>{item.fname}</h2>
        <h3>{item.email}</h3>
      </div>
     
    ))}

    </div>
    
    
    
  )
}
export default App


//material ui: https://mui.com/material-ui/getting-started/installation/

// run first command of above link in crareact only for material UI styling in our react
