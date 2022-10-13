import "./App.css";
import Comment from "./components/Comment";
import CommentOne from "./components/CommentOne";
const comment = [
  {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/62/62",
    },
  },
  {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/64/64",
    },
  },
  {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/64/64",
    },
  },
];

function App() {
  return (
    <div className="App">
      <div className="container">
        {comment.map((el) => {
          return <Comment key = {el.id} img={el.author.avatarUrl} name={el.author.name} />;
        })}
      </div>
      <div className="container">
        {comment.map((el) => {
          return (
            <CommentOne key = {el.id} text={el.text} date={el.date.toLocaleDateString()} />
          );
        })}
      </div>

      
    </div>
  );
}

export default App;
