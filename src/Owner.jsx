import Layout from "./Layout";
import pic from './image/pic.png';
import './Style.css';
const Owner = () => {
    
    return(
        <Layout>
            <div className="owner">
            <h1>40_Sasipatr(Boat/โบ้ท)-GroupJ-JSD#4</h1>
            <img width="700px" src={pic}/>
            <h2>Short Biography:</h2>
            <content>
            <p>
            Hello!! my name is Sasipatr Siripairoj, my nickname is Boat.My friends and family like to called me "BoBo".I graduated with a bachelor's degree in engineering and pursued a master's degree in management major: marketing. Additionally, I have become interested in software development because technology plays an increasingly important role in our daily lives. I would like to learn and practice programming skills until I am able to create programs on my own. At least, I would like to write programs for everyone in my family and friends to make their life easier and more convenient.
            </p>
            </content>
            </div>
        </Layout> 
    );
 
 }
 
 export default Owner