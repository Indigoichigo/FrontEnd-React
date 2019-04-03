import React from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

// write either one(⚆) to use context

// // ⚆ use this.context, can only use get single various or single object
// // write either one(⚈) to trigger context in this component
// class Button extends React.Component {
//   // ⚈MUST be 'contextType'
//   static contextType = LanguageContext;

//   render() {
//     // this.context --> get context text
//     const submitText = this.context === 'english' ? 'Submit' : 'Voorleggen';
//     return <button className="ui button primary">{submitText}</button>;
//   }
// }

// // ⚈class name + contextType
// // Button.contextType = LanguageContext;

// ⚆ use consumer, don't need to write contextType, cant use for multiple contexts
class Button extends React.Component {
  // ⚈MUST be 'contextType'
  renderSubmit(language) {
    return language === 'english' ? 'Submit' : 'Vooleggen';
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        {/* only a child and it must be function, it will automaticlly invoke */}
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
