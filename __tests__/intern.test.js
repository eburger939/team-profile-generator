
const Intern = require('../lib/intern')

describe("Intern", () => {
    describe("getID", () => {
        it('should return the ID of the intern', () => {
            const newID = 26

            const result = new Intern('Emily', 26).getId(newID)
            expect(result).toBe(newID)
        })
    })
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
