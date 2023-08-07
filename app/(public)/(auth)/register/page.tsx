import UserRegisterContainer from "@/sections/user/containers/UserRegisterContainer"
import UserRegisterForm from "@/sections/user/components/UserRegisterForm"

const page = () => {
  return (
    <UserRegisterContainer>
      <UserRegisterForm />
    </UserRegisterContainer>
  )
}

export default page