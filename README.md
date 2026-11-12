# Daily Quote

One sourced famous or Stoic quote for the day, on a Home Assistant dashboard card. The same quote stays up until tomorrow unless you ask for another.

On the card:

- **Another** skips to the next quote for today only. Tomorrow starts on the scheduled one.
- **Save** keeps a quote. **Saved** opens the ones you kept.

In the card setup:

- Font size, from 16 to 72
- Font style: classic serif, clean sans, soft humanist, typewriter, italic serif
- Alignment, line length, and spacing, so a large size still reads on a phone
- Famous and Stoic, Stoic only, or famous only
- Follow the dashboard colors, or set your own background and font color

The lines are short quotations with a named source. A few modern lines are still in copyright and are used as short quotations, not as a book.

## Install

Home Assistant 2026.11 and newer: Settings, Marketplace, add from link, and paste `https://github.com/rwunderlichsr/daily-quote-card`. Category: Dashboard.

HACS on an older version:

1. Three-dot menu, then Custom repositories.
2. Paste `https://github.com/rwunderlichsr/daily-quote-card`. Category: Dashboard.
3. Download Daily Quote, then reload the browser.

Add the card:

```yaml
type: custom:daily-quote-card
pool: all
use_theme: true
font_size: 30
font_style: serif
text_align: left
measure: reading
spacing: ease
```

`pool` is `all`, `stoic`, or `famous`. `font_style` is `serif`, `sans`, `humanist`, `mono`, or `italic`. `measure` is `narrow`, `reading`, or `wide`. `spacing` is `tight`, `ease`, or `air`.

Set `use_theme: false` and add `background_color` and `font_color` when you want your own colors. A hex color works. The visual editor saves red, green, and blue.

## Phone

Add the card to a dashboard, then open that dashboard in the Home Assistant companion app. Saved quotes stay on that phone or browser.
