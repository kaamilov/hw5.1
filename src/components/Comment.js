import "./Comment.css";

function Comment(props) {
  return (
    
      <div>
        <div  className="wrapper">
        <img src={props.img} />
        <div>{props.name}</div>
      </div>
      </div>
    
  );
}
export default Comment;



