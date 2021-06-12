export const required = (value) => {
if (value) return undefined
return "Field is required"
} 

export const maxLengthCreator = (maxLength) => (value) => {
if(value.length > maxLength) return `maximum length is more than ${maxLength} characters`
return undefined
} 