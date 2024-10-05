class AppLogo extends HTMLElement {
    _shadowRoot = null
    _style = null

    constructor() {
        super()

        this._shadowRoot = this.attachShadow({mode: 'open'})
        this._style = document.createElement('style')
    }

    _fillStyle() {
        this._style.textContent = `
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
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this._fillStyle()

        this._shadowRoot.appendChild(this._style)
        this._shadowRoot.innerHTML += `
        <header>
            <div class="logo">
                <h2>Notes App</h2>
            </div>
        </header>
        `
    }
}

customElements.define('app-logo', AppLogo)