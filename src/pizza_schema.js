import * as yup from 'yup';

const pizzaSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .min(3, "name must be at least 2 characters")
})

export default pizzaSchema;