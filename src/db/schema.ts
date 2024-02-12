import { relations } from "drizzle-orm";
import {
  boolean,
  mysqlEnum,
  mysqlTableCreator,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

export const mysqlTable = mysqlTableCreator((name) => `quill__${name}`);

// index on stripesubscriptionid
export const users = mysqlTable("users", {
  id: varchar("id", { length: 255 }).primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  stripeCustomerId: varchar("stripe_customer_id", { length: 255 }).unique(),
  stripeSubscriptionId: varchar("stripe_subscription_id", {
    length: 255,
  }).unique(),
  stripePriceId: varchar("stripe_price_id", { length: 255 }),
  stripeCurrentPeriodEnd: timestamp("stripe_current_period_end"),
});

export const usersRelations = relations(users, ({ many }) => ({
  files: many(files),
  messages: many(messages),
}));

export const files = mysqlTable("files", {
  id: varchar("id", { length: 255 }).primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  uploadStatus: mysqlEnum("upload_status", [
    "PENDING",
    "PROCESSING",
    "FAILED",
    "SUCCESS",
  ])
    .notNull()
    .default("PENDING"),
  url: varchar("url", { length: 255 }).notNull(),
  key: varchar("key", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
  userId: varchar("user_id", { length: 255 }),
});

export const fileRelations = relations(files, ({ one, many }) => ({
  user: one(users, {
    fields: [files.userId],
    references: [users.id],
  }),
  messages: many(messages),
}));

export const messages = mysqlTable("messages", {
  id: varchar("id", { length: 255 }).primaryKey(),
  text: text("text").notNull(),
  isUserMessage: boolean("is_user_message").notNull().default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
  userId: varchar("user_id", { length: 255 }),
  fileId: varchar("file_id", { length: 255 }),
});

export const messageRelations = relations(messages, ({ one }) => ({
  user: one(users, {
    fields: [messages.userId],
    references: [users.id],
  }),
  file: one(files, {
    fields: [messages.fileId],
    references: [files.id],
  }),
}));
