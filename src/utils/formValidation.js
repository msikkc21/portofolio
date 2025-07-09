/**
 * Form validation utility functions
 */

/**
 * Validates an email address
 * @param {string} email - The email to validate
 * @returns {boolean} - Whether the email is valid
 */
export const validateEmail = (email) => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

/**
 * Validates a form field is not empty
 * @param {string} value - The field value to check
 * @returns {boolean} - Whether the field is not empty
 */
export const validateRequired = (value) => {
  return value.trim() !== '';
};

/**
 * Validates a message has minimum length
 * @param {string} value - The message to validate
 * @param {number} minLength - The minimum length required
 * @returns {boolean} - Whether the message meets length requirements
 */
export const validateMinLength = (value, minLength = 10) => {
  return value.trim().length >= minLength;
};

/**
 * Validates a phone number format
 * @param {string} phone - The phone number to validate
 * @returns {boolean} - Whether the phone number is valid
 */
export const validatePhone = (phone) => {
  // Basic international phone format
  const regex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/;
  return regex.test(phone);
};

/**
 * Returns form validation errors
 * @param {Object} formData - The form data object
 * @returns {Object} - Object with field names as keys and error messages as values
 */
export const validateForm = (formData) => {
  const errors = {};
  
  if (!validateRequired(formData.user_name)) {
    errors.user_name = 'Name is required';
  }
  
  if (!validateRequired(formData.user_email)) {
    errors.user_email = 'Email is required';
  } else if (!validateEmail(formData.user_email)) {
    errors.user_email = 'Please enter a valid email address';
  }
  
  if (!validateRequired(formData.message)) {
    errors.message = 'Message is required';
  } else if (!validateMinLength(formData.message, 10)) {
    errors.message = 'Message must be at least 10 characters';
  }
  
  return errors;
};
