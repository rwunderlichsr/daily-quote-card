# Daily Quote

One famous or Stoic quote each day, on a Home Assistant dashboard card. The quote stays the same until tomorrow.

In the card setup you can set:

- Font size
- Font style (classic serif, clean sans, soft humanist, typewriter, italic serif)
- Background color
- Font color

## Install with HACS

1. HACS → three-dot menu → **Custom repositories**.
2. Paste `https://github.com/rwunderlichsr/daily-quote-card`. Category: **Lovelace**.
3. Download **Daily Quote**, then reload the browser.
4. Add a card:

```yaml
type: custom:daily-quote-card
font_size: 32
font_style: serif
background_color: "#f3ecdf"
font_color: "#1c1915"
```

Open the card's visual editor to change size, style, and colors without editing YAML. The color pickers save red, green, and blue values. A hex color in YAML works too.

`font_style` is one of `serif`, `sans`, `humanist`, `mono`, or `italic`.

## Phone

Add the card to a dashboard, then open that dashboard in the Home Assistant companion app.
