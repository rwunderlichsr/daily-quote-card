# Daily Quote

A Home Assistant integration. It adds **Daily Quote** to the sidebar. It is not a dashboard card.

One sourced famous or Stoic quote stays up for the day. **Another** skips to the next quote for today. **Save** keeps a quote. **Saved** opens the ones you kept.

## Install

In HACS, add this repository as an **Integration**, not a Dashboard:

`https://github.com/rwunderlichsr/daily-quote-card`

Download Daily Quote, restart Home Assistant, then go to Settings, Devices & services, Add integration, and choose Daily Quote.

The setup is where you set the font size (16 to 72), the font style, alignment, and colors. Use a hex color such as `#1c1915` when you turn off **Match your theme**.

Change those later under the integration's settings. The sidebar page updates after you save.

Font styles: classic serif, clean sans, soft humanist, typewriter, italic serif.

Quotes are `all`, `stoic`, or `famous`.
