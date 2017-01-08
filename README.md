# bigcommerce-oauth-node
A complete SDK for the BigCommerce oAuth based API<br/>

This is still a work in progress. To contribute, please send an email to the author, Rob Mullins - rob@surerob.com.<br/>

# File Structure:

**src**/  <br/>
-- connection.js // The CRUD BigCommerce API Connection File. The heart of this all. <br/>
-- client.js     // API Client Object used by the user. Initializes all resources and their subresources.<br/>

-- **Resources**/    // Contains the main BigCommerce Resources<br/>

==================<br/>
ORDERS<br/>
==================<br/>
---- **Orders**/              // https://developer.bigcommerce.com/api/v2/#orders-reference <br/>
------ Orders.js               // SubResource Initializer<br/>
------ **SubResources**/       // Contains the Order SubResources<br/>
-------- orders.js             // https://developer.bigcommerce.com/api/v2/#orders <br/>
-------- coupons.js            // https://developer.bigcommerce.com/api/v2/#order-coupons <br/>
-------- messages.js           // https://developer.bigcommerce.com/api/v2/#order-messages <br/>
-------- products.js           // https://developer.bigcommerce.com/api/v2/#order-products <br/>
-------- shipping_addresses.js // https://developer.bigcommerce.com/api/v2/#order-shipping-addresses <br/>
-------- statuses.js           // https://developer.bigcommerce.com/api/v2/#order-statuses <br/>
-------- taxes.js              // https://developer.bigcommerce.com/api/v2/#order-taxes <br/>
-------- shipments.js          // https://developer.bigcommerce.com/api/v2/#shipments <br/>

==================<br/>
PRODUCTS<br/>
==================<br/>
---- **Products**/ https://developer.bigcommerce.com/api/v2/#products-reference  <br/>
------ Products.js               // SubResource Initializer<br/>
------ **SubResources**/       // Contains the Products SubResources<br/>
-------- products.js https://developer.bigcommerce.com/api/v2/#products <br/>
-------- brands.js    https://developer.bigcommerce.com/api/v2/#brands <br/>
-------- bulk_pricing.js https://developer.bigcommerce.com/api/v2/#bulk-pricing <br/>
-------- categories.js  https://developer.bigcommerce.com/api/v2/#categories <br/>
-------- configurable_fields.js https://developer.bigcommerce.com/api/v2/#configurable-fields <br/>
-------- custom_fields.js https://developer.bigcommerce.com/api/v2/#custom-fields <br/>
-------- google_mappings https://developer.bigcommerce.com/api/v2/#google-product-search-mappings <br/>
-------- options.js https://developer.bigcommerce.com/api/v2/#options <br/>
-------- option_sets.js https://developer.bigcommerce.com/api/v2/#option-sets <br/>
-------- option_set_options.js https://developer.bigcommerce.com/api/v2/#option-set-options <br/>
-------- option_values.js https://developer.bigcommerce.com/api/v2/#option-values <br/>
-------- product_images.js https://developer.bigcommerce.com/api/v2/#product-images <br/>
-------- product_options.js https://developer.bigcommerce.com/api/v2/#product-options <br/>
-------- product_reviews.js https://developer.bigcommerce.com/api/v2/#product-reviews <br/>
-------- product_rules.js https://developer.bigcommerce.com/api/v2/#product-rules <br/>
-------- videos.js https://developer.bigcommerce.com/api/v2/#videos <br/>
-------- touch skus.js https://developer.bigcommerce.com/api/v2/#skus <br/>

================== <br/>
CUSTOMERS<br/>
==================<br/>
---- **Customers**/ https://developer.bigcommerce.com/api/v2/#customers-reference  <br/>
------ Customers.js            // SubResource Initializer<br/>
------ **SubResources**/       // Contains the Customers SubResources<br/>
-------- customers.js https://developer.bigcommerce.com/api/v2/#customers <br/>
-------- customer_addresses.js https://developer.bigcommerce.com/api/v2/#customer-addresses <br/>
-------- customer_groups.js https://developer.bigcommerce.com/api/v2/#customer-groups <br/>

================== <br/>
STORE CONTENT <br/>
================== <br/>
---- **Content**/ https://developer.bigcommerce.com/api/v2/#store-content-reference  <br/>
------ Content.js            // SubResource Initializer<br/>
------ **SubResources**/       // Contains the Content SubResources<br/>
-------- blog_posts.js https://developer.bigcommerce.com/api/v2/#blog-posts <br/>
-------- blog_tags.js https://developer.bigcommerce.com/api/v2/#blog-tags<br/>
-------- pages.js https://developer.bigcommerce.com/api/v2/#pages<br/>
-------- redirects.js https://developer.bigcommerce.com/api/v2/#redirects<br/>

================== <br/>
Currency <br/>
================== <br/>
---- **Currency**/ https://developer.bigcommerce.com/api/v2/#currency-reference <br/>
------ Currency.js            // SubResource Initializer<br/>
------ **SubResources**/       // Contains the Currency SubResources<br/>
-------- currency.js https://developer.bigcommerce.com/api/v2/#currency-object-properties <br/>


================== <br/>
Marketing <br/>
================== <br/>
---- **Marketing**/ https://developer.bigcommerce.com/api/v2/#marketing-reference <br/>
------ Marketing.js            // SubResource Initializer<br/>
------ **SubResources**/       // Contains the Marketing SubResources<br/>
-------- coupons.js https://developer.bigcommerce.com/api/v2/#coupons<br/>
-------- gift_certificates.js https://developer.bigcommerce.com/api/v2/#banners<br/>
-------- touch banners.js https://developer.bigcommerce.com/api/v2/#gift-certificates<br/>
