/**
 * Static company content mirrored from the Suman Industries website.
 * Import-safe: plain data only, no env reads and no I/O.
 */

export const company = {
  name: "Suman Industries",
  website: "https://sumanindustries.in.net",
  summary:
    "Suman Industries manufactures and supplies gas handling equipment — gas manifolds, cylinder quad and skid manifolds, hydrotesting equipment, high pressure pigtails, CGA fittings and flexible hose assemblies.",
  mission:
    "Our mission is to exceed customer expectations by providing high-quality products and reliable service, fostering long-term partnerships built on honesty and integrity. We focus on delivering consistent value to meet the evolving needs of our clients.",
  vision:
    "Our vision is driven by a commitment to continuous innovation and strong customer engagement. We aim to deliver the best possible solutions by carefully listening to and understanding the unique needs of each client, ensuring that we meet their expectations with precision and dedication.",
  quality:
    "We supply products that meet national and international standards, backed by a skilled workforce and responsive after-sales service to ensure top-quality performance.",
} as const;

export const contact = {
  phone: "+91 70693 03290",
  email: "info@sumanindustries.in.net",
  website: "https://sumanindustries.in.net",
} as const;

export interface Product {
  slug: string;
  name: string;
  description: string;
}

export const products: readonly Product[] = [
  {
    slug: "gas-manifolds",
    name: "Gas Manifolds",
    description:
      "Manifold systems for the safe distribution of industrial and medical gases from multiple cylinders to a single outlet line.",
  },
  {
    slug: "cylinder-quad-skid-manifold",
    name: "Cylinder Quad & Skid Manifold",
    description:
      "Quad and skid-mounted cylinder assemblies for transporting and supplying high-pressure gas in bulk.",
  },
  {
    slug: "gas-handling-equipment",
    name: "Gas Handling Equipment & Devices",
    description:
      "Regulators, valves and control devices used to handle, regulate and monitor gas flow safely.",
  },
  {
    slug: "cylinder-hydrotesting-equipment",
    name: "Cylinder Hydrotesting Equipment",
    description:
      "Equipment for periodic hydrostatic pressure testing of gas cylinders as required by safety standards.",
  },
  {
    slug: "high-pressure-pigtails",
    name: "High Pressure Pigtails",
    description:
      "Flexible high-pressure connecting pigtails linking cylinders to manifold headers.",
  },
  {
    slug: "cga-fitting",
    name: "CGA Fitting",
    description:
      "CGA-standard fittings, adaptors and connections for gas cylinder and manifold interfaces.",
  },
  {
    slug: "flexible-hoses-assembly-fittings",
    name: "Flexible Hoses Assembly & Fittings",
    description:
      "Flexible hose assemblies and matching fittings for gas and fluid transfer applications.",
  },
];
