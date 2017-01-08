/**
 * BigCommerce API Client File
 * This class interfaced directly with the user. 
 *
 * Initializes all of the associated resources and connection.
 *
 * @author Rob Mullins <rob@BetterCommerce.com>
 */



/**
 * Class Construct
 * Initializes the API File and all of the BC Resources.
 * @param credentials <mixed> - Credentials object with oAuth credentials. 
 */
function BigCommerce(credentials) {
  // Return new instance if this called without 'new'.
  if (!(this instanceof BigCommerce)) {
    return new BigCommerce(credentials);
  }

  // Ensure credentials parameter set:
  if (typeof credentials === 'undefined') {
    throw new Error('Error: Client needs to be initialized with a config parameter');
  } else if (typeof credentials.hash === 'undefined') {
    throw new Error('Error: Client needs store hash - config.hash.');
  } else if (typeof credentials.token === 'undefined') {
    throw new Error('Error: Client needs store oAuth token - config.token.');
  } else if (typeof credentials.cid === 'undefined') {
    throw new Error('Error: Client needs app client id - config.cid.');
  } else if (typeof credentials.host === 'undefined') {
    throw new Error('Error: Client needs BigComerce API Host URL - config.host.');
  }

  // Check if version set:
  if (typeof credentials.version === 'undefined') {
  	credentials.version = 2;
  } else {
  	if (credentials.version !== 2 || credentials.version !== 3) {
  		console.log('Incorrect version set, defaulting to version 2.');
  		credentials.version = 2;
  	}
  }

  // Initialize the BigCommerce Connection:
  this.initialize(credentials);
}

BigCommerce.prototype = {


	/**
	 * Initialize the BigCommerce Connection File
	 * and all BigCommerce resources.
	 * @param credentials <mixed> - BigCommerce Connection Credentials.
	 */
	initialize: function(credentials) {
		//** Initialize BigCommerce API Connection **//
		var connection = new Connection(credentials);

		//** Initialize BigCommerce Resources **//
		this.Products  = new Products(connection);
		this.Orders    = new Orders(connection);
		this.Content   = new Content(connection);
		this.Currency  = new Currency(connection);
		this.Customers = new Customers(connection);
		this.Marketing = new Marketing(connection);
		this.Webhooks  = new Webhooks(connection);
	}

};

module.exports = BigCommerce;










