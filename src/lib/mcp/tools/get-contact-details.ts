import { defineTool } from "@lovable.dev/mcp-js";

import { contact } from "../site-data";

export default defineTool({
  name: "get_contact_details",
  title: "Get contact details",
  description: "Get the phone number, email address and website for Suman Industries.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: (_input, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(contact, null, 2) }],
      structuredContent: { contact },
    };
  },
});
