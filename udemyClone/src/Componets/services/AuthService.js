import axios from 'axios'
import api from './instance'
import authHeader from './auth-header';
import TokenService from './token.service';
const Signup=async(data)=>{
    try{
        return await axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`,data).then((res)=>{
            if (res.data.token) {
                TokenService.setSignupUser(res.data.token)
            }
            return res.data
        }).catch((err)=>{
          console.log("SIGNUP INSIDE THEN ==>>",err)
        })
    }
    catch(e){
        console.log("SIGNUP OUTSIDE CATCH E==>",e)
    }
}

const login=async(data)=>{
    try{
        return await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`,data).then((res)=>{
            console.log(res.data.message,"postlogin")
            if (res.data.message.token && res.data.message.refreshToken) {
                TokenService.setAccessToken(res.data.message.token)
                TokenService.setRefreshToken(res.data.message.refreshToken)
            }
            return res.data;
        }).catch((err)=>{
            console.log("INISIDE THEN CATCH login==>",err.response.data.error.msg)
            
        })
    }
    catch(e){
        console.log("OUTISDE lOGIN CATCH E==>",e)
    }
}

const getallTours=async()=>{
    try{
        return await api.get("/gettours",{ headers: authHeader() }).then((res)=>{
            return res.data
        })
        .catch((err)=>{
            console.log("INISDE THEN GETTOUR ==>",err)
            return err
        })
    }
    catch(e){
        console.log("OUTSIDE CATCH GETTOUR===>",e)
    }
}

const ImageGet=async()=>{
    try{
        return await axios.get(`${process.env.REACT_APP_API_URL}/auth/getimage`).then((res)=>{
            return res
        }).then((err)=>{
            return err
        })
    }
    catch(err){
        console.log(err)
    }
}
const AuthService={
    login,Signup,getallTours,ImageGet
}

export default AuthService