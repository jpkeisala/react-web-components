export const injectStyles = (shadowRoot: ShadowRoot) => {
    const style = document.createElement('style');
    style.textContent = `
       @import url('/src/App.css');
    `;
    shadowRoot.appendChild(style);
};