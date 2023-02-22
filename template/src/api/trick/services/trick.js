'use strict';

/**
 * trick service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::trick.trick');
