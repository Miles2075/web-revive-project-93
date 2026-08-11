import { defineTool } from "@lovable.dev/mcp-js";

import { company } from "../site-data";

export default defineTool({
  name: "get_company_info",
  title: "Get company info",
  description:
    "Get the Suman Industries company overview, including its mission, vision and quality statement.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: (_input, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(company, null, 2) }],
      structuredContent: { company },
    };
  },
});
