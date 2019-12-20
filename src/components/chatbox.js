import { LitElement, html, css } from 'lit-element';

export class WorkshopFeChatBox extends LitElement {
  static get properties() {
    return {
      messages: Array,
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        width: 100%;
      }

      .chatbox {
        padding: 20px 30px;
      }

      .chat-entry {
        border-bottom: 1px solid lightgrey;
      }

      .chat-entry .username {
        font-weight: bold;
        font-size: 30px;
        margin: 0;
        margin-top: 10px;
      }

      .chat-entry .message {
        margin: 0;
        font-size: 25px;
        margin-bottom: 10px;
      }
    `;
  }

  render() {
    const { messages } = this;
    return html`
      <div class="chatbox">
        ${messages
          ? messages.map(
              m =>
                html`
                  <div class="chat-entry">
                    <p class="username">${m.username}</p>
                    <p class="message">${m.message}</p>
                  </div>
                `,
            )
          : ''}
      </div>
    `;
  }
}

window.customElements.define('workshop-fe-chatbox', WorkshopFeChatBox);
