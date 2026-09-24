import test from 'node:test'
import assert from 'node:assert/strict'
import { filterVenues, venues } from './data.js'

test('finds relevant food and venue searches', () => assert.ok(filterVenues({ query: 'chicken' }).map(v => v.id).includes('kfc-reference')))
test('filters demo delivery venues', () => assert.deepEqual(filterVenues({ delivery: true }).map(v => v.id), ['moris-table']))
test('never gives a reference item an invented price', () => assert.equal(venues.find(v => v.status === 'REFERENCE').menu[0].price, null))
