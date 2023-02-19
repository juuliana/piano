export namespace IToggle {
  export interface Props {
    onSelect: (option: Selected) => void;
  }

  export type Selected = "hidden" | "key" | "name" | "code";

  export type Option = {
    selected?: Selected;
  };
}
