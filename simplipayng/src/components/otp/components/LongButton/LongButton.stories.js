import { LongButton } from ".";

export default {
  title: "Components/LongButton",
  component: LongButton,
  argTypes: {
    property1: {
      options: ["variant-4", "filled", "outline", "inactive"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-4",
    className: {},
    text: "Next",
  },
};
