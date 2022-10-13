
import "./CommentOne.css"
function CommentOne(props){
    return(
        <div  className="conteiner">
           
      <div>{props.text}</div>
      <div>{props.date}</div>
        </div>
        
    ) 
        
        
}
export default CommentOne;
