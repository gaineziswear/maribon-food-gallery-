# MARIBON HUB MVP architecture

## Current web client

The responsive Vite/React client is a food-discovery MVP. Its data boundary lives in `src/data.js`, keeping public **REFERENCE DATA**, **DEMO / TEST DATA**, and future **APPROVED MARIBON PARTNERS** distinguishable in the rendering layer. Reference menu items have `price: null`; the interface displays “Price to verify” and blocks cart additions.

## Production service boundary

The production deployment should run the web application behind a same-origin API and PostgreSQL. The API must authenticate through secure HttpOnly cookies and resolve roles from server-side session data only:

| Area | Service responsibility |
| --- | --- |
| Identity | email/password hashing, sessions, profile/address privacy, first-admin bootstrap guarded by `MARIBON_ADMIN_SETUP_CODE` |
| Discovery | indexed venue/menu/theme search; pagination; location hierarchy is data-driven |
| Commerce | server-calculated prices, voucher redemption, order state transition validation and payment-provider adapter |
| Partner operations | signed supplier application, CSV validation/preview/submission, admin approval and immutable audit events |
| Delivery | driver-only state transitions, coarse ETA/nearby event, opt-in location retention and SMS adapter |
| Media | signed object-storage upload URLs, MIME/size validation, async thumbnail/moderation workflow |

## Initial normalized data model

Use UUID primary keys and created/updated timestamps on `users`, `profiles`, `roles`, `venues`, `venue_locations`, `venue_facilities`, `venue_categories`, `menus`, `menu_categories`, `menu_items`, `menu_item_options`, `themes`, `orders`, `order_items`, `order_status_history`, `delivery_orders`, `drivers`, `driver_locations`, `reviews`, `review_media`, `video_reviews`, `favorites`, `points_accounts`, `points_transactions`, `vouchers`, `voucher_redemptions`, `supplier_applications`, `supplier_signatures`, `menu_submissions`, `menu_submission_items`, `promotions`, `notifications`, `sms_events`, `audit_logs`, and `business_settings`.

Add indexes for venue slug/search/location, menu search, order user/status, review venue/status, and supplier application status. Soft-delete public/user-generated records where lawful and appropriate.

## Security invariants

* Never accept a client price, points balance, role, voucher validity, supplier approval, or order transition as authoritative.
* Enforce MEMBER, PARTNER, SUPPLIER, DRIVER, and ADMIN authorization in every privileged API handler.
* Validate uploads both before issuing a signed URL and on worker ingest. No executable content is allowed.
* Use rate limits on authentication, reviews, applications and checkout; log all admin decisions as audit events.

## Required operations API

Public API: `GET /api/venues`, `GET /api/venues/:id`, `GET /api/venues/:id/menu`, `GET /api/themes`, and `GET /api/search`.

Authenticated API: `POST /api/orders`, `GET /api/orders/:id`, `POST /api/reviews`, `POST /api/video-reviews`, `GET /api/rewards`, and `POST /api/vouchers/redeem`.

Supplier API: `POST /api/suppliers/apply`, `GET /api/supplier/profile`, `POST /api/supplier/menu/upload`, and `POST /api/supplier/menu/submit`.

Admin API: `GET /api/admin/overview`, `GET /api/admin/suppliers`, `POST /api/admin/suppliers/:id/approve`, `POST /api/admin/suppliers/:id/reject`, `GET /api/admin/menu-submissions`, and `POST /api/admin/menu-submissions/:id/approve`.
