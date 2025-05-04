export default function Card(props){
    return(
       <>
       <div className="card">
         <img src={props.img} alt="bag" />
         <h2> {props.title} </h2>
         <h3> {props.color} </h3>
       </div>
       </>
    )
}
   