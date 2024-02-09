// export const user = sqliteTable("user", {
//         id: text("id")
//         email: text("email")
//         undefined: undefined,
//         File: text('file[]_undefined'),
//         Message: text('message[]_undefined'),
//         undefined: undefined,
//         stripeCustomerId: text("stripe_customer_id")
//         stripeSubscriptionId: text("stripe_subscription_id")
//         stripePriceId: text("stripe_price_id")
//         stripeCurrentPeriodEnd: integer('created_at', { mode: 'timestamp' })
//         }
// export const undefined = sqliteTable("undefined", {
//         PENDING: undefined,
//         PROCESSING: undefined,
//         FAILED: undefined,
//         SUCCESS: undefined,
//         }
// export const file = sqliteTable("file", {
//         id: text("id").default(cuid()),
//         name: text("name"),
//         undefined: undefined,
//         uploadStatus: text('uploadstatus_undefined').default(PENDING),
//         undefined: undefined,
//         url: text("url"),
//         key: text("key"),
//         messages: text('message[]_undefined'),
//         undefined: undefined,
//         createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`(strftime('%s', 'now'))`),
//         updatedAt: integer('created_at', { mode: 'timestamp' })
//         User: text('user_id)').references(()=> _user.id),
//         userId: text("user_id"),
//         }
// export const message = sqliteTable("message", {
//         id: text("id").default(cuid()),
//         text: text("text")
//         undefined: undefined,
//         isUserMessage: integer("is_user_message"),
//         undefined: undefined,
//         createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`(strftime('%s', 'now'))`),
//         updatedAt: integer('created_at', { mode: 'timestamp' })
//         User: text('user_id)').references(()=> _user.id),
//         userId: text("user_id"),
//         File: text('file_id)').references(()=> _file.id),
//         fileId: text("file_id"),
//         }
