import _ from 'lodash';

export const handleResponse = (response) => {
    let handled = {
        type: 'unknown', // unknown|error|success 
        status: response.status,
        message: null,
        errors: []
    };

    if (_.has(response, 'data.message')) {
        handled.message = response.data.message;
    }

    if (_.has(response, 'data.data')) {
        handled.data = response.data.data;
    }

    if (response.status >= 400 && response.status < 512) {
        handled.type = 'error';

        if (response.status === 422) {
            if (_.has(response, 'data.errors')) {
              let responseErrors = response.data.errors;
              Object.keys(responseErrors).forEach((key, index) => {
                if (key.includes('.')) {
                  const temp = key.substring(0, key.indexOf('.'));
                  if (!responseErrors[temp]) {
                    responseErrors[temp] = [];
                  }
                  responseErrors[temp].push(responseErrors[key][0]);
                }
              });

                handled.errors = responseErrors;
            }
        }
    } else if (response.status >= 200 && response.status < 300) {
        handled.type = 'success';
    }
    
    return handled;
}

export const getErrorMessages = (handled, values) => {
    let messages = [];
    if (typeof values !== 'undefined') {
        let valueKeys = Object.keys(values); 
        let errorKeys = Object.keys(handled.errors); 
        
        if (errorKeys.length > 0) {
            let errorsWithoutField = errorKeys.filter((item) => !valueKeys.includes(item));
            if (errorsWithoutField.length > 0) {
                messages = errorsWithoutField.map((item) => {
                    return handled.errors[item];
                });    
            }
        }   
    }

    if (messages.length === 0) {
        if (_.has(handled, 'message')) {
            messages.push(handled.message);
        }
    }

    if (messages.length === 0) {
        messages.push('There was a problem with that request');
    }
    return messages;
}

export const getSuccessMessage = (handled) => {
    let message = 'Completed Successfully';
    if (_.has(handled, 'message')) {
        message = handled.message;
    }
    return message;
}