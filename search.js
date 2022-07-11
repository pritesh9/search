/**
 * Searches matching word in searchIndex and returns first n results with heighest searchScore.
 *
 * @param {array} d The data array containing searchIndex (manually generated string to match) and searchScore (usually initialised with score 0) fields.
 * @param {string} q The query string (for case insentivity supply the query and searchIndex in same case)
 * @param {number} n Limit number n fro results
 * @return {array} The result array containsing first n maching results.
 */
export const search = (d, q, n = 10) => {
	d = JSON.parse(JSON.stringify(d));
    q = q.split(" ").filter(x => x !== '');
	q.forEach(w => {
		d = d.map(o => {
			const mP = o.searchIndex.indexOf(w) / o.searchIndex.length;
			if (mP >= 0) o.searchScore += 2 - mP;
			return o;
		})
	});
	d.sort((a, b) => {
		return b.searchScore - a.searchScore;
	})
	return d.slice(0, n);
}