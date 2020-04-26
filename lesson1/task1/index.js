const rootElement = document.querySelector('#root');

// eslint-disable-next-line no-undef
const greetingElem = React.createElement(
    'div',
    { className: 'greeting' },
    'Hello, React!'
);

// eslint-disable-next-line no-undef
ReactDOM.render(greetingElem, rootElement)