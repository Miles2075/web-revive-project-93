import { defineTool } from "@lovable.dev/mcp-js";

import { products } from "../site-data";

export default defineTool({
  name: "list_products",
  title: "List products",
  description:
    "List every product category Suman Industries offers, with a short description of each.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: (_input, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(products, null, 2) }],
      structuredContent: { products },
    };
  },
});
