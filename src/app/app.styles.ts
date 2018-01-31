export const colors = {
  primary: '#268383',
  error: '#C60000',
};
export const sharedStyles = [
  `.sharedField {
    outline:0;
    border:0;
    border-bottom:2px solid ${colors.primary};
    background-color:#fafafa;
    padding:5px 10px 5px 10px;
    font-size:1rem;
    width:400px;
    font-family: 'Roboto', sans-serif;
    }`,
  `.sharedFieldHasError{
    border-bottom:2px solid ${colors.error};
  }`,
  `.sharedSelect {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0;
    color:#333;
    outline:0;
    border:0;
    border-bottom:2px solid ${colors.primary};
    padding:5px 10px 5px 10px;
    font-size:1rem;
    width:420px;
    background-image: url('./assets/select-field-dropdown-icon.svg');
    background-color:#fafafa;
    background-position: right center;
    background-repeat: no-repeat;
  }`,
  `.sharedSelecthasError {
    border-bottom:2px solid ${colors.error};
  }`,
  /* MY DATEPICKER OVERRIDES */
  `
  .mydp {
    border:0 !important;
    border-radius:0 !important;
  }
  .inputnoteditable {
    border:0 !important;
    font-size:1rem !important;
    font-family: 'Roboto', sans-serif !important;
    padding:5px 10px 5px 10px  !important;
    background-color:#fafafa !important;
  }
  .selectiongroup {
    border:0 !important;
    border-radius:0 !important;
    border-bottom:2px solid ${colors.primary} !important;
  }`,
  /* BDD STYLES */
  `.bdd-feature-label {
    font-size:1.5rem;
    color: ${colors.primary};
    margin-right:5px;
  }`,
  `.bdd-feature-text {
    font-size:1.5rem;
    color: #333;
  }`,
  `.bdd-spacer {
    margin-top:20px !important;
  }`,
  `.bdd-notes {
    margin:0;
    margin-top:10px;
  }
  .bdd-notes li {
    line-height:1.1rem;
    font-size:0.8rem;
    color:#777;
    padding-bottom:5px;
  }`,
  `.bdd-notes a {
    color:#777;
  }`,
  `.bdd-scenario-label {
    color: #7D1515;
    font-weight:bold;
    font-size:1.2rem;
    margin-left:10px;
  }`,
  `.bdd-scenario-text {
    font-size:1.2rem;
    margin-left:5px;
  }`,
  `.bdd-code {
    font-family: 'Rboto Mono', monospace;
    background-color:#f4f4f4;
    font-size:0.9rem;
  }`,
  `.bdd-row {
    display:flex;
    margin-top:5px;
  }`,
  `.bdd-given-label, .bdd-and-label, .bdd-when-label, .bdd-then-label {
    font-weight:bold;
    text-align:right;
    width:89px;
    min-width:89px;
    margin-right: 5px;
  }`,
  `.bdd-given-label { color: #268383; }`,
  `.bdd-and-label { color: #9CCC3C; }`,
  `.bdd-when-label { color: #DB8640; }`,
  `.bdd-then-label { color: #DB4040; }`,
  `.bdd-given-text, .bdd-and-text, .bdd-when-text, .bdd-then-text {
    color: #333;
  }`,
];
