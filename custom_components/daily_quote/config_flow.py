"""Set up Daily Quote from the integration list, not from a dashboard."""

from __future__ import annotations

import voluptuous as vol
from homeassistant.config_entries import ConfigFlow, OptionsFlow
from homeassistant.core import callback

from .const import DEFAULTS, DOMAIN

POOLS = {"all": "Famous and Stoic", "stoic": "Stoic only", "famous": "Famous only"}
STYLES = {
    "serif": "Classic serif",
    "sans": "Clean sans",
    "humanist": "Soft humanist",
    "mono": "Typewriter",
    "italic": "Italic serif",
}
ALIGNS = {"left": "Left", "center": "Center"}
MEASURES = {"narrow": "Narrow", "reading": "Reading", "wide": "Wide"}
SPACING = {"tight": "Tight", "ease": "Comfortable", "air": "Airy"}


def _schema(current: dict) -> vol.Schema:
    values = {**DEFAULTS, **current}
    return vol.Schema(
        {
            vol.Required("pool", default=values["pool"]): vol.In(POOLS),
            vol.Required("font_size", default=values["font_size"]): vol.All(
                vol.Coerce(int), vol.Range(min=16, max=72)
            ),
            vol.Required("font_style", default=values["font_style"]): vol.In(STYLES),
            vol.Required("text_align", default=values["text_align"]): vol.In(ALIGNS),
            vol.Required("measure", default=values["measure"]): vol.In(MEASURES),
            vol.Required("spacing", default=values["spacing"]): vol.In(SPACING),
            vol.Required("use_theme", default=values["use_theme"]): bool,
            vol.Optional("background_color", default=values["background_color"]): str,
            vol.Optional("font_color", default=values["font_color"]): str,
        }
    )


class DailyQuoteConfigFlow(ConfigFlow, domain=DOMAIN):
    """One sidebar page for the household."""

    VERSION = 1

    async def async_step_user(self, user_input=None):
        if self._async_current_entries():
            return self.async_abort(reason="single_instance_allowed")
        if user_input is not None:
            return self.async_create_entry(title="Daily Quote", data={}, options=user_input)
        return self.async_show_form(step_id="user", data_schema=_schema(DEFAULTS))

    @staticmethod
    @callback
    def async_get_options_flow(config_entry):
        return DailyQuoteOptionsFlow()


class DailyQuoteOptionsFlow(OptionsFlow):
    """Change type, size, and colors later."""

    async def async_step_init(self, user_input=None):
        if user_input is not None:
            return self.async_create_entry(title="", data=user_input)
        return self.async_show_form(
            step_id="init",
            data_schema=_schema(self.config_entry.options),
        )
