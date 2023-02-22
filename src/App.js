import { React, useState } from "react";
import "./style.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const submitHandler = () => {
    if (username.length >= 2 && description.length > 10) {
      const obj = {
        username: username,
        email: email,
        description: description,
      };
      setUsers([...users, obj]);
      setDescription("");
      setEmail("");
      setUsername("");
    } else
      alert(
        "username can not be less than 2 and description are can not be less than 10 "
      );
  };

  const deletHandler = (index) => {
    const newArray = users.filter((curE, i) => i !== index);
    setUsers(newArray);
  };
  const updateHandler = (index) => {
    //  console.log(users[index])

    if (true) {
      setEmail(users[index].email);
      setDescription(users[index].description);
      setUsername(users[index].username);
    }
    if (true) {
      const newA = users.filter((curE, i) => i !== index);
      setUsers(newA);
    }

    // index
    // console.log(users[index])
    // setDescription(...description)
  };
  const allDelet = () => {
    setUsers([]);
  };

  return (
    <>
      <div className="main-container">
        <nav className="nav">
          <span>Todo App</span>
        </nav>

        <div className="container">
          <div className="main-form">
            <label htmlFor="Username">Username</label>
            <input
              value={username}
              type="text"
              id="Username"
              onChange={(event) => setUsername(event.target.value)}
            />
            <label htmlFor="Email">Email</label>
            <input
              value={email}
              type="email"
              id="Email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="Description">Description</label>

            <textarea
              rows={5}
              type="text"
              id="Description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
            {/* <label htmlFor="Password">Password</label>
            <input
              value={password}
              type="password"
              id="Password"
              onChange={(event) => setPassword(event.target.value)}
            /> */}
            <input id="btn" type="submit" onClick={() => submitHandler()} />
            <button id="btndlt" placeholder="" onClick={() => allDelet()}>
              Delete All Card
            </button>
          </div>

          <div className="content">
            {users.map((cur, index) => (
              <div key={index} className="card">
                <div className="h3">
                  {cur.username}
                  <button className="dltbtn" onClick={() => deletHandler(index)}>
                    <i class="fa-solid fa-trash"></i>
                  </button>
                  <button className="upbtn" onClick={() => updateHandler(index)}>
                    <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                </div>
                <hr className="hr1" />
                <div className=""><p>{cur.description} </p></div>
                <hr className="hr2 " />

                <span>{cur.email}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
