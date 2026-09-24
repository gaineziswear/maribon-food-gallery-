import { describe, expect, it } from 'vitest'
import { filterVenues, venues } from './data'

describe('venue discovery policy', () => {
  it('finds relevant food and venue searches', () => expect(filterVenues({ query: 'chicken' }).map(v => v.id)).toContain('kfc-reference'))
  it('filters demo delivery venues', () => expect(filterVenues({ delivery: true }).map(v => v.id)).toEqual(['moris-table']))
  it('never gives a reference item an invented price', () => expect(venues.find(v => v.status === 'REFERENCE').menu[0].price).toBeNull())
})
