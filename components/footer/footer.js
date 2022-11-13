import classes from "../../styles/footer.module.css"; 
import Image from 'next/image';

function FooterComponent(){
    return (
        <footer className={classes.footer}>
          <div class="row">
            <div class="col-2">
                
            </div>
            <div class="col-2">
                <Image src={require('../../images/apple.png')} width={45} height={68}/> 
            </div>
            <div class="col-2">
                <Image src={require('../../images/apple.png')} width={45} height={68}/>
            </div>
            <div class="col-2">
                 <Image src={require('../../images/apple.png')} width={45} height={68}/>
            </div>
            <div class="col-2">
                 <Image src={require('../../images/apple.png')} width={45} height={68}/>
            </div>
            <div class="col-2">

            </div>

          </div>
          <p className={classes.copy}> &copy; Copyright 2022 All rights reserved </p>
        </footer>
    );
}

export default FooterComponent;
