import React,{useState} from "react";
import {Box,Grid,Typography,Button} from '@mui/material'
import { Autocomplete,TextField } from 'mui-rff';
import { Form } from 'react-final-form';
import { makeValidate,makeRequired } from 'mui-rff';
import * as Yup from 'yup';
import axios from "axios";
import AuthService from "../services/AuthService";
function FinalForm() {
    return <MyForm initialValues={{ hello: 'hello world' }} />;
  }

  const schema = Yup.object({
	username: Yup.string().required(),
	email:Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
});
const validate = makeValidate(schema);
const required = makeRequired(schema);
  
const MyForm=(props)=>{
    const [submittedValues, setSubmittedValues] = useState({});
    const [imageFile,setImage]=useState("")
    const initialValues= {
		username: '',
		email: ''
	};
    const onSubmit=async(values)=>{
        setSubmittedValues(values)
        let res=await AuthService.ImageGet();
        console.log("res",res.data.response.body)
        setImage(res.data.response.body)
        console.log(values)
    }
    const formFields=[
        <TextField
			label="username"
			name="username"
			required={true}
			inputProps={{
				autoComplete: 'name',
			}}
            sx={{mb:2}}
		/>,
        <TextField
			label="email"
			name="email"
			required={true}
			inputProps={{
				autoComplete: 'name',
			}}
            sx={{mb:2}}
		/>,
		
    ]
    return (
        <Box sx={{mt:13}}>
            <Form
            onSubmit={onSubmit}
            initialValues={submittedValues ? submittedValues : initialValues}
            validate={validate}
            render={({ handleSubmit, values }) => (
                <Grid container>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                    <form onSubmit={handleSubmit} noValidate>
                    {formFields.map((field, index) => (
										<Grid item key={index}>
											{field}
										</Grid>
									))}
                  <Box>
                      <button>submit</button>
                  </Box>
                  <img src={imageFile} alt="images" style={{width:"200px",height:"200px"}}/>
                </form>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>
              )}
            />
        </Box>
    )
}

export default FinalForm