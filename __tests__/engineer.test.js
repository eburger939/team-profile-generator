
const Engineer = require('../lib/engineer')

describe("Engineer", () => {
    describe("getEmail", () => {
        it('should return the email of the employee', () => {
            const newEmail = "emb.burger@yahoo.com"

            const result = new Engineer('Emily', 26, 'emb.burger@yahoo.com').getEmail(newEmail)
            expect(result).toBe(newEmail)
        })
    })
    describe("getGitHub", () => {
        it('should return the github username of the engineer', () => {
            const username = "eburger939"

            const result = new Engineer('Emily', 24, 'emb.burger@yahoo.com', 'eburger939').getGitHub(username)
            expect(result).toBe(username)
        })
    })
    describe("getRole", () => {
        it('should return the role of the employee', () => {
            const newRole = "Engineer"

            const result = new Engineer().getRole(newRole)
            expect(result).toBe(newRole)
        })
    })
})
