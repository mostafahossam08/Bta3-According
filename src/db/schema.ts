import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

// Leads captured from the "Get Your According" / contact forms on the
// marketing site. Kept intentionally simple — this powers a lightweight
// fullstack flow (form -> API route -> Postgres) alongside the WhatsApp CTA.
export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 160 }).notNull(),
  phone: varchar("phone", { length: 60 }).notNull(),
  email: varchar("email", { length: 160 }),
  interest: varchar("interest", { length: 80 }).notNull().default("general"),
  message: text("message"),
  locale: varchar("locale", { length: 5 }).notNull().default("en"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type Lead = typeof leads.$inferSelect;
export type NewLead = typeof leads.$inferInsert;

