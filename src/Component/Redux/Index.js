import { configureStore } from "@reduxjs/toolkit";
import { formValidationStore } from "./FormValidation";

const rootReducer = {
    userFormName: formValidationStore,
    userNameValidation: formValidationStore,
    userFormPassword: formValidationStore,
    userPasswordValidation: formValidationStore
}
const store = configureStore({
    reducer: rootReducer
})
export default store;