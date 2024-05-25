type UserType = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<UserType>): UserType {
  const defaultUser: UserType = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };

  return { ...defaultUser, ...initialValues };
}

const updatedUser = createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
