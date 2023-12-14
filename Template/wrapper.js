import { base } from "../src/CSS/base.js";
import { LitElement, css, html } from "../src/JS/Lit.js";

import "./Navbar.js";

class Wrapper extends LitElement {
  static styles = [
    base,
    css`
      .container {
        width: 100%;
        height: 100vh;
        /* background-color: red; */
        display: flex;
      }

      .title_container {
        font-family: "Montserrat";
        font-size: 2em;
        height: 5em;
        display: flex;
        align-items: center;
        color: #554a27;
      }

      .content {
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        overflow: auto;
        flex: 1;
      }

      .view-content {
        position: relative;
        flex: 1;
        display: flex;
        flex-direction: column;
        padding-bottom: 20px;
        overflow: auto;
        gap: 20px;
      }

      .view-content:before {
        content: "";
        width: 100%;
        height: 15px;
        z-index: 1;

        position: fixed;
        background: linear-gradient(0deg, #ffffff00, white);
      }
    `,
  ];

  static properties = {
    title: { type: String },
    data: { type: Object },
    route: { type: String },
    URL_BASE: { type: String },
    loading: { type: Boolean },
  };

  async doPetition({ method, url, data }) {
    this.loading = true;

    let { data: res } = await axios({
      method: method,
      url: `${window.url}/api${url}`,
      headers: {
        Authorization: `${this.data.token}`,
      },
      data: data,
    }).catch((e) => {});
    this.loading = false;
    return res;
  }

  constructor() {
    super();
    if(!window.localStorage.getItem("usuario")) window.location.href = "../../";
    this.data = JSON.parse(window.localStorage.getItem("usuario"));

    window.doPetition = this.doPetition;
    window.context = this;

    this.loading = true;
  }

  render() {
    return html`
      <div class="container">
        <mypetsos-navbar
          route=${this.route}
          .data=${this.data}
        ></mypetsos-navbar>

        <div class="content">
          <div class="title_container">
            <h1>${this.title}</h1>
          </div>

          <div class="view-content">
            ${this.loading ? "Cargando" : html`<slot></slot> `}
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("mypetsos-wrapper", Wrapper);
