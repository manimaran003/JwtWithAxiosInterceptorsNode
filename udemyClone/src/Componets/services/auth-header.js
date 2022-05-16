import TokenService from "./token.service";
const authHeader=()=>{
    const user = TokenService.getAccessToken()
  if (user) {
    return { 'x-access-token': user};
  } else {
    return {};
  }
}
export default authHeader