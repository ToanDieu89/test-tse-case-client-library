import { selectV2 as select } from "@storybook/addon-knobs";

export function optionalSelect() {
  return select.apply(null, arguments) || undefined;
}
