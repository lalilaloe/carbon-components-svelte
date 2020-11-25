/// <reference types="svelte" />
import { SvelteComponent } from "svelte";

export interface ToolbarProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["section"]> {
  /**
   * Specify the toolbar size
   * @default "default"
   */
  size?: "sm" | "default";
}

export default class Toolbar extends SvelteComponent<ToolbarProps, {}, { default: {} }> {}
