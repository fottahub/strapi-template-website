'use strict';

/**
 * trick router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::trick.trick');
