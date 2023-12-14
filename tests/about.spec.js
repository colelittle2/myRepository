import {describe, it, expect} from 'vitest';
import {add} from '../src/about.js';

describe('About this test suite', () => {
    it('should work', () => {
        expect(true).toBe(true);
    })

    it('should calculate 1 + 1', () => {
        const actual = add(1,2);
        const expected = 3;
    })
})