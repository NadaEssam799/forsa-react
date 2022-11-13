import classes from "../../styles/header.module.css";
import Image from "next/image";
import Script from "next/script";
function HeaderComponent() {
  return (
    <div className={classes.navbar}>
      <div className={classes.container}>
        <nav className="navbar navbar-expand-lg navbar-dark ">
          <Image
            src={require("../../images/apple.png")}
            width={41}
            height={67}
          />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className={classes.ul_list}>
              <li className={classes.list_item}>
                <a className="nav-link" href="#">
                  Mac
                </a>
              </li>
              <li className={classes.list_item}>
                <a className="nav-link" href="#">
                  iPad
                </a>
              </li>
              <li className={classes.list_item}>
                <a className="nav-link disabled" href="#">
                  iPhone
                </a>
              </li>
              <li className={classes.list_item}>
                <a href="#">Watch</a>
              </li>
              <li className={classes.list_item}>
                <a href="#">TV</a>
              </li>
              <li className={classes.list_item}>
                <a href="#">Accessories</a>
              </li>
              <li className={classes.list_item}>
                <a href="#">Offers</a>
              </li>
              <li className={classes.list_item}>
                <a href="#">Support</a>
              </li>
              <li className={classes.list_item}>
                <a href="#">Services</a>
              </li>
              <li className={classes.list_item}>
                <a href="#">Locations</a>
              </li>
              <li className={classes.list_item}>
                <a href="#">
                  <Image
                    src={require("../../images/search.png")}
                    width={20}
                    height={20}
                  />
                </a>
              </li>
              <li className={classes.list_item}>
                <a href="#">
                  <Image
                    src={require("../../images/profile.png")}
                    width={20}
                    height={20}
                  />
                </a>
              </li>
              <li className={classes.list_item}>
                <a href="#">
                  <Image
                    src={require("../../images/bag.png")}
                    width={20}
                    height={20}
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" />
    </div>
  );
}

export default HeaderComponent;
