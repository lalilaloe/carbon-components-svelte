/// <reference types="svelte" />
import { SvelteComponent } from "svelte";

export interface HeaderActionLinkProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["a"]> {
  /**
   * Set to `true` to use the active state
   * @default false
   */
  linkIsActive?: boolean;

  /**
   * Specify the `href` attribute
   */
  href?: string;

  /**
   * Specify the icon props
   */
  icon?: { render: import("carbon-icons-svelte").CarbonIcon; skeleton: boolean };

  /**
   * Obtain a reference to the HTML anchor element
   * @default null
   */
  ref?: null | HTMLAnchorElement;
}

export default class HeaderActionLink extends SvelteComponent<HeaderActionLinkProps, {}, {}> {}
