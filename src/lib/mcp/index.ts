import { auth, defineMcp, type AnyToolDefinition } from "@lovable.dev/mcp-js";

import getCompanyInfoTool from "./tools/get-company-info";
import getContactDetailsTool from "./tools/get-contact-details";
import getProductTool from "./tools/get-product";
import listProductsTool from "./tools/list-products";

// The OAuth issuer must be the direct auth host; the project ref is inlined at
// build time and is the only value that survives publish unchanged.
const projectRef = import.meta.env['VITE_SUPABASE_PROJECT_ID'] ?? "project-ref-unset";

export default defineMcp({
  name: "pixel-perfect-replica",
  title: "Pixel Perfect Replica",
  version: "0.1.0",
  instructions:
    "Tools for the Suman Industries site. Use get_company_info for the company overview, list_products and get_product for the gas handling product catalogue, and get_contact_details for phone, email and website.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [
    getCompanyInfoTool,
    listProductsTool,
    getProductTool,
    getContactDetailsTool,
  ] as unknown as AnyToolDefinition[],
});
