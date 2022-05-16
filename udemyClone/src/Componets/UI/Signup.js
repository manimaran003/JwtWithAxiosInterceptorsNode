import React,{useState} from "react";
import {Box,Typography,Grid,InputBase, Button,Alert,AlertTitle} from '@mui/material'
import { alpha, styled } from '@mui/material/styles';
import AuthService from "../services/AuthService";
import { makeStyles } from '@mui/styles';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import S3 from 'react-aws-s3'
import '../../App.css'
window.Buffer = window.Buffer || require("buffer").Buffer;

const Input = styled('input')({
  display: 'none'
});
const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '/fcfcfb' : '/2b2b2b',
      border: '1px solid /ced4da',
      fontSize: 16,
      width: '100%',
      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));
  const useStyles = makeStyles({
    root: {
      height: '800px'
    },
    alignBox: {
      display: 'flex',
      justifyContent: 'center',
      flexGrow: 2
    },
    btn: {
      width: '100%',
      background: 'lightGreen',
      padding: '10px',
      marginTop: '20px',
      borderRadius: '50px',
      border: '2px solid lightGreen'
    },
    imageShow: {
      width: '150px',
      height: '150px',
      borderRadius: '50px',
      background: '/46b5cc'
    },
    spaceBox: {
      marginTop: '20px',
      paddingRight: '10px'
    },
    camera: {
      position: 'relative',
      top: '110px',
      bottom: '50px',
      left: '20px',
      right: '30px',
      fontSize: '40px',
      color: '/c0e6ee'
    },
    AfterPic: {
      top: '-40px',
      left: '58px',
      color: '/c0e6ee',
      right: '30px',
      bottom: '50px',
      position: 'relative',
      fontSize: '40px'
    }
  });
const Signup=()=>{
  const classes=useStyles()
  const [filename,setfilename]=useState("")
  const [file,setfile]=useState({})
  const[show,setShow]=useState(false)
  const [formErrors,setFormErrors]=useState({})
  const[img,setimg]=useState("")
    const [state,setState]=useState({
        email:"",
        password:""
    })
    const handleChange=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }
    const validate=(values)=>{
      const errors={}
      if(!values.email){
        errors.email="email is required"
      }
      if(!values.password){
        errors.password="password is required"
      }
      return errors;
    }
    const handleInputFileChange=(e)=>{
      console.log("onosde",e.target.files)
      let file=e.target.files[0]
      let filename=e.target.files[0].name
      setfilename(filename)
      setfile(file)
      let reader;
      reader= new FileReader();
      reader.onload = ()=> {
        console.log('inside onload', reader);
        setimg(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        setFormErrors(validate(state))
        if(Object.keys(formErrors).length===0){
          let data={
            email:state.email,
            password:state.password
        }
       let resp= await AuthService.Signup(data)
       
      if(resp){
        setShow(true)
      }
        }
       /*file upload*/
       const config={
         bucketName:process.env.REACT_APP_BUCKET_NAME,
         region:process.env.REACT_APP_REGION,
         accessKeyId:process.env.REACT_APP_ACCESS_ID,
         secretAccessKey:process.env.REACT_APP_ACCESS_KEY,
       }
       const newObject  = {
        'lastModified'     : file.lastModified,
        'lastModifiedDate' : file.lastModifiedDate,
        'name'             : file.name,
        'size'             : file.size,
        'type'             : file.type
     };  
     console.log(newObject)
      let fileJson=JSON.stringify(newObject)
       const ReactS3Client = new S3(config);
         ReactS3Client.uploadFile(file,filename)
         .then((data)=>{
           if(data.status===204){
             console.log("successfully image uploaded to s3 bucket")
           }
         })
         .catch(e=>{console.log(e)})
    }
    return (
    <>
    <Box sx={{mt:20}}>

        <Grid container>
            <Grid item xs={4}>
            </Grid>
            <Grid item xs={4}>
                <Box>
                  {
                    show && (
                      <Alert data-testid="alert_box" severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert>
                    )
                  }
                  {show && <span data-testid="msg">successfully signuped</span>}
                <Typography>signup In to Your Udemy Account</Typography>
                </Box>
                <hr/>
                <Box>
                <Box className={classes.imageShow}>
                    <img alt="img" className={classes.imageShow} src={img} />
                    <label htmlFor="icon-button-file">
                      <Input
                        onChange={(e) => handleInputFileChange(e)}
                        id="icon-button-file"
                        type="file"
                      />
                      <PhotoCamera className={img ? `${classes.AfterPic}` : `${classes.camera}`} />
                    </label>
                  </Box>
                </Box>
                <Grid item xs={12}>  
                    <BootstrapInput fullWidth placeholder="email" aria-label="email" name="email" value={state.email} onChange={handleChange} id="bootstrap-input" sx={{mb:2}}/>
                </Grid>
                <Box>
                  <p data-testid="email_error">{formErrors.email}</p>
                </Box>
                <Grid item xs={12}>  
                    <BootstrapInput fullWidth placeholder="password" aria-label="password" name="password" value={state.password} onChange={handleChange}  id="bootstrap-input" sx={{mb:2}} />
                </Grid>
                <Box>
                  <p data-testid="password_error">{formErrors.password}</p>
                </Box>
                <Grid item xs={12}>  
                   <Button  data-testid="button"  onClick={handleSubmit} fullWidth variant="contained" color="success" >signup</Button>
                </Grid>
               
            </Grid>
            <Grid item xs={4}>
            </Grid>
        </Grid>
       
    </Box>
    </>)
}
export default Signup