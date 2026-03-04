import { configure } from "@storybook/react-native";

configure(() => {
  require("../src/components/inputField/InputField.stories.js");
  require("../src/components/form/Form.stories.js");
}, module);
