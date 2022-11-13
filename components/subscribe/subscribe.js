import classes from "../../styles/subscribe.module.css"; 
 
 function SubscribeComponent(){
    return(
            <div className={classes.subscribe}>
                 <div className={classes.input}>
                   <h4>Subscribe our newsletter to be notified when it’ll be live.</h4>
                   <div className={classes.email}>
                    <input type="email" placeholder="Email Address" />
                    <button>Subscribe</button> 
                   </div>
                 </div>
            </div>
            
    );
 }


 export default SubscribeComponent;
