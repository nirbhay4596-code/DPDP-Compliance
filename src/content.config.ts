import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// The three commencement stages. Every rule sits on exactly one.
export const STAGES = {
  '2025-11-13': { label: '13 Nov 2025', note: 'In force — regulator machinery' },
  '2026-11-13': { label: '13 Nov 2026', note: 'Consent Manager registration' },
  '2027-05-13': { label: '13 May 2027', note: 'Everything that burdens business' },
} as const;

// The 15 compliance clusters from the Grouped Guide. The cluster view reads this.
export const CLUSTERS = [
  { id: 1, name: 'Governance & accountability', universal: true },
  { id: 2, name: 'Lawful basis', universal: true },
  { id: 3, name: 'Notice, consent quality, languages', universal: false },
  { id: 4, name: 'Security', universal: true },
  { id: 5, name: 'Breach response', universal: true },
  { id: 6, name: 'Retention & erasure', universal: true },
  { id: 7, name: 'Rights & grievances', universal: true },
  { id: 8, name: 'Children & guardians', universal: false },
  { id: 9, name: 'Significant Data Fiduciary', universal: false },
  { id: 10, name: 'Sending data abroad', universal: false },
  { id: 11, name: 'Vendor / processor management', universal: true },
  { id: 12, name: 'Government demands', universal: false },
  { id: 13, name: 'Exemptions', universal: false },
  { id: 14, name: 'Consent Manager track', universal: false },
  { id: 15, name: 'The Board & appeals', universal: false },
] as const;

const rules = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/rules' }),
  schema: z.object({
    // Identity
    rule: z.number().int().min(1).max(23),
    title: z.string(),
    summary: z.string(),

    // The header box from your notes
    live: z.enum(['2025-11-13', '2026-11-13', '2027-05-13']),
    actSections: z.array(z.string()),       // e.g. ['s.8(4)', 's.8(5)']
    madeUnder: z.array(z.string()),          // e.g. ['s.40(1)', 's.40(2)(z)']
    penalty: z.string().nullable(),          // e.g. '₹250 crore', or null
    schedules: z.array(z.string()).default([]),

    // Cross-view navigation
    cluster: z.number().int().min(1).max(15),

    // Your original analysis — these drive the "what's different here" pages
    viresNote: z.string().optional(),        // Rules 6, 8(3), 15
    draftingDefect: z.string().optional(),   // Rules 14(3), 23(1), Sch IV note, Rule 16

    // Provenance discipline — no page ships without this
    verifiedAgainstGazette: z.boolean().default(false),
    lastReviewed: z.date(),
  }),
});

export const collections = { rules };
