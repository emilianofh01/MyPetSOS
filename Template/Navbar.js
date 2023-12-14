import { base } from "../src/CSS/base.js";
import { LitElement, css, html } from "../src/JS/Lit.js";

class Navbar extends LitElement {
  static styles = [
    base,
    css`
      .navbar {
        /* background-color: blue; */
        width: 12em;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        padding: 40px 5px;
      }

      .navbar > * {
        width: 5em;
      }

      .navOptions {
        flex: 0.5;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
      }

      .navOptions > * {
        width: 3.2em;
      }

      .navoptions > * {
        width: min-content;
      }

      .navOptions > a svg {
        fill: #adadad;
      }

      .navOptions > a.active svg {
        fill: #222222;
      }

      .profile_container {
        position: relative;
        aspect-ratio: 1/1;
        border-radius: 50%;
        cursor: pointer;
        border: 2px solid var(--primary-color);
        background-image: url(../../src/img/corgi.jpg);
        background-size: cover;
      }

      .profile_container div {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0px;
        left: 35px;
        border-radius: 50%;
        width: 20px;
        height: 20px;

        background: white;
      }

      .profile_container div::after {
        content: "";
        position: absolute;
        width: 65%;
        height: 65%;
        border-radius: 50%;
        background-color: #f55d73;
      }
    `,
  ];

  static properties = {
    data: { type: Object },
    route: { type: String },
  };

  logOut() {
    Swal.fire({
      title: "¿Deseas cerrar sesión?",
      text: "Recuerda que puedes volver cuando quieras :)",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, deseo cerrar sesión",
      cancelButtonText: "No"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: '¡Hasta luego!',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          window.localStorage.clear();
          window.location.href = "../../"
        })
      }
    });
  }

  render() {
    console.log(window.location.hostname);
    return html`
      <nav class="navbar">
        <svg
          class=""
          viewBox="0 0 928 853"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="403.422"
            cy="208.395"
            rx="92.3342"
            ry="121.546"
            transform="rotate(3.09604 403.422 208.395)"
            fill="#554A27"
          />
          <ellipse
            cx="212.813"
            cy="317.13"
            rx="85.5797"
            ry="108.848"
            transform="rotate(-5.45846 212.813 317.13)"
            fill="#554A27"
          />
          <ellipse
            cx="610.46"
            cy="260.069"
            rx="90.7513"
            ry="120.471"
            transform="rotate(28.7624 610.46 260.069)"
            fill="#554A27"
          />
          <ellipse
            cx="725.247"
            cy="452.904"
            rx="86.449"
            ry="110.217"
            transform="rotate(45.4513 725.247 452.904)"
            fill="#554A27"
          />
          <path
            d="M468.306 367.149C542.081 388.183 543.676 454.478 576.031 524.036C608.114 593.012 671.265 641.71 636.303 709.272C612.133 755.98 590.459 780.812 538.217 786.858C472.881 794.418 434.302 734.653 370.72 717.822C307.998 701.218 243.911 735.186 193.399 694.464C154.292 662.937 153.219 630.786 156.262 580.646C160.783 506.165 233.673 492.026 294.317 448.551C357.755 403.072 393.242 345.747 468.306 367.149Z"
            fill="#554A27"
          />
        </svg>

        <div class="navOptions">
          <a
            class=${this.route == "lostPets" ? "active" : ""}
            href="../lostpets"
            ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM160.9 286.2c4.8 1.2 9.9 1.8 15.1 1.8c35.3 0 64-28.7 64-64V160h44.2c12.1 0 23.2 6.8 28.6 17.7L320 192h64c8.8 0 16 7.2 16 16v32c0 44.2-35.8 80-80 80H272v50.7c0 7.3-5.9 13.3-13.3 13.3c-1.8 0-3.6-.4-5.2-1.1l-98.7-42.3c-6.6-2.8-10.8-9.3-10.8-16.4c0-2.8 .6-5.5 1.9-8l15-30zM160 160h40 8v32 32c0 17.7-14.3 32-32 32s-32-14.3-32-32V176c0-8.8 7.2-16 16-16zm128 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"
              /></svg
          ></a>
          <a
            class=${this.route == "petForAdoption" ? "active" : ""}
            href="../petForAdoption"
            ><svg
              viewBox="0 0 755 671"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M503.386 306.752C505.591 308.936 506.829 311.899 506.829 314.988C506.829 318.076 505.591 321.039 503.386 323.223C501.182 325.407 498.192 326.635 495.074 326.635C491.956 326.635 488.966 325.407 486.762 323.223C484.557 321.039 483.319 318.076 483.319 314.988C483.319 311.899 484.557 308.936 486.762 306.752C488.966 304.568 491.956 303.34 495.074 303.34C498.192 303.34 501.182 304.568 503.386 306.752Z"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M712.854 376.84C735.139 376.84 754.802 358.365 754.802 334.779V334.648C756.113 322.856 750.869 312.373 740.382 303.201L671.168 242.404V83.8586C671.168 60.6665 652.423 41.9293 629.22 41.9293H587.272C564.07 41.9293 545.324 60.6665 545.324 83.8586V131.946L405.585 9.17204C397.72 2.62058 387.233 0 378.056 0C368.88 0 358.393 1.31029 349.217 10.4823L13.1088 303.332C3.93263 312.504 0 322.987 0 334.779C0 358.496 18.3523 376.84 41.948 376.84H84.0271V587.141C84.0271 633.395 121.649 671 167.923 671H587.928C634.464 671 672.086 633.264 671.824 586.748L670.906 376.84H712.854ZM410.362 271.166L393.391 372.131L475.678 418.719L479.425 396.517H530.34C562.814 396.517 589.116 370.457 589.116 338.282V320.811C589.116 311.129 581.255 303.34 571.483 303.34H530.34L517.115 290.31C510.503 283.759 501.539 280.046 492.208 280.046H453.93L441.514 263.668C438.208 259.3 433.065 256.752 427.554 256.752C419.032 256.752 411.758 262.867 410.362 271.166ZM471.563 606.163V443.178L389.129 396.517H237.927C227.127 396.517 217.723 389.237 215.151 378.901L212.286 367.618C209.127 355.097 196.416 347.526 183.779 350.657C171.142 353.787 163.501 366.453 166.661 378.901L169.453 390.184C175.183 412.895 191.788 430.657 212.947 438.592V606.163C212.947 619.048 223.453 629.457 236.458 629.457H259.968C272.972 629.457 283.479 619.048 283.479 606.163V522.305C301.112 531.258 321.096 536.281 342.255 536.281C363.415 536.281 383.399 531.258 401.032 522.305V606.163C401.032 619.048 411.538 629.457 424.542 629.457H448.053C461.057 629.457 471.563 619.048 471.563 606.163Z"
              />
            </svg>
          </a>
          ${this.data.role_id == 1
            ? html`
                <a class=${this.route == "statistics" ? "active" : ""} href="../statistics"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"
                    /></svg
                ></a>
              `
            : ""}

          <a
            class=${this.route == "veterinary" ? "active" : ""}
            href="../veterinary"
            ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M228.3 469.1L47.6 300.4c-4.2-3.9-8.2-8.1-11.9-12.4h87c22.6 0 43-13.6 51.7-34.5l10.5-25.2 49.3 109.5c3.8 8.5 12.1 14 21.4 14.1s17.8-5 22-13.3L320 253.7l1.7 3.4c9.5 19 28.9 31 50.1 31H476.3c-3.7 4.3-7.7 8.5-11.9 12.4L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9zM503.7 240h-132c-3 0-5.8-1.7-7.2-4.4l-23.2-46.3c-4.1-8.1-12.4-13.3-21.5-13.3s-17.4 5.1-21.5 13.3l-41.4 82.8L205.9 158.2c-3.9-8.7-12.7-14.3-22.2-14.1s-18.1 5.9-21.8 14.8l-31.8 76.3c-1.2 3-4.2 4.9-7.4 4.9H16c-2.6 0-5 .4-7.3 1.1C3 225.2 0 208.2 0 190.9v-5.8c0-69.9 50.5-129.5 119.4-141C165 36.5 211.4 51.4 244 84l12 12 12-12c32.6-32.6 79-47.5 124.6-39.9C461.5 55.6 512 115.2 512 185.1v5.8c0 16.9-2.8 33.5-8.3 49.1z"
              /></svg
          ></a>
        </div>

        <div
          style=${this.data.image
            ? `background-image: url(http://${window.location.hostname}:8080${this.data.image})`
            : ""}
          class="profile_container"
          @click=${this.logOut}
        >
          <div></div>
        </div>
      </nav>
    `;
  }
}
customElements.define("mypetsos-navbar", Navbar);
