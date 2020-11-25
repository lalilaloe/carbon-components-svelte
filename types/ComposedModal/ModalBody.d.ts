/// <reference types="svelte" />
import { SvelteComponent } from "svelte";

export interface ModalBodyProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * Set to `true` if the modal contains form elements
   * @default false
   */
  hasForm?: boolean;

  /**
   * Set to `true` if the modal contains scrolling content
   * @default false
   */
  hasScrollingContent?: boolean;
}

export default class ModalBody extends SvelteComponent<ModalBodyProps, {}, { default: {} }> {}
