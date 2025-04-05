const registerUser = ({
  data,
}: {
  data: { email: string; password: string };
}) => {
  fetch("http://localhost:3000/register", {
    method: "POST",
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

const loginUser = (data: { email: string; password: string }) => {
  fetch("http://localhost:3000/login", {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err.message);
      return err;
    });
};

export { loginUser, registerUser };
