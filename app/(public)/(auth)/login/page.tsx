import UserLoginContainer from "@/sections/user/containers/UserLoginContainer"
import UserLoginForm from "@/sections/user/components/UserLoginForm"

const page = () => {
  return (
    <UserLoginContainer>
      <UserLoginForm/>
    </UserLoginContainer>
  )
}

export default page