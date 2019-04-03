import React from 'react';
import LanguageContext from '../context/LanguageContext';

class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const nameText = this.context.language === 'english' ? 'Name' : 'Naam';

    return (
      <div className="ui form">
        <label>{nameText}</label>
        <input />
      </div>
    );
  }
}

export default Field;
