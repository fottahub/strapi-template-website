'use strict';

/**
 * skatespot service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::skatespot.skatespot');
