import { html } from 'lit-html'
import { component } from 'haunted'

const App = () => html`
    <style>
        .container {
            font-family: sans-serif;
            margin: 0 auto;
            max-width: 480px;
        }
    </style>
    
    <main class="container">
        <wc-title title="Todo List"></wc-title>
        <wc-todo></wc-todo>
    </main>
`

customElements.define('wc-app', component(App))
