export const buttonNewProperties = (schema) => {
    schema.properties.Outline = {
        title: "Outline",
        type: "boolean",
        description: "Remove all background images and colors on any button.",
    };

    schema.properties.size = {
        title: "Size",
        type: "string",
        description: "Select the button size",
        choices: [
            ['large', 'Large'],
            ['small', 'Small'],
            ['normal', 'Normal'],
        ],
    };

    schema.properties.button_type = {
        title: "Button Type",
        type: "string",
        description: "Select the button type",
        choices: [
            ['primary', 'Primary'],
            ['secondary', 'Secondary'],
            ['success', 'Success'],
            ['danger', 'Danger'],
            ['warning', 'Warning'],
            ['info', 'Info'],
            ['light', 'Light'],
            ['dark', 'Dark'],
        ],
    };
    schema.fieldsets[0].fields.push("Outline", "button_type", "size");

    return schema;
};
