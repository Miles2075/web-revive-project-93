import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";

import { products } from "../site-data";

export default defineTool({
  name: "get_product",
  title: "Get product",
  description:
    "Get details for one Suman Industries product by its slug or name (use list_products to discover slugs).",
  inputSchema: {
    query: z.string().describe("Product slug or name, e.g. 'gas-manifolds' or 'Gas Manifolds'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const needle = query.trim().toLowerCase();
    const product = products.find(
      (p) => p.slug === needle || p.name.toLowerCase() === needle,
    ) ?? products.find((p) => p.name.toLowerCase().includes(needle));
    if (!product) {
      throw new ToolError(`No product matched "${query}". Call list_products for valid options.`);
    }
    return {
      content: [{ type: "text", text: JSON.stringify(product, null, 2) }],
      structuredContent: { product },
    };
  },
});
