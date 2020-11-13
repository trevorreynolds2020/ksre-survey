import React from 'react'
import addDirectContact from '../actions/addDirectContact';

const directContacts = function (state = {}, action) {
    switch (action.type) {
      case 'DIRECT-CONTACT':
          return state;
      default:
        return state;
    }
  };

  export default directContacts;