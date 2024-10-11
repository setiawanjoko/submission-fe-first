class AppLogo extends HTMLElement {
    _shadowRoot = null

    constructor() {
        super()

        this._shadowRoot = this.attachShadow({mode: 'closed'})
    }

    renderStyle() {
        let style = document.createElement('style')
        style.textContent = `
            header > * {
                color: white;
                font-family: "Caveat", sans-serif;
            }

            header h2 {
                font-size: 2rem;
            }

            @media screen and (min-width: 768px) {
                header {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        `
        
        return style
    }

    renderHeader() {
        let header = document.createElement('header')
        let logo = document.createElement('div')
        logo.classList.add('logo')
        let appName = document.createElement('h2')
        appName.textContent = "Notes App"

        logo.appendChild(appName)
        header.appendChild(logo)

        return header
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this._shadowRoot.appendChild(this.renderStyle())
        this._shadowRoot.appendChild(this.renderHeader())
        // this._shadowRoot.innerHTML += `
        // <header>
        //     <div class="logo">
        //         <h2>Notes App</h2>
        //     </div>
        // </header>
        // `
    }
}

customElements.define('app-logo', AppLogo)