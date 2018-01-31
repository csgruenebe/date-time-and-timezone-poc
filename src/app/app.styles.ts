export const colors = {
  primary: '#407F7F',
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
];
