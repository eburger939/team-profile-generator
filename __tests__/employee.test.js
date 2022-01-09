
const Employee = require('../lib/employee')

describe("Employee", () => {
    describe("getName", () => {
        it('should return the name of the employee', () => {
            const newName = "Emily"

            const result = new Employee('Emily').getName(newName)
            expect(result).toBe(newName)
        })
    })
    describe("getID", () => {
        it('should return the ID of the employee', () => {
            const newID = 26

            const result = new Employee('Emily', 26).getId(newID)
            expect(result).toBe(newID)
        })
    })
    describe("getEmail", () => {
        it('should return the email of the employee', () => {
            const newEmail = "emb.burger@yahoo.com"

            const result = new Employee('Emily', 26, 'emb.burger@yahoo.com').getEmail(newEmail)
            expect(result).toBe(newEmail)
        })
    })
    describe("getRole", () => {
        it('should return the role of the employee', () => {
            const newRole = "Employee"

            const result = new Employee().getRole(newRole)
            expect(result).toBe(newRole)
        })
    })
})
