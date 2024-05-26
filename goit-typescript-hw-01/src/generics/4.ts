type User1 = {
    name: string;
    surname: string;
    email: string;
    password: string;
  }

  function createOrUpdateUser(initialValues: Partial< User1>): User1 {
  const DefaultUser: User1 = {
    name: '',
    surname: '',
    email: '', 
    password: ''
  }
  return {...DefaultUser, ...initialValues}
  }
  
const NewUser = createOrUpdateUser({
    email: 'user@mail.com', 
    password: 'password123' 
})

console.log(NewUser);