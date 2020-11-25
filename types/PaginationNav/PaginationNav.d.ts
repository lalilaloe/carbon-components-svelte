/// <reference types="svelte" />
import { SvelteComponent } from "svelte";

export interface PaginationNavProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["nav"]> {
  /**
   * Specify the current page index
   * @default 0
   */
  page?: number;

  /**
   * Specify the total number of pages
   * @default 10
   */
  total?: number;

  /**
   * Specify the total number of pages to show
   * @default 10
   */
  shown?: number;

  /**
   * Set to `true` to loop the navigation
   * @default false
   */
  loop?: boolean;

  /**
   * Specify the forward button text
   * @default "Next page"
   */
  forwardText?: string;

  /**
   * Specify the backward button text
   * @default "Previous page"
   */
  backwardText?: string;
}

export default class PaginationNav extends SvelteComponent<
  PaginationNavProps,
  { ["click:button--previous"]: CustomEvent<any>; ["click:button--next"]: CustomEvent<any>; change: CustomEvent<any> },
  {}
> {}
