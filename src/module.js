import { registerCampaignTimeline } from "./lib/integrations/campaignTimeline.js";

Hooks.once('ready', async function () {
    // Campaign Codex exposes its API in its own ready callback.
    await Promise.resolve();
    registerCampaignTimeline();
});
