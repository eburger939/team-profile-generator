
const Intern = require('../lib/intern')

describe("Intern", () => {
    describe("getSchool", () => {
        it('should return the school of the intern', () => {
            const newSchool = "University of Iowa"

            const result = new Intern('Emily', 26, 'emb.burger@yahoo.com', 'University of Iowa').getSchool(newSchool)
            expect(result).toBe(newSchool)
        })
    })
    describe("getRole", () => {
        it('should return the role of the intern', () => {
            const newRole = "Intern"

            const result = new Intern().getRole(newRole)
            expect(result).toBe(newRole)
        })
    })
})
