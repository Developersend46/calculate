import { INVALID } from "../_constant/index,"
export const validateExpression = (text = '') => {
    text = text.replace(/sin/g, 'Math.sin')
    text = text.replace(/cos/g, 'Math.cos')
    text = text.replace(/tan/g, 'Math.tan')
    try {
        let validate = eval(text).toString()
        return validate.match('native code') ? INVALID : validate
    } catch (error) {
        return INVALID
    }
}