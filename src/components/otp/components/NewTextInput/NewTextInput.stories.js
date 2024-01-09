import { NewTextInput } from ".";

export default {
  title: "Components/NewTextInput",
  component: NewTextInput,
  argTypes: {
    property1: {
      options: [
        "phone-number",
        "default",
        "variant-5",
        "error-or-info",
        "OTP",
        "dropdown",
        "uploaded",
        "social-media",
        "amount",
        "list",
        "upload",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "phone-number",
    className: {},
  },
};
