"""Daily Quote sidebar page for Home Assistant."""

from __future__ import annotations

from pathlib import Path

from homeassistant.components.frontend import async_remove_panel
from homeassistant.components.http import StaticPathConfig
from homeassistant.components.panel_custom import async_register_panel
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant

from .const import DEFAULTS, DOMAIN, PANEL

ASSETS = "assets"


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    hass.data.setdefault(DOMAIN, {})
    await _async_register_assets(hass)
    await _async_register_panel(hass, entry)
    entry.async_on_unload(entry.add_update_listener(_async_options_updated))
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    if PANEL in hass.data.get("frontend_panels", {}):
        async_remove_panel(hass, PANEL)
    return True


async def _async_options_updated(hass: HomeAssistant, entry: ConfigEntry) -> None:
    await _async_register_panel(hass, entry)


async def _async_register_assets(hass: HomeAssistant) -> None:
    if hass.data[DOMAIN].get(ASSETS):
        return
    root = Path(__file__).parent / "www"
    await hass.http.async_register_static_paths(
        [StaticPathConfig("/daily_quote", str(root), False)]
    )
    hass.data[DOMAIN][ASSETS] = True


async def _async_register_panel(hass: HomeAssistant, entry: ConfigEntry) -> None:
    if PANEL in hass.data.get("frontend_panels", {}):
        async_remove_panel(hass, PANEL)
    options = {**DEFAULTS, **entry.options}
    await async_register_panel(
        hass,
        frontend_url_path=PANEL,
        webcomponent_name="daily-quote-card",
        sidebar_title="Daily Quote",
        sidebar_icon="mdi:format-quote-close",
        module_url="/daily_quote/daily-quote-card.js?v=2",
        config=options,
        require_admin=False,
        embed_iframe=True,
    )
