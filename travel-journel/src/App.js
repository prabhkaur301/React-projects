import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import data from "./data";

export default function App(){
    const card=data.map((detail)=>{
        return (
        <Card 
        key={detail.id}
        item={detail} 
        />)
    }
        )
   return( 
       <>
   <Navbar /> 
   <div className="main-container">
   {card}
   </div>
   </>
   );
}