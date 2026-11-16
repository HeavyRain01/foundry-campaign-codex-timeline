# Campaign Codex Timeline Widget

**Campaign Codex Timeline Widget** adds a manually ordered timeline of dates and events to Campaign Codex journals. It supports Foundry VTT v13 and v14 and requires Campaign Codex.

## Install

In Foundry's **Add-on Modules** tab, select **Install Module** and paste the [release manifest](https://github.com/HeavyRain01/foundry-campaign-codex-timeline/releases/latest/download/module.json). Enable **Campaign Codex** and **Campaign Codex Timeline Widget** in your world.

If you already use Campaign Timeline from WTTRPG Enhancements, enable this module and reopen the existing Campaign Codex journal. Your dates, events, and attachments are stored on that journal and carry over automatically.

## Using the widget

Open a Campaign Codex journal and choose **Campaign Timeline** from its widget picker.

- GMs with ownership can select **Edit timeline**; players see the reading view.
- **Add date** creates a group with any date text. **Add event** adds a required time or free-text label within that date.
- Each date and event can have a rich-text description and multiple linked Codex sheets. Drop NPCs, locations, regions, quests, factions, shops, groups, or other Codex entries into the single attachment area. Sheets group automatically by type; duplicates are ignored and existing links are preserved.
- Use the left drag handles or arrow buttons to reorder dates and events. Events stay inside their parent date; date text is never parsed or sorted.
- Attachment groups flow inline and wrap as space permits, with a border around each complete group and icon tooltips. In edit mode, drag a group icon to reorder groups, or a tag's handle to reorder links within its group. Drop on the left/right half of a target to insert before/after it. Focus a handle and use the arrow keys for keyboard reordering. These orders are saved separately for each date or event.
- Select **Done** to return to the timeline view. Changes save after each action, and each widget stores its own data on its hosting journal. Linked sheets open when clicked, subject to the viewer's document permissions.

Everyone who can view the host journal can read the timeline text.
